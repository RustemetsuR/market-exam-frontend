import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/actions/userActions';
import './Login.css';

const Login = () => {
    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({
        userName: '',
        password: '',
    });

    const error = useSelector(state => state.user.error);

    const userNameOnChange = event => {
        const value = event.target.value;
        const loginDataCopy = {...loginData, userName: value};
        setLoginData(loginDataCopy);
    };

    const passwordOnChange = event => {
        const value = event.target.value;
        const loginDataCopy = {...loginData, password: value};
        setLoginData(loginDataCopy);
    };

    const loginSubmit = event => {
        event.preventDefault();
        const data = {
            username: loginData.userName,
            password: loginData.password,
        };
        dispatch(login(data));
    };


    return (
        <div className='login-box user-sign-boxes'>
            <h2>Login</h2>
            {error ?
                <div>
                    {error.error}
                </div> : null}
            <form onSubmit={loginSubmit}>
                <input onChange={userNameOnChange} placeholder='Username' required value={loginData.userName} />
                <input onChange={passwordOnChange} placeholder='Password' type='password' required value={loginData.password} />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;