import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../Redux/Action/AuthAction';
import { Button, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';

const LoginPage = () => {
    const [formInput, setFormInput] = useState({
        username: '',
        password: '',
    });

    const logged = useSelector((state) => state.contact.logged);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value,
        });
    };
    console.log(formInput);

    const handleRegister = () => {
        let { username, password } = formInput;
        if (username && password) {
            dispatch(register({
                username, password
            }));
            // dispatch(register(formInput));
        }
    };

    if (logged) {
        return <Redirect to='/login' />;
    }
    return (
        <div>
            <Input type="text" name="username" placeholder="Username" onChange={handleChange} />
            <Input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <Button onClick={handleRegister}>
                Register
            </Button>
        </div>
    );
};

export default LoginPage;
