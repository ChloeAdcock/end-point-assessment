import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import { createEvent, closeAlert } from "../../redux/actions/events/events";
import { closeAlert as closeGeocodingAlert } from "../../redux/actions/geocoding/geocoding";

function CreateEvent() {
  const dispatch = useDispatch();
  const createError = useSelector((state) => state.events.createError);
  const latlongError = useSelector((state) => state.geocoding.latlongError);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("2021-04-15T10:30:00Z");
  const [contactInfo, setContactInfo] = useState("");
  const [addLine1, setAddLine1] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postcode, setPostcode] = useState("");
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

  const validateName = () => {
    if (!name.match(/^[a-zA-Z0-9!@#$&()\\-`.+,/" ]{1,100}$/)) {
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
  };

  const validateDescription = () => {
    if (!description.match(/^[a-zA-Z0-9!@#$&()\\-`.+,/" ]{1,500}$/)) {
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
  };

  const validateContactInfo = () => {
    if (!contactInfo.match(/^[a-zA-Z0-9!@#$&()\\-`.+,/" ]{1,100}$/)) {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(fieldError).indexOf(true) === -1) {
      dispatch(
        createEvent(
          name,
          description,
          dateTime,
          contactInfo,
          addLine1,
          city,
          region,
          postcode
        )
      );
    }
  };

  return (
    <div>
      {createError && latlongError !== true && (
        <Alert severity="error" onClose={() => dispatch(closeAlert())}>
          An error has occurred - please try again later
        </Alert>
      )}
      {latlongError && (
        <Alert severity="error" onClose={() => dispatch(closeGeocodingAlert())}>
          Error occured finding location - please check the address
        </Alert>
      )}
      <Typography variant="h2">Create New Event</Typography>
      <form onSubmit={handleSubmit}>
        <Textfield
          label="Name"
          value={name}
          variant="outlined"
          required
          error={fieldTouched.name && fieldError.name}
          helperText={
            fieldTouched.name && fieldError.name && "Invalid event name"
          }
          onChange={(e) => {
            setName(e.target.value);
            validateName();
          }}
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
          value={description}
          required
          multiline
          error={fieldTouched.description && fieldError.description}
          helperText={
            fieldTouched.description &&
            fieldError.description &&
            "Invalid event description"
          }
          onChange={(e) => {
            setDescription(e.target.value);
            validateDescription();
          }}
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
          defaultValue={dateTime.slice(0, -1)}
          onChange={(e) => setDateTime(e.target.value)}
        />
        <Textfield
          label="Contact info"
          value={contactInfo}
          variant="outlined"
          required
          onChange={(e) => {
            setContactInfo(e.target.value);
            validateContactInfo();
          }}
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
          value={addLine1}
          onChange={(e) => setAddLine1(e.target.value)}
        />
        <Textfield
          label="City"
          variant="outlined"
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
        />
        <Textfield
          label="Region"
          variant="outlined"
          value={region}
          required
          onChange={(e) => setRegion(e.target.value)}
        />
        <Textfield
          label="Postcode"
          variant="outlined"
          value={postcode}
          required
          onChange={(e) => setPostcode(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default CreateEvent;
