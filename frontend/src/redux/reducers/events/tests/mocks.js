import {
  CREATE_EVENT_FAILURE,
  CREATE_EVENT_SUCCESS,
  VIEW_EVENTS_FAILURE,
  VIEW_EVENTS_SUCCESS,
} from "../../../actions/types";

const initialStateMock = {
  events: null,
  createError: null,
  viewAllError: null,
};

const createEventSuccessActionMock = {
  type: CREATE_EVENT_SUCCESS,
  payload: {
    id: 1,
    name: "test",
    description: "test",
    dateTime: "test",
    contactInfo: "test",
    latitude: 3.234345,
    longitude: 5.767567,
  },
};

const viewEventsSuccessActionMock = {
  type: VIEW_EVENTS_SUCCESS,
  payload: [
    {
      id: 1,
      name: "test",
      description: "test",
      dateTime: "test",
      contactInfo: "test",
      latitude: 3.234345,
      longitude: 5.767567,
    },
    {
      id: 2,
      name: "test",
      description: "test",
      dateTime: "test",
      contactInfo: "test",
      latitude: 3.234345,
      longitude: 5.767567,
    },
  ],
};

const createEventSuccessMock = {
  createError: false,
};

const viewEventsSuccessMock = {
  events: [
    {
      id: 1,
      name: "test",
      description: "test",
      dateTime: "test",
      contactInfo: "test",
      latitude: 3.234345,
      longitude: 5.767567,
    },
    {
      id: 2,
      name: "test",
      description: "test",
      dateTime: "test",
      contactInfo: "test",
      latitude: 3.234345,
      longitude: 5.767567,
    },
  ],
  viewAllError: false,
};

const createEventErrorActionMock = {
  type: CREATE_EVENT_FAILURE,
};

const viewEventsErrorActionMock = {
  type: VIEW_EVENTS_FAILURE,
};

const createEventErrorMock = {
  createError: true,
};

const viewEventsErrorMock = {
  viewAllError: true,
};

const mocks = {
  initialState: initialStateMock,
  createEventSuccess: createEventSuccessMock,
  viewEventsSuccess: viewEventsSuccessMock,
  createEventError: createEventErrorMock,
  viewEventsError: viewEventsErrorMock,
  createEventSuccessAction: createEventSuccessActionMock,
  viewEventsSuccessAction: viewEventsSuccessActionMock,
  createEventErrorAction: createEventErrorActionMock,
  viewEventsErrorAction: viewEventsErrorActionMock,
};

export default mocks;
