import eventsReducer from "../events";
import mocks from "./mocks";

describe("The events reducer", () => {
  it("should return the initial state", () => {
    expect(eventsReducer(undefined, {})).toEqual(mocks.initialState);
  });
  it("should handle CREATE_EVENT_SUCCESS", () => {
    expect(eventsReducer([], mocks.createEventSuccessAction)).toEqual(
      mocks.createEventSuccess
    );
  });
  it("should handle CREATE_EVENT_FAILURE", () => {
    expect(eventsReducer([], mocks.createEventErrorAction)).toEqual(
      mocks.createEventError
    );
  });
});