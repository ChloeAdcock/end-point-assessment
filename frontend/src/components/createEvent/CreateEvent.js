import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import EventForm from "../eventForm/EventForm";
import { useDispatch } from "react-redux";
import { createEvent } from "../../redux/actions/events/events";

function CreateEvent() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("2021-04-15T10:30:00Z");
  const [contactInfo, setContactInfo] = useState("");
  const [addLine1, setAddLine1] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createEvent(name, description, dateTime, contactInfo, addLine1, city, region, postcode)
    );
  };
    return (
      <div>
        <Typography variant="h2">Create New Event</Typography>
        <EventForm
          handleNameChange={(e) => setName(e.target.value)}
          handleDescriptionChange={(e) => setDescription(e.target.value)}
          handleDateTimeChange={(e) => setDateTime(e.target.value)}
          handleContactInfoChange={(e) => setContactInfo(e.target.value)}
          handleAddLine1Change={(e) => setAddLine1(e.target.value)}
          handleCityChange={(e) => setCity(e.target.value)}
          handleRegionChange={(e) => setRegion(e.target.value)}
          handlePostcodeChange={(e) => setPostcode(e.target.value)}
          handleSubmit={handleSubmit}
          name={name}
          description={description}
          dateTime={dateTime}
          contactInfo={contactInfo}
          addLine1={addLine1}
          city={city}
          region={region}
          postcode={postcode}
        />
      </div>
    );
}

export default CreateEvent;