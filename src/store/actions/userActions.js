import { push } from "connected-react-router";
import axiosApi from "../../axiosApi";

const { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_USER } = require("../actionTypes");

const userRegisterSuccess = value => {
    return { type: REGISTER_SUCCESS, value };
};

const userRegisterFailure = error => {
    return { type: REGISTER_FAILURE, error };
};

const userLoginSuccess = value => {
    return { type: LOGIN_SUCCESS, value };
};

const userLoginFailure = error => {
    return { type: LOGIN_FAILURE, error };
};

export const register = userData => {
    return async dispatch => {
        try {
            const response = await axiosApi.post('/users', userData);
            dispatch(userRegisterSuccess(response.data));
            dispatch(push('/products'));
        } catch (error) {
            if(error.response.data.errors.username !== undefined){
                 dispatch(userRegisterFailure(error.response.data.errors.username.message));
            }else if(error.response.data.errors.password !== undefined){
                dispatch(userRegisterFailure(error.response.data.errors.password.message));
            }
        };
    };
};

export const login = userData => {
    return async dispatch => {
        try {
            const response = await axiosApi.post('/users/sessions', userData);
            dispatch(userLoginSuccess(response.data));
            dispatch(push('/products'));
        } catch (error) {
            dispatch(userLoginFailure(error.response.data));
        };
    };
};

export const logoutUser = () => {
    return async (dispatch, getState) => {
        const token = getState().user.user.token;
        const headers = {
            'Authorization': token,
        };
        await axiosApi.delete("/users/sessions", { headers });
        dispatch({ type: LOGOUT_USER });
    }
};