import React from "react";
import DateComponent from "../components/Date/DateComponent";
import TodaysWorkout from "../components/TodaysWorkout/TodaysWorkout";

const Home = () => {
  return (
    <div>
      <div>
        <DateComponent />
      </div>
      <div>
        <TodaysWorkout/>
      </div>
    </div>
  )
}

export default Home;
