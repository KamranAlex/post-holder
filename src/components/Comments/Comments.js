import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List,
  makeStyles,
} from "@material-ui/core";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";

const Comments = (props) => {
  const holdID = props.id;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const filteredComments = comments.filter((flComments) => {
    return flComments.postId === holdID;
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    dividerFullWidth: {
      margin: `5px 0 0 ${theme.spacing(2)}px`,
    },
    dividerInset: {
      margin: `5px 0 0 ${theme.spacing(9)}px`,
    },
  }));

  const classes = useStyles();
  return (
    <Grid>
      <p style={{ color: "white", fontWeight: "600" }}>Comments</p>
      {filteredComments.map((cmt) => (
        <List>
          <Divider component='li' variant='inset' />
          <ListItem>
            <ListItemAvatar>
              <ProfilePhoto></ProfilePhoto>
            </ListItemAvatar>
            <ListItemText primary={cmt.name} secondary={cmt.email} />
          </ListItem>
          <Typography
            className={classes.dividerInset}
            color='textSecondary'
            display='block'
            variant='primary'
            style={{
              color: "#17141E",
              fontFamily: "Arial",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            <p>{cmt.body}</p>
          </Typography>
        </List>
      ))}
    </Grid>
  );
};

export default Comments;
