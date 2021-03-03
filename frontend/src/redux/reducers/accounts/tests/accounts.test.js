import accountsReducer from "../accounts";
import mocks from "./mocks";

describe("The accounts reducer", () => {
  it("should return the initial state", () => {
    expect(accountsReducer(undefined, {})).toEqual(mocks.initialState);
  });
  it("should handle LOGIN_SUCCESS", () => {
    expect(accountsReducer([], mocks.loginSuccessAction)).toEqual(
      mocks.loginSuccess
    );
  });
  it("should handle LOGIN_FAILURE", () => {
    expect(accountsReducer([], mocks.loginErrorAction)).toEqual(
      mocks.loginError
    );
  });
  it("should handle REGISTER_SUCCESS", () => {
    expect(accountsReducer([], mocks.registerSuccessAction)).toEqual(
      mocks.registerSuccess
    );
  });
  it("should handle REGISTER_FAILURE", () => {
    expect(accountsReducer([], mocks.registerErrorAction)).toEqual(
      mocks.registerError
    );
  });

  it("should handle GET_USER_SUCCESS", () => {
    expect(accountsReducer([], mocks.getUserSuccessAction)).toEqual(
      mocks.getUserSuccess
    );
  });
  it("should handle GET_USER_FAILURE", () => {
    expect(accountsReducer([], mocks.getUserErrorAction)).toEqual(
      mocks.getUserError
    );
  });
});
