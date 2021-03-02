import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../../actions/types';

const initialState = {
    currentUser: null,
    currentUserId: null,
    loginError: null
};

function accountsReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return ({
                ...state,
                currentUser: action.payload.user.username,
                currentUserId: action.payload.user.id,
                loginError: false
            });
        case LOGIN_FAILURE:
            return ({
                ...state,
                loginError:true
            });
        default:
            return state;
    }
}

export default accountsReducer;