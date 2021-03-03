import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "../../../actions/types";

const initialStateMock = {
  currentUser: null,
  currentUserId: null,
  loginError: null,
  registerError: null,
  getUserError: null,
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

const loginErrorActionMock = {
  type: LOGIN_FAILURE,
};

const registerErrorActionMock = {
  type: REGISTER_FAILURE,
};

const getUserErrorActionMock = {
  type: GET_USER_FAILURE,
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

const mocks = {
  initialState: initialStateMock,
  registerSuccess: registerSuccessMock,
  loginSuccess: loginSuccessMock,
  getUserSuccess: getUserSuccessMock,
  registerError: registerErrorMock,
  loginError: loginErrorMock,
  getUserError: getUserErrorMock,
  registerSuccessAction: registerSuccessActionMock,
  loginSuccessAction: loginSuccessActionMock,
  getUserSuccessAction: getUserSuccessActionMock,
  registerErrorAction: registerErrorActionMock,
  loginErrorAction: loginErrorActionMock,
  getUserErrorAction: getUserErrorActionMock,
};

export default mocks;
