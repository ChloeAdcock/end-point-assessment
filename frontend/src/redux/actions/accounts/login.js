import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../types';

export const login = (data) => async (dispatch) => {
    try {
        const res = await axios.post('http://127.0.0.1:8000/accounts/login/', data);
        localStorage.setItem('token', res.data.token);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: err
        })
    }
}