import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../store/actions/userActions';
import '../Login/Login.css';

const Register = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.user.error);
    const [registerData, setRegisterData] = useState({
        username: '',
        name: '',
        phoneNumber: '',
        password: '',
    });

    const changeValueHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        const registerDataCopy = { ...registerData, [name]: value };
        console.log(registerDataCopy);
        setRegisterData(registerDataCopy)
    }

    const registerSubmit = event => {
        event.preventDefault();
        const data = {
            username: registerData.username,
            name: registerData.name,
            phoneNumber: registerData.phoneNumber,
            password: registerData.password,
        };
        dispatch(register(data));
    };

    return (
        <div className='register-box user-sign-boxes'>
            <h2>Create your account</h2>
            {error ? <div><h3>{error}</h3></div> : null}
            <div>
                <form onSubmit={registerSubmit}>
                    <input
                        placeholder='Username'
                        onChange={changeValueHandler}
                        name='username'
                        type='text'
                        value={registerData.username}
                        required />

                    <input
                        placeholder='Name'
                        onChange={changeValueHandler}
                        name='name'
                        type='text'
                        value={registerData.name}
                        required />

                    <input
                        placeholder='Phone Number'
                        onChange={changeValueHandler}
                        name='phoneNumber'
                        type='tel'
                        value={registerData.phoneNumber}
                        required />

                    <input 
                        placeholder='Password' 
                        onChange={changeValueHandler} 
                        name='password' 
                        type='password' 
                        value={registerData.password} 
                        required />
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Register;