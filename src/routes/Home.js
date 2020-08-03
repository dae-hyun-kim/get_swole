import React from "react";
import { Grid } from "@material-ui/core";
import NavBar from "../components/NavBar/NavBar";
import WorkOutContainer from "../components/WorkOutContainer/WorkOutContainer";
import TodaysWorkout from "../components/TodaysWorkout/TodaysWorkout"

const Home = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <NavBar/>
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={1}/>
        <Grid item xs={8} sm={7}>
          <WorkOutContainer/>
        </Grid>
        <Grid item xs={4} sm={3}>
          <TodaysWorkout />
        </Grid>
        <Grid item xs={0} sm={1}/>
      </Grid>
    </Grid>
  )
}

export default Home;
