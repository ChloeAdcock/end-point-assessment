import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Home from "../Home";

jest.mock("../../mapContainer/MapContainer", () => {
    return function MockMap(props) {
      return (
          <div>Test</div>
      );
    };
  });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("The home component", () => {
    it("should render the map when there are events in the state and no error", () => {
      const store = mockStore({
        events: {
          events: ['test'],
          viewAllError: false,
        },
      });
      const tree = renderer
        .create(
          <Provider store={store}>
            <Home />
          </Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render an error alert when there is an error in the state", () => {
        const store = mockStore({
          events: {
            viewAllError: true,
          },
        });
        const tree = renderer
          .create(
            <Provider store={store}>
              <Home />
            </Provider>
          )
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

      it("should render no events found when there are no results and there is no error", () => {
        const store = mockStore({
          events: {
            events: [],
          },
        });
        const tree = renderer
          .create(
            <Provider store={store}>
              <Home />
            </Provider>
          )
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

      it("should render a loading screen when events have not loaded yet", () => {
        const store = mockStore({
            events: {
                events: null
            },
        });
        const tree = renderer
          .create(
            <Provider store={store}>
              <Home />
            </Provider>
          )
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
  
  });