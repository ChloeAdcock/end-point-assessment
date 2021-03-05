import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Navbar from "../Navbar";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("The navbar component", () => {
  it("should render the unauthenticated navbar when a user is not authenticated", () => {
    const store = mockStore({
      accounts: {
        currentUser: null,
      },
    });
    const tree = renderer
      .create(
        <MemoryRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render the authenticated navbar when a user is authenticated", () => {
    const store = mockStore({
      accounts: {
        currentUser: "test",
      },
    });
    const tree = renderer
      .create(
        <MemoryRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
