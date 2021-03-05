import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import formatDateTime from "../../helpers/formatDateTime";

function MapContainer(props) {
  const [selected, setSelected] = useState({});
  const [centre, setCentre] = useState(props.centre);

  const onSelect = (event) => {
    setSelected(event);
    setCentre({
      lat: Number(event.latitude),
      lng: Number(event.longitude),
    });
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
      <GoogleMap mapContainerStyle={props.mapStyles} zoom={13} center={centre}>
        {props.events &&
          props.events.map((event) => {
            return (
              <Marker
                key={event.id}
                position={{
                  lat: Number(event.latitude),
                  lng: Number(event.longitude),
                }}
                onClick={() => onSelect(event)}
              />
            );
          })}
        {!props.singleEvent && (
          <FormControl
            fullWidth
            style={{ alignItems: "center", marginTop: "1%" }}
          >
            <FormControlLabel
              style={{ backgroundColor: "white", paddingRight: "1%" }}
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                  onChange={props.handleChange}
                  checked={props.myEvents}
                />
              }
              label="My events"
            />
          </FormControl>
        )}
        {!props.singleEvent && selected.latitude && (
          <InfoWindow
            position={{
              lat: Number(selected.latitude),
              lng: Number(selected.longitude),
            }}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <div>
              <Typography variant="h6">{selected.name}</Typography>
              <Typography>{formatDateTime(selected.date_time)}</Typography>
              <Button
                onClick={() => props.handleClick(selected)}
                fullWidth
                color="primary"
                variant="contained"
              >
                Details
              </Button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
