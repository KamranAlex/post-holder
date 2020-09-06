import React from "react";
import Header from "../Header/Header";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Grid } from "@material-ui/core";

const Error = () => {
  return (
    <div>
      <Header></Header>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
        style={{ minHeight: "70vh" }}
      >
        <div style={{ minWidth: "75%" }}>
          <Alert variant='filled' severity='error'>
            <AlertTitle style={{ fontSize: "80px" }}>404</AlertTitle>
            <AlertTitle style={{ fontSize: "30px" }}>
              Page Couldn't Found !!!
            </AlertTitle>
          </Alert>
        </div>
      </Grid>
    </div>
  );
};

export default Error;
