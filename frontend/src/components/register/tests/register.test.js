import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Register from "../Register";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("The register component", () => {
  it("should render the register form when initial state", () => {
    const store = mockStore({
      accounts: {
        currentUser: null,
        currentUserId: null,
        registerError: null,
      },
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <Register />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render an error alert when registerError is true", () => {
    const store = mockStore({
      accounts: {
        currentUser: null,
        currentUserId: null,
        registerError: true,
      },
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <Register />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render an error when username fails validation", () => {
    const store = mockStore({
      accounts: {
        currentUser: null,
        currentUserId: null,
        registerError: null,
      },
    });
    const utils = render(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    const input = utils.getByText("Username").nextSibling.firstChild;
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.blur(input);
    expect(utils.getByText("Invalid username")).toBeTruthy();
  });

  it("should render an error when email fails validation", () => {
    const store = mockStore({
      accounts: {
        currentUser: null,
        currentUserId: null,
        registerError: null,
      },
    });
    const utils = render(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    const input = utils.getByText("Email").nextSibling.firstChild;
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.blur(input);
    expect(utils.getByText("Invalid email")).toBeTruthy();
  });

  it("should render an error when password fails validation", () => {
    const store = mockStore({
      accounts: {
        currentUser: null,
        currentUserId: null,
        registerError: null,
      },
    });
    const utils = render(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    const input = utils.getByText("Password").nextSibling.firstChild;
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.blur(input);
    expect(utils.getByText("Invalid password")).toBeTruthy();
  });

  it("should render an error when passwords don't match", () => {
    const store = mockStore({
      accounts: {
        currentUser: null,
        currentUserId: null,
        registerError: null,
      },
    });
    const utils = render(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    const input = utils.getByText("Password").nextSibling.firstChild;
    const confirmInput = utils.getByText("Confirm password").nextSibling
      .firstChild;
    fireEvent.change(input, { target: { value: "Testpass123" } });
    fireEvent.change(confirmInput, { target: { value: "Wrongpass" } });
    fireEvent.blur(confirmInput);
    expect(utils.getByText("Passwords do not match")).toBeTruthy();
  });
});
