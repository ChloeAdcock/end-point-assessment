import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import CreateEvent from "../CreateEvent";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("The create event component", () => {
  it("should render an alert when create error is true", () => {
    const store = mockStore({
      events: {
        events: null,
        createError: true,
      },
      geocoding: {
        latlongError: null,
      },
    });
    const utils = render(
      <Provider store={store}>
        <CreateEvent />
      </Provider>
    );
    expect(
      utils.getByText("An error has occurred - please try again later")
    ).toBeTruthy();
  });

  it("should render an alert when latlong error is true", () => {
    const store = mockStore({
      events: {
        events: null,
        createError: null,
      },
      geocoding: {
        latlongError: true,
      },
    });
    const utils = render(
      <Provider store={store}>
        <CreateEvent />
      </Provider>
    );
    expect(
      utils.getByText(
        "Error occured finding location - please check the address"
      )
    ).toBeTruthy();
  });

  it("should render an error when name fails validation", () => {
    const store = mockStore({
      events: {
        events: null,
        createError: null,
      },
      geocoding: {
        latlongError: null,
      },
    });
    const utils = render(
      <Provider store={store}>
        <CreateEvent />
      </Provider>
    );
    const input = utils.getByText("Name").nextSibling.firstChild;
    fireEvent.change(input, { target: { value: "t" } });
    fireEvent.blur(input);
    expect(utils.getByText("Invalid event name")).toBeTruthy();
  });

  it("should render an error when description fails validation", () => {
    const store = mockStore({
      events: {
        events: null,
        createError: null,
      },
      geocoding: {
        latlongError: null,
      },
    });
    const utils = render(
      <Provider store={store}>
        <CreateEvent />
      </Provider>
    );
    const input = utils.getByText("Description").nextSibling.firstChild;
    fireEvent.change(input, { target: { value: "t" } });
    fireEvent.blur(input);
    expect(utils.getByText("Invalid event description")).toBeTruthy();
  });

  it("should render an error when contact information fails validation", () => {
    const store = mockStore({
      events: {
        events: null,
        createError: null,
      },
      geocoding: {
        latlongError: null,
      },
    });
    const utils = render(
      <Provider store={store}>
        <CreateEvent />
      </Provider>
    );
    const input = utils.getByText("Contact info").nextSibling.firstChild;
    fireEvent.change(input, { target: { value: "t" } });
    fireEvent.blur(input);
    expect(utils.getByText("Invalid contact information")).toBeTruthy();
  });
});
