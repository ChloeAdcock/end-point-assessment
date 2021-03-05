import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import Login from "../Login";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("The login component", () => {
  it("should render the login form when initial state", () => {
    const store = mockStore({
      accounts: {
        currentUser: null,
        currentUserId: null,
        loginError: null,
      },
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <Login />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render an error alert when loginError is true", () => {
    const store = mockStore({
      accounts: {
        currentUser: null,
        currentUserId: null,
        loginError: true,
      },
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <Login />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call dispatch when submit is clicked", () => {
    const store = mockStore({
      accounts: {
        currentUser: null,
        currentUserId: null,
        loginError: null,
      },
    });
    store.dispatch = jest.fn();
    const utils = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const button = utils.getByText("Submit");
    fireEvent.click(button);
    expect(store.dispatch).toHaveBeenCalled();
  });
});
