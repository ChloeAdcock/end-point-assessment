import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Register from '../Register';

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
  });