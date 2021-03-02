import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/accounts/login";

function Login() {
  const dispatch = useDispatch();
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

  if (!errorState && user) {
    return <Redirect to="/map" />;
  } else {
    return (
      <div>
        {errorState && (
          <Alert severity="error">
            Incorrect username or password - please try again
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <Typography varient="h1">Login</Typography>
          <Textfield
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            variant="outlined"
            required
          />
          <Textfield
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            label="Password"
            variant="outlined"
            required
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default Login;
