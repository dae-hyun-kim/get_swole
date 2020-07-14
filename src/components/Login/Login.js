import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className={styles.main}>
      <div className={styles.test}>
        <div className={styles.center}>
          <h1>GET SWOLE</h1>
          <h2>Workout Planner</h2>
        </div>
        <div className={styles.plan}>
          <div className={styles.planBox}>
            <div className={styles.planStep}>
              <i className="fas fa-dumbbell fa-2x"></i>
            </div>
            1. Input Exercises
          </div>
          <div className={styles.arrowContainer}>
            <i class="fas fa-arrow-right fa-2x"></i>
          </div>
          <div className={styles.planBox}>
            <div className={styles.planStep}>
              <i class="fas fa-weight-hanging fa-2x"></i>
            </div>
            2. Enter Weights
          </div>
          <div className={styles.arrowContainer}>
            <i class="fas fa-arrow-right fa-2x"></i>
          </div>
          <div className={styles.planBox}>
            <div className={styles.planStep}>
              <i class="fas fa-chart-line fa-2x"></i>
            </div>
            3. Track Progress
          </div>
        </div>
        <div className={styles.startedContainer}>
          <Link to={"/home"}><button>Get Started</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Login;
