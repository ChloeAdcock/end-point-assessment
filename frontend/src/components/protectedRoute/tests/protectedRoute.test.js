import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import ProtectedRoute from "../ProtectedRoute";

const FakeComponent = () => {
  return <p>Fake component</p>;
};

describe("The protected route component", () => {
  it("should render the component when a user is authenticated", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <ProtectedRoute component={FakeComponent} user="fakeuser" />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
