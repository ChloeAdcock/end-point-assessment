import renderer from "react-test-renderer";
import MyEvents from "../MyEvents";

describe("The my events component", () => {
    it("should render events when they are passed down as props", () => {
      const tree = renderer
        .create(
            <MyEvents events={[{date_time: 'test'}]}/>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render no events found when there are no events", () => {
        const tree = renderer
          .create(
              <MyEvents/>
          )
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
  
  });