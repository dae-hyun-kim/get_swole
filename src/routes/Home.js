import React from "react";
import DateComponent from "../components/Date/DateComponent";
import TodaysWorkout from "../components/TodaysWorkout/TodaysWorkout";

const Home = () => {
  return (
    <div>
      <div>
        <DateComponent />
      </div>
      <div className="home-space-around">
        <TodaysWorkout/>
      </div>
    </div>
  )
}

export default Home;
