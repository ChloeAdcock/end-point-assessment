import axios from "axios";
import { 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  CLOSE_ALERT 
} from "../types";

export const login = (data) => async (dispatch) => {
  try {
    const res = await axios.post("http://127.0.0.1:8000/accounts/login/", data);
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err,
    });
  }
};

export const register = (data) => async (dispatch) => {
  try {
      const res = await axios.post('http://127.0.0.1:8000/accounts/register/', data);
      localStorage.setItem('token', res.data.token);
      dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
      });
  } catch (err) {
      dispatch({
          type: REGISTER_FAILURE,
          payload: err
      })
  }
}

export const closeAlert = () => (dispatch) => {
  dispatch({
    type: CLOSE_ALERT,
  });
};
