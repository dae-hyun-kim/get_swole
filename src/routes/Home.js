import React from "react";
import { Grid } from "@material-ui/core";
import NavBar from "../components/NavBar/NavBar"

const Home = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <NavBar/>
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2}/>
        <Grid item xs={12} sm={8}>

        </Grid>
        <Grid item xs={0} sm={2}/>
      </Grid>
    </Grid>
  )
}

export default Home;
