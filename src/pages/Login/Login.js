import React from 'react';
import { useState } from 'react';
import useFirebase from './useFirebase';

const Login = () => {
    const { loginUser } = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = event => {
        const result = event.target.value;
        setEmail(result)
    }
    const handlePassword = event => {
        const result = event.target.value;
        setPassword(result)
    }

    const handleLogin = e => {
        e.preventDefault()
        loginUser(email, password)
    }

    return (
        <form style={{ marginTop: "50%" }} onSubmit={handleLogin}>
            <input type="email" placeholder='Email' required onChange={handleEmail} />
            <input type="password" placeholder='Password' onChange={handlePassword} required />
            <button className='project-button btn'>Login</button>
        </form>
    );
};

export default Login;