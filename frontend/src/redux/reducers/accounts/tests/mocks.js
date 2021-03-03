import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "../../../actions/types";

const initialStateMock = {
  currentUser: null,
  currentUserId: null,
  loginError: null,
  registerError: null,
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

const loginErrorActionMock = {
  type: LOGIN_FAILURE,
};

const registerErrorActionMock = {
  type: REGISTER_FAILURE,
};

const loginErrorMock = {
  loginError: true,
};

const registerErrorMock = {
  registerError: true,
};

const mocks = {
  initialState: initialStateMock,
  registerSuccess: registerSuccessMock,
  loginSuccess: loginSuccessMock,
  registerError: registerErrorMock,
  loginError: loginErrorMock,
  registerSuccessAction: registerSuccessActionMock,
  loginSuccessAction: loginSuccessActionMock,
  registerErrorAction: registerErrorActionMock,
  loginErrorAction: loginErrorActionMock,
};

export default mocks;
