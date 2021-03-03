import {
    CREATE_EVENT_FAILURE,
    CREATE_EVENT_SUCCESS,
} from '../../actions/types';

const initialState = {
    events: null,
    createError: null
};

function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_EVENT_SUCCESS:
            return ({
                ...state,
                createError: false,
            })
        case CREATE_EVENT_FAILURE:
            return ({
                ...state,
                createError: true,
            })
        default:
            return state;
    }
}

export default eventsReducer;