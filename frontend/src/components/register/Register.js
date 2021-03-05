import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, closeAlert } from "../../redux/actions/accounts/accounts";
import { useStyles } from "../login/loginStyles";

function Register() {
  const dispatch = useDispatch();
  const classes = useStyles();
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

  const handleBlur = ({ target }) =>
    setFieldTouched((prevInputs) => ({ ...prevInputs, [target.name]: true }));

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmPassword]);

  const handleClose = () => {
    dispatch(closeAlert());
  };

  if (!errorState && user) {
    return <Redirect to="/home" />;
  } else {
    return (
      <div>
        {errorState && (
          <Alert severity="error" onClose={handleClose}>
            An error has occurred - please try again later
          </Alert>
        )}
        <Container maxWidth="sm" className={classes.container}>
          <form onSubmit={handleSubmit}>
            <Typography varient="h1" className={classes.typography}>
              Register
            </Typography>
            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={1}>
                  <Tooltip title="Username must be alphanumeric and 5-10 characters">
                    <IconButton aria-label="info">
                      <HelpOutlineIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item xs={11}>
                  <Textfield
                    margin="normal"
                    name="username"
                    fullWidth
                    label="Username"
                    value={username}
                    onBlur={handleBlur}
                    error={fieldTouched.username && fieldError.username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      validateUsername();
                    }}
                    required
                    helperText={
                      fieldTouched.username &&
                      fieldError.username &&
                      "Invalid username"
                    }
                  />
                </Grid>
              </Grid>
            </div>
            <Textfield
              label="Email"
              margin="normal"
              name="email"
              fullWidth
              error={fieldTouched.email && fieldError.email}
              onBlur={handleBlur}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail();
              }}
              type="email"
              required
              helperText={
                fieldTouched.email && fieldError.email && "Invalid email"
              }
            />
            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={1}>
                  <Tooltip title="Password must be alphanumeric, 5-10 characters and contain at least one letter and one number">
                    <IconButton aria-label="info">
                      <HelpOutlineIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item xs={11}>
                  <Textfield
                    label="Password"
                    type="password"
                    name="password"
                    margin="normal"
                    fullWidth
                    error={fieldTouched.password && fieldError.password}
                    onBlur={handleBlur}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      validatePassword();
                    }}
                    required
                    helperText={
                      fieldTouched.password &&
                      fieldError.password &&
                      "Invalid password"
                    }
                  />
                </Grid>
              </Grid>
            </div>
            <Textfield
              label="Confirm password"
              fullWidth
              type="password"
              name="confirmPassword"
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={fieldTouched.confirmPassword && fieldError.confirmPassword}
              onBlur={handleBlur}
              required
              helperText={
                fieldTouched.confirmPassword &&
                fieldError.confirmPassword &&
                "Passwords do not match"
              }
            />
            <Button
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              className={classes.button}
            >
              Submit
            </Button>
            <Typography>
              <Link href="/" onClick={(e) => e.preventDefault}>
                Already have an account? Login here
              </Link>
            </Typography>
          </form>
        </Container>
      </div>
    );
  }
}

export default Register;
