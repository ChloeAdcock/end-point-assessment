import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, closeAlert } from "../../redux/actions/accounts/accounts";

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
          <Typography>
            <Link href="/register" onClick={e => e.preventDefault}>
              Don't have an account? Register here
            </Link>
          </Typography>
        </form>
      </div>
    );
  }
}

export default Login;
