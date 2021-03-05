import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MapContainer from "../mapContainer/MapContainer";
import { addressFromLatLong } from "../../redux/actions/geocoding/geocoding";
import formatDateTime from "../../helpers/formatDateTime";
import { useStyles } from "../../styles/singleEventStyles";

function ViewSingleEvent(props) {
  const classes = useStyles();
  const [address, setAddress] = useState("");
  const [selectedEvent] = useState(props.history.location.state);
  const [eventArray, setEventArray] = useState([]);

  useEffect(() => {
    async function getFormattedAddress() {
      const formattedAddress = await addressFromLatLong(
        selectedEvent.latitude,
        selectedEvent.longitude
      );
      setAddress(formattedAddress);
    }
    getFormattedAddress();
    setEventArray((oldArray) => [...oldArray, selectedEvent]);
  }, [selectedEvent]);

  const mapStyles = {
    height: "60vh",
    width: "100%",
  };

  if (!eventArray || !address) {
    return (
      <Container className={classes.message}>
        <Typography variant="h5">Loading...</Typography>;
      </Container>
    );
  } else {
    return (
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2}>
          <Grid container item xs={6} direction="column" spacing={4}>
            <Typography variant="h3">{selectedEvent.name}</Typography>
            <Typography variant="h6" className={classes.details}>
              {formatDateTime(selectedEvent.date_time)}
            </Typography>
            <Typography variant="body1" className={classes.details}>
              For more information contact {selectedEvent.contact_info}
            </Typography>
            <Typography variant="body2" className={classes.details}>
              {selectedEvent.description}
            </Typography>
            <Typography variant="body1" className={classes.details}>
              {address}
            </Typography>
          </Grid>
          <Grid container item xs={6} direction="column">
            <MapContainer
              singleEvent
              events={eventArray}
              mapStyles={mapStyles}
              centre={{
                lat: Number(selectedEvent.latitude),
                lng: Number(selectedEvent.longitude),
              }}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default ViewSingleEvent;
