import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currentUser, logout } from "../../redux/actions/accounts/accounts";
import { useStyles } from "../../styles/navbarStyles";

function Navbar() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = useSelector((state) => state.accounts.currentUser);
  
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <AppBar position="fixed" style={{zIndex:1301}}>
        <Toolbar>
          <Typography variant="h6">
            Community Events
          </Typography>
          {user ? (
            <div className={classes.navbar}>
              <Button component={Link} to="/home" color="inherit">
                Home
              </Button>
              <Button component={Link} to="/newevent" color="inherit">
                New Event
              </Button>
              <Button
                onClick={handleClick}
                component={Link}
                to="/"
                color="inherit"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className={classes.navbar}>
              <Button component={Link} to="/" color="inherit" >
                Login
              </Button>
              <Button component={Link} to="/register" color="inherit" >
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
