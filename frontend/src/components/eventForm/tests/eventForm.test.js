import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import EventForm from "../EventForm";
import CreateEvent from "../../createEvent/CreateEvent";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("The event form component", () => {
  it("should render an error when name fails validation", () => {
    const utils = render(
        <EventForm handleNameChange={(e) => setName(e.target.value)} name="t" dateTime="test" />
    );
    const input = utils.getByText("Name").nextSibling.firstChild;
    fireEvent.change(input, { target: { value: "t" } });
    fireEvent.blur(input);
    expect(utils.getByText("Invalid event name")).toBeTruthy();
  });
});
