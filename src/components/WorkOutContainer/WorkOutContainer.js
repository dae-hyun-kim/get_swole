import React from "react";
import WorkOutCard from "../WorkOutCard/WorkOutCard"
import { Grid } from "@material-ui/core";
import WorkOutList from "../../constants"

const WorkOutContainer = () => {

  const getWorkOuts = (workOutObj) => {;
    return (
      <Grid item xs={12} sm={4}>
        <WorkOutCard {...workOutObj} />
      </Grid>
    )
  }

  return (
    <Grid container spacing={4}>
        {WorkOutList.map(workOutObj => getWorkOuts(workOutObj))}
    </Grid>
  )
}

export default WorkOutContainer
