import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import Typography from '@material-ui/core/Typography';
import MapContainer from '../mapContainer/MapContainer';
import { addressFromLatLong } from '../../geocode/geocode';

function ViewSingleEvent(props) {

    const dispatch = useDispatch();
    const [address, setAddress] = useState("");
    const [selectedEvent, setSelectedEvent] = useState(props.history.location.state);
    const [eventArray, setEventArray] = useState([]);

    useEffect(async () => {
        const formattedAddress = await addressFromLatLong(selectedEvent.latitude, selectedEvent.longitude);
        setAddress(formattedAddress);
        setEventArray(oldArray => [...oldArray, selectedEvent]);
    }, []);

    const mapStyles = {
        height: "50vh",
        width: "50%"
    };

    const formatDateTime = () => {
        const date = new Date(selectedEvent.date_time);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        return `${day}/${month}/${year} ${hour}:${minutes}`
    }

    if (!eventArray) {
        return <Typography>Loading...</Typography>
    } else {
        return (
            <div>
                <Typography variant='h2'>{selectedEvent.name}</Typography>
                <Typography variant='h6'>{formatDateTime(selectedEvent.date_time)}</Typography>
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