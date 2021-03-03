import Geocode from "react-geocode";
import store from '../../store';
import {
    LATLONG_FAILURE,
} from '../types';

Geocode.setLocationType("ROOFTOP");
Geocode.setApiKey(process.env.REACT_APP_API_KEY);

export const latLongFromAddress = async (addLine1, city, region, postcode) => {
    try {
      const formattedAddress = `${addLine1}, ${city}, ${region}, ${postcode}`;
      const res = await Geocode.fromAddress(formattedAddress);
      const { lat, lng } = res.results[0].geometry.location;
      return [lat, lng];
    } catch (err) {
      store.dispatch({
          type: LATLONG_FAILURE
      });
    }
};