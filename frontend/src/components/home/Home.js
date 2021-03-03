import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getEvents } from "../../redux/actions/events/events";
import MapContainer from "../mapContainer/MapContainer";
import Typography from "@material-ui/core/Typography";

function AllEvents() {
  const dispatch = useDispatch();
  const history = useHistory();
  const events = useSelector((state) => state.events.events);

  const mapStyles = {
    height: "70vh",
    width: "80%",
  };

  const handleClick = (selected) => {
    history.push({
      pathname: "/eventdetails",
      state: selected,
    });
  };

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <div>
      {!events ? (
        <Typography>Loading...</Typography>
      ) : (
        <MapContainer
          mapStyles={mapStyles}
          events={events}
          handleClick={handleClick}
          centre={{
            lat: 52.6309,
            lng: 1.2974,
          }}
        />
      )}
    </div>
  );
}

export default AllEvents;