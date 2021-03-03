import {
  CREATE_EVENT_FAILURE,
  CREATE_EVENT_SUCCESS,
  VIEW_EVENTS_SUCCESS,
  VIEW_EVENTS_FAILURE,
  CLOSE_ALERT,
} from "../../actions/types";

const initialState = {
  events: null,
  createError: null,
  viewAllError: null,
};

function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        createError: false,
      };
    case VIEW_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        viewAllError: false,
      }
    case CREATE_EVENT_FAILURE:
      return {
        ...state,
        createError: true,
      };
    case VIEW_EVENTS_FAILURE:
      return {
        ...state,
        viewAllError: true,
      }
    case CLOSE_ALERT:
      return {
        ...state,
        createError: false,
      };
    default:
      return state;
  }
}

export default eventsReducer;
