import { LATLONG_FAILURE, LATLONG_SUCCESS } from "../../../actions/types";

const initialStateMock = {
  latlongError: null,
};

const geocodingSuccessActionMock = {
  type: LATLONG_SUCCESS,
};

const geocodingSuccessMock = {
  latlongError: false,
};

const geocodingErrorActionMock = {
  type: LATLONG_FAILURE,
};

const geocodingErrorMock = {
  latlongError: true,
};

const mocks = {
  initialState: initialStateMock,
  geocodingSuccess: geocodingSuccessMock,
  geocodingError: geocodingErrorMock,
  geocodingSuccessAction: geocodingSuccessActionMock,
  geocodingErrorAction: geocodingErrorActionMock,
};

export default mocks;
