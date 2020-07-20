import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetContacts } from '../Redux/Action/ContactAction';
import { Card } from '.';
import Header from './Header';

const List = () => {
    const dispatch = useDispatch();

    const contacts = useSelector((state) => state.contact.contactList);

    useEffect(() => {
        dispatch(GetContacts());
    }, [dispatch]);

    const renderCard = () => {
        return contacts.map((val, index) => {
            return (
                <div className='col-3' key={index} style={styles.card}>
                    <Card
                        image={val.photo}
                        firstname={val.firstName}
                        lastname={val.lastName}
                        age={val.age}
                    />
                </div>
            );
        });
    };

    return (
        <div>
            <Header />
            <div style={styles.background} className='row'>
                {renderCard()}
            </div>
        </div>
    );
};

const styles = {
    background: {
        backgroundColor: 'lightskyblue',
        padding: '30px',
        paddingBottom: '0px',
    },
    card: {
        marginBottom: '30px',
    },
};

export default List;
