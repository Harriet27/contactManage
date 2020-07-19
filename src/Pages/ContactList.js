import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetContacts } from '../Redux/Action/ContactAction';

const ContactList = () => {
    const dispatch = useDispatch();

    const ContactList = useSelector((state) => state.contact.contactList);

    useEffect(() => {
        dispatch(GetContacts());
    });

    const renderTable = () => {
        return ContactList.map((val, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{val.firstName}</td>
                    <td>{val.lastName}</td>
                    <td>{val.age}</td>
                    <td>
                        <img src={val.photo} alt="contact img" height="100px" />
                    </td>
                </tr>
            );
        })
    };

    return (
        <div>
            <Table hover bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable()}
                </tbody>
            </Table>
        </div>
    );
};

export default ContactList;
