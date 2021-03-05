import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MapContainer from "../mapContainer/MapContainer";
import MyEvents from "../myEvents/MyEvents";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router";
import { getEvents, closeAlert } from "../../redux/actions/events/events";
import { logout } from "../../redux/actions/accounts/accounts";
import getMapCentre from "../../helpers/getMapCentre";

function AllEvents() {
  const dispatch = useDispatch();
  const history = useHistory();
  const events = useSelector((state) => state.events.events);
  const errorState = useSelector((state) => state.events.viewAllError);
  const userId = useSelector((state) => state.accounts.currentUserId);
  const [myEvents, setMyEvents] = useState(false);

  const mapStyles = {
    height: "92vh",
    width: "100%",
  };

  const handleChange = (event) => {
    setMyEvents(event.target.checked);
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

  const filterEvents = () => {
    if(myEvents){
      return events.filter(event => event.creator === userId);
    } else {
      return events;
    }
  }

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
    return <Typography>Loading...</Typography>;
  } else if (events.length < 1) {
    return <Typography>No events found</Typography>;
  } else {
    return (
      <div>
        {myEvents && <MyEvents events={filterEvents()} handleClick={handleClick}/>}
        <MapContainer
          handleChange={handleChange}
          myEvents={myEvents}
          mapStyles={mapStyles}
          events={filterEvents()}
          handleClick={handleClick}
          centre={getMapCentre(filterEvents())}
        />
      </div>
    );
  }
}

export default AllEvents;
