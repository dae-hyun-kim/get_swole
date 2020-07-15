import React from "react";
import styles from "./Date.module.css";
import date from "date-and-time";

const DateComponent = () => {
  const now = new Date();
  const todaysDate = date.format(now, "ddd, MMM DD YYYY");
  return (
    <div className={styles.container}>
      <div className={styles.dateContainer}>
        <h2 className={styles.thickFont}>Welcome Back, Dae</h2>
        <h2 className={styles.thinFont}>Todays Date:</h2>
        <h3>{todaysDate}</h3>
        <h2 className={styles.thinFont}>Previous Workout:</h2>
        <h3>{todaysDate}</h3>
      </div>
    </div>
  )
}

export default DateComponent;
