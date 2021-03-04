import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MapContainer from "../mapContainer/MapContainer";
import MyEvents from '../myEvents/MyEvents';
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router";
import { getEvents, closeAlert } from "../../redux/actions/events/events";
import { logout } from "../../redux/actions/accounts/accounts";;

function AllEvents() {
  const dispatch = useDispatch();
  const history = useHistory();
  const events = useSelector((state) => state.events.events);
  const errorState = useSelector((state) => state.events.viewAllError);

  const mapStyles = {
    height: "92vh",
    width: "100%",
  };

  const handleClick = (selected) => {
    history.push({
      pathname: "/eventdetails",
      state: selected,
    });
  };

  const handleClose = () => {
    dispatch(closeAlert());
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  if (errorState) {
    return (
      <Alert severity="error" onClose={handleClose}>
        An error has occurred - please try again later
      </Alert>
    );
  } else if (!events) {
    return <Typography>Loading...</Typography>
  }else if (events.length < 1) {
    return <Typography>No events found</Typography>;
  } else {
    return (
      <div>
        <MyEvents />
          <MapContainer
            mapStyles={mapStyles}
            events={events}
            handleClick={handleClick}
            centre={{
              lat: 52.6309,
              lng: 1.2974,
            }}
          />
      </div>
    );
  }
}

export default AllEvents;
