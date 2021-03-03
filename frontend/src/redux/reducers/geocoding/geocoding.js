import {
  LATLONG_FAILURE,
  CLOSE_ALERT,
  LATLONG_SUCCESS,
} from "../../actions/types";

const initialState = {
  latlongError: null,
};

function geocodingReducer(state = initialState, action) {
  switch (action.type) {
    case LATLONG_FAILURE:
      return {
        ...state,
        latlongError: true,
      };
    case LATLONG_SUCCESS:
      return {
        ...state,
        latlongError: false,
      };
    case CLOSE_ALERT:
      return {
        ...state,
        latlongError: false,
      };
    default:
      return state;
  }
}

export default geocodingReducer;
