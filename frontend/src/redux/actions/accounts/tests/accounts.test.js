import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import mocks from "./mocks";
import { login, register } from "../accounts";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe("The login action creator", () => {
  const url = "http://127.0.0.1:8000/accounts/login/";

  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should dispatch an action of type LOGIN_SUCCESS on successful axios request", () => {
    moxios.stubRequest(url, mocks.loginSuccess);
    return store
      .dispatch(login({ username: "test", password: "test" }))
      .then(() => {
        const actualAction = store.getActions();
        expect(actualAction[0].type).toEqual("LOGIN_SUCCESS");
      });
  });

  it("should dispatch an action of type LOGIN_FAILURE on unsuccessful axios request", () => {
    moxios.stubRequest(url, mocks.loginError);
    return store
      .dispatch(login({ username: "test", password: "test" }))
      .then(() => {
        const actualAction = store.getActions();
        expect(actualAction[0].type).toEqual("LOGIN_FAILURE");
      });
  });
});

describe("The register action creator", () => {
  const url = "http://127.0.0.1:8000/accounts/register/";

  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should dispatch an action of type REGISTER_SUCCESS on successful axios request", () => {
    moxios.stubRequest(url, mocks.registerSuccess);
    return store
      .dispatch(register({ username: "test", email: 'test@mail.com', password: "test" }))
      .then(() => {
        const actualAction = store.getActions();
        expect(actualAction[0].type).toEqual("REGISTER_SUCCESS");
      });
  });

  it("should dispatch an action of type REGISTER_FAILURE on unsuccessful axios request", () => {
    moxios.stubRequest(url, mocks.registerError);
    return store
      .dispatch(register({ username: "test", email: 'test@mail.com', password: "test" }))
      .then(() => {
        const actualAction = store.getActions();
        expect(actualAction[0].type).toEqual("REGISTER_FAILURE");
      });
  });
});