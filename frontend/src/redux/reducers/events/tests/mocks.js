import {
    CREATE_EVENT_FAILURE,
    CREATE_EVENT_SUCCESS,
  } from "../../../actions/types";
  
  const initialStateMock = {
    events: null,
    createError: null,
  };
  
  const createEventSuccessActionMock = {
    type: CREATE_EVENT_SUCCESS,
    payload: {
        id: 1,
        name: 'test',
        description: 'test',
        dateTime: 'test',
        contactInfo: 'test',
        latitude: 3.234345,
        longitude: 5.767567,
    },
  };
  
  const createEventSuccessMock = {
    createError: false
  };
  
  const createEventErrorActionMock = {
    type: CREATE_EVENT_FAILURE,
  };
  
  const createEventErrorMock = {
    createError: true,
  };
  
  const mocks = {
    initialState: initialStateMock,
    createEventSuccess: createEventSuccessMock,
    createEventError: createEventErrorMock,
    createEventSuccessAction: createEventSuccessActionMock,
    createEventErrorAction: createEventErrorActionMock,
  };
  
  export default mocks;