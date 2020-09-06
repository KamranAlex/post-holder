import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  makeStyles,
  CardActions,
  Button,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";

const Post = (props) => {
  const postData = props.newPost;

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },

    title: {
      fontSize: 20,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0} direction='column' justify='center'>
        <Card
          variant='outlined'
          className={classes.root}
          style={{ background: "#424242", margin: "5px 60px" }}
        >
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom
              style={{
                color: "#12d080",
                textTransform: "capitalize",
                fontFamily: "Arial",
                fontWeight: "600",
              }}
            >
              {postData.title}
            </Typography>
            <CardActions>
              <Link
                to={`/post/${postData.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant='contained'
                  color='secondary'
                  startIcon={<VisibilityIcon />}
                >
                  View Post
                </Button>
              </Link>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Post;
