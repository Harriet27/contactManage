import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';
import Pic from '../Assets/guy4.png';
import Add from '../Assets/add.png';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { AddContact } from '../Redux/Action/ContactAction';
import { NavLink } from 'react-router-dom';

// https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg

const AddPage = () => {
    const dispatch = useDispatch();

    const [formInput, setFormInput] = useState({
        firstName: '',
        lastName: '',
        age: '',
        photo: '',
    });

    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value,
        });
    };
    console.log(formInput);

    const handleSubmit = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add it!',
        })
        .then((result) => {
            if (result.value) {
                Swal.fire(
                  'Added!',
                  'Contact has been added.',
                  'success',
                );
            }
            let { firstName, lastName, age, photo } = formInput;
            let formData = new FormData();
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('age', age);
            formData.append('photo', photo);
            dispatch(
                AddContact(formData)
            );
        })
        .catch((error) => {
            console.log(error);
        })
    };

    return (
        <div style={styles.background}>
            <div className='row' style={styles.row}>
                <div className='col' style={styles.artSide}>
                    <img src={Pic} alt='gambar' height={400} />
                </div>
                <div className='col' style={styles.addForm}>
                    <div style={{display:'block', textAlign:'center'}}>
                        <div style={styles.title}>
                            <img src={Add} alt='add icon' height={70} />
                        </div>
                        <div style={styles.inputForm}>
                            <Input 
                                type='text'
                                name='firstName'
                                placeholder='First Name'
                                style={styles.inputField}
                                onChange={handleChange}
                            />
                            <Input
                                type='text'
                                name='lastName'
                                placeholder='Last Name'
                                style={styles.inputField}
                                onChange={handleChange}
                            />
                            <Input
                                min='0'
                                type='number'
                                name='age'
                                placeholder='Age Name'
                                style={styles.inputField}
                                onChange={handleChange}
                            />
                            <Input
                                type='text'
                                name='photo'
                                placeholder='Photo URL'
                                style={styles.inputField}
                                onChange={handleChange}
                            />
                            <Button outline color='primary' style={styles.button1} onClick={handleSubmit}>
                                Add to my Contacts
                            </Button>
                            <NavLink to='/list' style={styles.link}>
                                <Button color='primary' style={styles.button2}>
                                    My Contacts
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    background: {
        backgroundColor: 'lightskyblue',
        backgroundSize: 'cover',
    },
    row: {
        width: '100vw',
        height: '100vh',
    },
    artSide: {
        margin: '70px 50px 50px 100px',
        padding: '50px 50px 50px 100px',
    },
    addForm: {
        margin: '50px 90px 50px 130px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '50px',
        textAlign: 'center',
    },
    title: {
        marginTop: '50px',
        display: 'block',
        alignItems: 'center',
    },
    inputForm: {
        padding: '30px',
        display: 'block',
    },
    inputField: {
        width: '300px',
        margin: '20px',
        padding: '2px',
        borderRadius: '10px',
        paddingLeft: '15px',
    },
    button1: {
        width: '300px',
        margin: '20px',
        borderRadius: '40px',
    },
    button2: {
        width: '200px',
        margin: '15px',
        borderRadius: '40px',
    },
    link: {
        // color: 'white',
        textDecoration: 'none',
    },
};

export default AddPage;
