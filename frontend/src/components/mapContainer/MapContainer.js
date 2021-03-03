import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function MapContainer(props) {

    const [selected, setSelected] = useState({});
    const [centre, setCentre] = useState(props.centre);

    const onSelect = event => {
        setSelected(event);
        setCentre({
            lat: Number(event.latitude),
            lng: Number(event.longitude)
        });
    }

    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_API_KEY}>
            <GoogleMap
                mapContainerStyle={props.mapStyles}
                zoom={13}
                center={centre}
            >
                {
                    props.events.map(event => {
                        return (
                            <Marker key={event.name} position={{
                                lat: Number(event.latitude),
                                lng: Number(event.longitude)
                            }} onClick={() => onSelect(event)} />
                        )
                    })
                }
                {
                    selected.latitude &&
                    (
                        <InfoWindow
                            position={{
                                lat: Number(selected.latitude),
                                lng: Number(selected.longitude)
                            }}
                            clickable={true}
                            onCloseClick={() => setSelected({})}
                        >
                            <div>
                                <Typography>{selected.name}</Typography>
                                <Button onClick={() => props.handleClick(selected)}>Details</Button>
                            </div>
                        </InfoWindow>
                    )
                }
            </GoogleMap>
        </LoadScript >
    )
}

export default MapContainer;