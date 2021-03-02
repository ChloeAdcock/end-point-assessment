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
});
