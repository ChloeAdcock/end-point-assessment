import React, { useState } from "react";
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function EventForm(props) {

  const [fieldError, setFieldError] = useState({
    name: false,
    description: false,
    contactInfo: false,
  });
  const [fieldTouched, setFieldTouched] = useState({
    name: false,
    description: false,
    contactInfo: false,
  });

  const handleNameChange = (e) => {
    props.handleNameChange(e);
    if (!props.name.match(/^[a-zA-Z0-9!@#$&()\\-`.+,/" ]{1,100}$/)) {
      setFieldError({
        ...fieldError,
        ...{ name: true },
      });
    } else {
      setFieldError({
        ...fieldError,
        ...{ name: false },
      });
    }
  }

  const handleDescriptionChange = (e) => {
    props.handleDescriptionChange(e);
    if (!props.description.match(/^[a-zA-Z0-9!@#$&()\\-`.+,/" ]{1,500}$/)) {
      setFieldError({
        ...fieldError,
        ...{ description: true },
      });
    } else {
      setFieldError({
        ...fieldError,
        ...{ description: false },
      });
    }
  }

  const handleContactInfoChange = (e) => {
    props.handleContactInfoChange(e);
    if (!props.contactInfo.match(/^[a-zA-Z0-9!@#$&()\\-`.+,/" ]{1,100}$/)) {
      setFieldError({
        ...fieldError,
        ...{ contactInfo: true },
      });
    } else {
      setFieldError({
        ...fieldError,
        ...{ contactInfo: false },
      });
    }
  }

  return (
    <form onSubmit={e => props.handleSubmit(fieldError, e)}>
      <Textfield
        label="Name"
        value={props.name}
        variant="outlined"
        required
        error={fieldTouched.name && fieldError.name}
        helperText={
          fieldTouched.name &&
          fieldError.name &&
          "Invalid event name"
        }
        onChange={handleNameChange}
        onBlur={() => {
          setFieldTouched({
            ...fieldTouched,
            ...{ name: true },
          });
        }}
      />
      <Textfield
        label="Description"
        variant="outlined"
        value={props.description}
        required
        multiline
        error={fieldTouched.description && fieldError.description}
        helperText={
          fieldTouched.description &&
          fieldError.description &&
          "Invalid event description"
        }
        onChange={handleDescriptionChange}
        onBlur={() => {
          setFieldTouched({
            ...fieldTouched,
            ...{ description: true },
          });
        }}
      />
      <Textfield
        variant="outlined"
        required
        type="datetime-local"
        defaultValue={props.dateTime.slice(0, -1)}
        onChange={props.handleDateTimeChange}
      />
      <Textfield
        label="Contact info"
        value={props.contactInfo}
        variant="outlined"
        required
        onChange={handleContactInfoChange}
        error={fieldTouched.contactInfo && fieldError.contactInfo}
        helperText={
          fieldTouched.contactInfo &&
          fieldError.contactInfo &&
          "Invalid contact information"
        }
        onBlur={() => {
          setFieldTouched({
            ...fieldTouched,
            ...{ contactInfo: true },
          });
        }}
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
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default EventForm;
