import React from "react";
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function EventForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Textfield
        label="Name"
        value={props.name}
        variant="outlined"
        required
        onChange={props.handleNameChange}
      />
      <Textfield
        label="Description"
        variant="outlined"
        value={props.description}
        required
        multiline
        onChange={props.handleDescriptionChange}
      />
      <Textfield
        variant="outlined"
        required
        type="datetime-local"
        defaultValue={props.dateTime.slice(0, -1)}
        onChange={props.handleDateTimeChange}
      />
      <Textfield
        label="Address line 1"
        variant="outlined"
        required
        value={props.addLine1}
        onChange={props.handleAddLine1Change}
      />
      <Textfield
        label="City"
        variant="outlined"
        value={props.city}
        required
        onChange={props.handleCityChange}
      />
      <Textfield
        label="Region"
        variant="outlined"
        value={props.region}
        required
        onChange={props.handleRegionChange}
      />
      <Textfield
        label="Postcode"
        variant="outlined"
        value={props.postcode}
        required
        onChange={props.handlePostcodeChange}
      />
      <Button type='submit'>Submit</Button>
    </form>
  );
}

export default EventForm;