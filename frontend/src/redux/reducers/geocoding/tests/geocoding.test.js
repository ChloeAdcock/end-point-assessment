import geocodingReducer from "../geocoding";
import mocks from "./mocks";

describe("The geocoding reducer", () => {
  it("should return the initial state", () => {
    expect(geocodingReducer(undefined, {})).toEqual(mocks.initialState);
  });
  it("should handle LATLONG_SUCCESS", () => {
    expect(geocodingReducer([], mocks.geocodingSuccessAction)).toEqual(
      mocks.geocodingSuccess
    );
  });
  it("should handle LATLONG_FAILURE", () => {
    expect(geocodingReducer([], mocks.geocodingErrorAction)).toEqual(
      mocks.geocodingError
    );
  });
});
