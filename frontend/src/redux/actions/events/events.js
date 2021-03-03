import axios from "axios";
import { push } from "connected-react-router";
import { 
    CREATE_EVENT_FAILURE,
    CREATE_EVENT_SUCCESS,
} from "../types";
import { latLongFromAddress } from '../geocoding/geocoding';

export const createEvent = (
    name,
    description,
    dateTime,
    contactInfo,
    addLine1,
    city,
    region,
    postcode
  ) => async (dispatch) => {
    try {
      const latLong = await latLongFromAddress(addLine1, city, region, postcode);
      const options = {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        "http://127.0.0.1:8000/events/create/",
        {
          name: name,
          description: description,
          date_time: dateTime,
          contact_info: contactInfo,
          latitude: Math.round(latLong[0] * Math.pow(10, 6)) / Math.pow(10, 6),
          longitude: Math.round(latLong[1] * Math.pow(10, 6)) / Math.pow(10, 6),
        },
        options
      );
      dispatch({
        type: CREATE_EVENT_SUCCESS,
        payload: res.data,
      });
      dispatch(push("/home"));
    } catch (err) {
      dispatch({
        type: CREATE_EVENT_FAILURE,
        payload: err,
      });
    }
  };