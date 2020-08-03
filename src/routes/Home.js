import React from "react";
import { Grid } from "@material-ui/core";
import NavBar from "../components/NavBar/NavBar";
import WorkOutContainer from "../components/WorkOutContainer/WorkOutContainer"

const Home = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <NavBar/>
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={1}/>
        <Grid item xs={6} sm={5}>
          <WorkOutContainer/>
        </Grid>
        <Grid item xs={6} sm={5}>
          <WorkOutContainer />
        </Grid>
        <Grid item xs={0} sm={1}/>
      </Grid>
    </Grid>
  )
}

export default Home;
