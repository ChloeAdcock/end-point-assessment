import {
    LATLONG_FAILURE,
} from '../../actions/types';

const initialState = {
    latlongError: null
};

function geocodingReducer(state = initialState, action) {
    switch (action.type) {
        case LATLONG_FAILURE:
            return ({
                ...state,
                latlongError: true,
            })
        default:
            return state;
    }
}

export default geocodingReducer;