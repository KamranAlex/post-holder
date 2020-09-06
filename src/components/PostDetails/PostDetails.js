import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Comments from "../Comments/Comments";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const PostDetails = () => {
  const { postID } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <Grid container spacing={0} direction='column' justify='center'>
        <Card
          variant='outlined'
          style={{
            background: "#1dab6f",
            margin: "5px 15px",
            padding: "20px",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              style={{
                textTransform: "capitalize",
                fontFamily: "Arial",
                fontWeight: "800",
                fontSize: "30px",
              }}
            >
              <p>{details.title}</p>
            </Typography>
            <Typography
              gutterBottom
              style={{
                textTransform: "capitalize",
                fontFamily: "Arial",
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              <p>{details.body}</p>
            </Typography>
          </CardContent>
          <Comments id={details.id}></Comments>
        </Card>
      </Grid>
    </div>
  );
};

export default PostDetails;
