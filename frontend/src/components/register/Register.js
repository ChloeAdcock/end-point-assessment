import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, closeAlert } from "../../redux/actions/accounts/accounts";

function Register() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fieldError, setFieldError] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [fieldTouched, setFieldTouched] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const errorState = useSelector((state) => state.accounts.registerError);
  const user = useSelector((state) => state.accounts.currentUser);

  const validateEmail = () => {
    // Letters then @ then letters then full stop then letters
    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      setFieldError({
        ...fieldError,
        ...{ email: true },
      });
    } else {
      setFieldError({
        ...fieldError,
        ...{ email: false },
      });
    }
  };
  const validatePassword = () => {
    // Alphanumeric, must have a number and a letter, 8-15 characters
    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/)) {
      setFieldError({
        ...fieldError,
        ...{ password: true },
      });
    } else {
      setFieldError({
        ...fieldError,
        ...{ password: false },
      });
    }
  };

  // Must not already exist in the database
  const validateUsername = () => {
    // Alphanumeric between 5 and 10 characters
    if (!username.match(/^[a-zA-Z0-9]{5,10}$/)) {
      setFieldError({
        ...fieldError,
        ...{ username: true },
      });
    } else {
      setFieldError({
        ...fieldError,
        ...{ username: false },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(fieldError).indexOf(true) === -1) {
      dispatch(
        register({
          username: username,
          email: email,
          password: password,
        })
      );
    }
  };

  useEffect(() => {
      if (password !== confirmPassword) {
        setFieldError({
          ...fieldError,
          ...{ confirmPassword: true },
        });
      } else {
        setFieldError({
          ...fieldError,
          ...{ confirmPassword: false },
        });
      }
  }, [confirmPassword])

  const handleClose = () => {
    dispatch(closeAlert());
  };

  if (!errorState && user) {
    return <Redirect to="/map" />;
  } else {
    return (
      <div>
        {errorState && (
          <Alert severity="error" onClose={handleClose}>
            An error has occurred - please try again later
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <Typography varient="h1">Register</Typography>
          <Textfield
            label="Username"
            value={username}
            onBlur={() => {
              setFieldTouched({
                ...fieldTouched,
                ...{ username: true },
              });
            }}
            error={fieldTouched.username && fieldError.username}
            onChange={(e) => {
              setUsername(e.target.value);
              validateUsername();
            }}
            variant="outlined"
            required
            helperText={
              fieldTouched.username && fieldError.username && "Invalid username"
            }
          />
          <Textfield
            label="Email"
            error={fieldTouched.email && fieldError.email}
            onBlur={() => {
                setFieldTouched({
                  ...fieldTouched,
                  ...{ email: true },
                });
            }}
            value={email}
            variant="outlined"
            onChange={(e) => {
                setEmail(e.target.value);
                validateEmail();
            }}
            type="email"
            required
            helperText={fieldTouched.email && fieldError.email && "Invalid email"}
          />
          <Textfield
            label="Password"
            type="password"
            error={fieldTouched.password && fieldError.password}
            onBlur={() => {
                setFieldTouched({
                  ...fieldTouched,
                  ...{ password: true },
                });
            }}
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
                validatePassword();
            }}
            variant="outlined"
            required
            helperText={fieldTouched.password && fieldError.password && "Invalid password"}
          />
          <Textfield
            label="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={fieldTouched.confirmPassword && fieldError.confirmPassword}
            onBlur={() => {
                setFieldTouched({
                  ...fieldTouched,
                  ...{ confirmPassword: true },
                });
            }}
            variant="outlined"
            required
            helperText={fieldTouched.confirmPassword && fieldError.confirmPassword && "Passwords do not match"}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default Register;
