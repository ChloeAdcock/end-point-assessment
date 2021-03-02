import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../../../actions/types";

const initialStateMock = {
  currentUser: null,
  currentUserId: null,
  loginError: null,
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

const loginSuccessMock = {
  currentUser: "test",
  currentUserId: 1,
  loginError: false,
};

const loginErrorActionMock = {
  type: LOGIN_FAILURE,
};

const loginErrorMock = {
  loginError: true,
};

const mocks = {
  initialState: initialStateMock,
  loginSuccess: loginSuccessMock,
  loginError: loginErrorMock,
  loginSuccessAction: loginSuccessActionMock,
  loginErrorAction: loginErrorActionMock,
};

export default mocks;
