import React, { useEffect, useState } from 'react';
import { Input, Table, Button } from 'reactstrap';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { GetContacts, AddContact, DeleteContact, EditContact } from '../Redux/Action/ContactAction';

const ManageContacts = () => {
    const dispatch = useDispatch();

    const contactList = useSelector((state) => state.contact.contactList);
    const loading = useSelector((state) => state.contact.loading);

    const [update, setUpdate] = useState(false);
    const [toggle, setToggle] = useState(null);
    const [formInput, setFormInput] = useState({
        firstName: '',
        lastName: '',
        age: '',
        photo: '',
    });
    const [formEdit, setFormEdit] = useState({
        firstName: '',
        lastName: '',
        age: '',
        photo: '',
    });

    useEffect(() => {
        dispatch(GetContacts());
        if (update) {
            setUpdate(false);
        }
    }, [dispatch, update]);

    const handleChangeInput = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value,
        });
    };
    console.log(formInput);

    const handleChangeEdit = (e) => {
        setFormEdit({
            ...formEdit,
            [e.target.name]: e.target.value,
        });
    };

    const handleAdd = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add it!',
        })
        .then((res) => {
            if (res.value) {
                Swal.fire(
                    'Added!',
                    'Contact info has been added.',
                    'success',
                );
                let { firstName, lastName, age, photo } = formInput;
                let formData = new FormData();
                formData.append('firstName', firstName);
                formData.append('lastName', lastName);
                formData.append('age', age);
                formData.append('photo', photo);
                dispatch(
                    AddContact(formData)
                );
                setUpdate(true);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        })
        .then((res) => {
            if (res.value) {
                Swal.fire(
                    'Deleted!',
                    'Product has been deleted.',
                    'success',
                );
                dispatch(
                    DeleteContact(id)
                );
                setUpdate(true);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    };

    const handleEdit = (id) => {
        let { firstName, lastName, age, photo } = formEdit;
        let formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('age', age);
        formData.append('photo', photo);
        dispatch(
            EditContact(id, formData)
        );
        setUpdate(true);
        setToggle(null);
    };

    const renderTable = () => {
        return contactList.map((val, index) => {
            if (toggle !== val.id) {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{val.firstName}</td>
                        <td>{val.lastName}</td>
                        <td>{val.age}</td>
                        <td>
                            <img src={val.photo} alt="contact img" height="100px" />
                        </td>
                        <td>
                            <Button outline color="primary" onClick={() => setToggle(val.id)}>
                                Edit
                            </Button>
                        </td>
                        <td>
                            <Button outline color="danger" onClick={() => handleDelete(val.id)}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                );
            } else {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <Input type='text' defaultValue={val.firstName} onChange={handleChangeEdit} />
                        </td>
                        <td>
                            <Input type='text' defaultValue={val.lastName} onChange={handleChangeEdit} />
                        </td>
                        <td>
                            <Input type='number' defaultValue={val.age} onChange={handleChangeEdit} />
                        </td>
                        <td>
                            <Input type='text' defaultValue={val.photo} onChange={handleChangeEdit} />
                        </td>
                        <td>
                            <Button outline color="secondary" onClick={() => setToggle(null)}>
                                Cancel
                            </Button>
                        </td>
                        <td>
                            <Button outline color="success" onClick={() => handleEdit(val.id, formEdit)}>
                                Confirm
                            </Button>
                        </td>
                    </tr>
                );
            }
        })
    };

    return (
        <div className='d-flex'>
            <div className='col-3' style={{marginTop: '10px'}}>
                <Input
                    type='text'
                    placeholder='First Name'
                    name='firstName'
                    onChange={handleChangeInput}
                />
                <Input
                    type='text'
                    placeholder='Last Name'
                    name='lastName'
                    onChange={handleChangeInput}
                />
                <Input
                    type='number'
                    placeholder='Age'
                    name='age'
                    onChange={handleChangeInput}
                />
                <Input
                    type='text'
                    placeholder='Photo Link URL'
                    name='photo'
                    onChange={handleChangeInput}
                />
                <div className='d-flex justify-content-center'>
                    <Button outline variant='success' onClick={handleAdd}>
                        {
                            loading
                            ?
                            'loading...'
                            :
                            'Add Contact'
                        }
                    </Button>
                </div>
            </div>
            <div className='col-9'>
                <Table hover bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Photo</th>
                            <th colSpan='2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable()}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageContacts;
