import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { successLoginResponse } from "./mocks";
import { login } from "../accounts";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe("the login action creator", () => {
  const url = "http://127.0.0.1:8000/accounts/login/";

  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("should dispatch an action of type LOGIN_SUCCESS on successful axios request", () => {
    moxios.stubRequest(url, successLoginResponse);
    return store.dispatch(login({ username: "test", password: "test" })).then(() => {
      const actualAction = store.getActions();
      expect(actualAction[0].type).toEqual('LOGIN_SUCCESS');
    });
  });
});
