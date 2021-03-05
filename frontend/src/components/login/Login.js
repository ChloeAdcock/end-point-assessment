import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, closeAlert } from "../../redux/actions/accounts/accounts";
import { useStyles } from "../../styles/formStyles";

function Login() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errorState = useSelector((state) => state.accounts.loginError);
  const user = useSelector((state) => state.accounts.currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        username: username,
        password: password,
      })
    );
  };

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
            Incorrect username or password - please try again
          </Alert>
        )}
        <Container maxWidth="sm" className={classes.container}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h4">Login</Typography>
            <Textfield
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
              required
              margin="normal"
            />
            <Textfield
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Password"
              required
              margin="normal"
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
              <Link href="/register" onClick={(e) => e.preventDefault}>
                Don't have an account? Register here
              </Link>
            </Typography>
          </form>
        </Container>
      </div>
    );
  }
}

export default Login;
