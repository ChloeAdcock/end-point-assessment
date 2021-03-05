import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import formatDateTime from "../../helpers/formatDateTime";
import { useStyles } from "../../styles/drawerStyles";

function MyEvents(props) {
  const classes = useStyles();

  return (
    <Drawer variant="permanent">
      {!props.events ? (
        <Typography>You don't have any events</Typography>
      ) : (
        <List style={{ marginTop: "20%" }}>
          {props.events.map((event) => {
            return (
              <div id={event.id}>
                <ListItem className={classes.listItem}>
                  <ListItemText
                    primary={<Typography variant="h6">{event.name}</Typography>}
                    secondary={
                      <Typography>{formatDateTime(event.date_time)}</Typography>
                    }
                  />
                  <Button
                    onClick={() => props.handleClick(event)}
                    fullWidth
                    color="primary"
                    variant="contained"
                  >
                    Details
                  </Button>
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      )}
    </Drawer>
  );
}

export default MyEvents;
