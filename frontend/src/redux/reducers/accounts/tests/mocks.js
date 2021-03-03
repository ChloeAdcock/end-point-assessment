import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "../../../actions/types";

const initialStateMock = {
  currentUser: null,
  currentUserId: null,
  loginError: null,
  registerError: null,
  getUserError: null,
  logoutError: null,
};

const loginSuccessActionMock = {
  type: LOGIN_SUCCESS,
  payload: {
    user: {
      username: "test",
      id: 1,
    },
  },
};

const registerSuccessActionMock = {
  type: REGISTER_SUCCESS,
  payload: {
    username: "test",
    id: 1,
  },
};

const getUserSuccessActionMock = {
  type: GET_USER_SUCCESS,
  payload: {
    username: "test",
    id: 1,
  },
};

const logoutSuccessActionMock = {
  type: LOGOUT_SUCCESS,
};

const loginSuccessMock = {
  currentUser: "test",
  currentUserId: 1,
  loginError: false,
};

const registerSuccessMock = {
  currentUser: "test",
  currentUserId: 1,
  registerError: false,
};

const getUserSuccessMock = {
  currentUser: "test",
  currentUserId: 1,
  getUserError: false,
};

const logoutSuccessMock = {
  currentUser: null,
  currentUserId: null,
  logoutError: false,
};

const loginErrorActionMock = {
  type: LOGIN_FAILURE,
};

const registerErrorActionMock = {
  type: REGISTER_FAILURE,
};

const getUserErrorActionMock = {
  type: GET_USER_FAILURE,
};

const logoutErrorActionMock = {
  type: LOGOUT_FAILURE,
};

const loginErrorMock = {
  loginError: true,
};

const registerErrorMock = {
  registerError: true,
};

const getUserErrorMock = {
  getUserError: true,
};

const logoutErrorMock = {
  logoutError: true,
};

const mocks = {
  initialState: initialStateMock,
  registerSuccess: registerSuccessMock,
  loginSuccess: loginSuccessMock,
  getUserSuccess: getUserSuccessMock,
  logoutSuccess: logoutSuccessMock,
  registerError: registerErrorMock,
  loginError: loginErrorMock,
  getUserError: getUserErrorMock,
  logoutError: logoutErrorMock,
  registerSuccessAction: registerSuccessActionMock,
  loginSuccessAction: loginSuccessActionMock,
  getUserSuccessAction: getUserSuccessActionMock,
  logoutSuccessAction: logoutSuccessActionMock,
  registerErrorAction: registerErrorActionMock,
  loginErrorAction: loginErrorActionMock,
  getUserErrorAction: getUserErrorActionMock,
  logoutErrorAction: logoutErrorActionMock,
};

export default mocks;
