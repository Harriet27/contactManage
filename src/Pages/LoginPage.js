import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Action/AuthAction';
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
            dispatch(login({
                username, password
            }));
        }
    };

    if (logged) {
        return <Redirect to='/dashboard' />;
    }
    return (
        <div>
            <Input type="text" name="username" placeholder="Username" onChange={handleChange} />
            <Input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <Button onClick={handleRegister}>Login</Button>
        </div>
    );
};

export default LoginPage;
