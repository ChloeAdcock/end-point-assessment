import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  CLOSE_ALERT,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
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

export const currentUser = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://127.0.0.1:8000/accounts/current_user/",
      {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch({
      type: GET_USER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: err,
    });
  }
};

export const register = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/accounts/register/",
      data
    );
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: err,
    });
  }
};

export const logout = () => (dispatch) => {
  try {
    localStorage.removeItem("token");
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: LOGOUT_FAILURE,
      payload: err,
    });
  }
};

export const closeAlert = () => (dispatch) => {
  dispatch({
    type: CLOSE_ALERT,
  });
};
