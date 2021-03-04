import { render, queryByAttribute } from "@testing-library/react";
import MapContainer from "../MapContainer";

const getById = queryByAttribute.bind(null, 'id');

jest.mock('@react-google-maps/api', () => {
    const React = require('React');
    return {
        Marker: () => <div id="marker">Marker mock</div>,
        LoadScript: (props) => <div>{props.children}</div>,
        GoogleMap: (props) => <div id="map" >{props.children}</div>,
    };
});

describe('The map container component', () => {
    it('should render a map', () => {
        const utils = render(<MapContainer events={[{id: 1}]} center={{lat: 52.6309, lng: 1.2974,}}/>);
        expect(
            getById(utils.container, "map")
          ).toBeTruthy();
    })
    it('should render a marker', () => {
        const utils = render(<MapContainer events={[{id: 1}]} center={{lat: 52.6309, lng: 1.2974,}}/>);
        expect(
            getById(utils.container, "marker")
          ).toBeTruthy();
    });
})

