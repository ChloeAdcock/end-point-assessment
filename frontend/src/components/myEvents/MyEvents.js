import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import formatDateTime from "../../helpers/formatDateTime";

function MyEvents(props) {
  return (
    <Drawer variant="permanent">
      {!props.events ? (
        <Typography>You don't have any events</Typography>
      ) : (
        <List style={{ marginTop: "20%" }}>
          {props.events.map((event) => {
            return (
              <ListItem id={event.id}>
                <Typography>{event.name}</Typography>
                <Typography>{formatDateTime(event.date_time)}</Typography>
                <Button onClick={() => props.handleClick(event)}>
                  Details
                </Button>
              </ListItem>
            );
          })}
        </List>
      )}
    </Drawer>
  );
}

export default MyEvents;
