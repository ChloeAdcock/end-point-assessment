import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  CLOSE_ALERT,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
} from "../../actions/types";

const initialState = {
  currentUser: null,
  currentUserId: null,
  loginError: null,
  registerError: null,
  getUserError: null,
};

function accountsReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.user.username,
        currentUserId: action.payload.user.id,
        loginError: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.username,
        currentUserId: action.payload.id,
        registerError: false,
      };
      case GET_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.username,
        currentUserId: action.payload.id,
        getUserError: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginError: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registerError: true,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        getUserError: true,
      };
    case CLOSE_ALERT:
      return {
        ...state,
        loginError: false,
        registerError: false
      };
    default:
      return state;
  }
}

export default accountsReducer;
