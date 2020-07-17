import React from "react";
import styles from "./TodaysWorkout.module.css"

const TodaysWorkout = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.header}>Today's Exercises</h2>
      </div>
      <div>
        <ul>
          <li>no items</li>
        </ul>
      </div>
    </div>
  )
}

export default TodaysWorkout;
