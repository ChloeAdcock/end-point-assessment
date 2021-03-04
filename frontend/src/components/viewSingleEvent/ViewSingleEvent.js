import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import MapContainer from '../mapContainer/MapContainer';
import { addressFromLatLong } from '../../redux/actions/geocoding/geocoding';
import formatDateTime from '../../helpers/formatDateTime';

function ViewSingleEvent(props) {

    const [address, setAddress] = useState("");
    const [selectedEvent] = useState(props.history.location.state);
    const [eventArray, setEventArray] = useState([]);

    useEffect(() => {
        async function getFormattedAddress() {
            const formattedAddress = await addressFromLatLong(selectedEvent.latitude, selectedEvent.longitude);
            setAddress(formattedAddress);
        }
        getFormattedAddress();
        setEventArray(oldArray => [...oldArray, selectedEvent]);
    }, [selectedEvent]);

    const mapStyles = {
        height: "50vh",
        width: "50%"
    };

    if (!eventArray || !address) {
        return <Typography>Loading...</Typography>
    } else {
        return (
            <div>
                <Typography variant='h2'>{selectedEvent.name}</Typography>
                <Typography variant='h6'>{formatDateTime(selectedEvent.date_time)}</Typography>
                <Typography variant='body1'>For more information contact {selectedEvent.contact_info}</Typography>
                <Typography variant='body1'>{selectedEvent.description}</Typography>
                <Typography variant='body1'>{address}</Typography>
                <MapContainer events={eventArray} mapStyles={mapStyles} centre={{
                    lat: Number(selectedEvent.latitude), lng: Number(selectedEvent.longitude)
                }} />
            </div>
        )
    }
}

export default ViewSingleEvent;