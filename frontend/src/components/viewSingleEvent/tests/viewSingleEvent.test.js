import renderer from "react-test-renderer";
import ViewSingleEvent from "../ViewSingleEvent";

describe("The view single event component", () => {
  it("should render loading if there is nothing the event array", () => {
    const historyMock = {
      location: {
        state: {},
      },
    };
    const tree = renderer
      .create(<ViewSingleEvent history={historyMock} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
