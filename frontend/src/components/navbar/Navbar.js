import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currentUser, logout } from "../../redux/actions/accounts/accounts";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.accounts.currentUser);

  useEffect(() => {
    dispatch(currentUser());
  }, []);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Community Events
          </Typography>
          {user ? (
            <div>
              <Button component={Link} to="/home" color="inherit">
                Community Events
              </Button>
              <Button component={Link} to="/newevent" color="inherit">
                New Event
              </Button>
              <Button
                onClick={handleClick}
                component={Link}
                to="/login"
                color="inherit"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
              <Button component={Link} to="/register" color="inherit">
                Register
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {/* Empty toolbar to prevent content being rendered under navbar */}
      <Toolbar />
    </div>
  );
}

export default Navbar;
