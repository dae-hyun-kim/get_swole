import React, { useRef } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom"

const Login = () => {

  const theContainer = useRef();

  const panelActive = () => {
    theContainer.current.classList.add(styles.rightPanelActive);
  }

  const panelInactive = () => {
    theContainer.current.classList.remove(styles.rightPanelActive);
  }



  return (
    <div className={`${styles.container}`} ref={theContainer}>
      <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
        <form action="#">
          <h1 className={styles.headTitles}>Create Account</h1>
          <div className={styles.socialContainer}>
            <i className={styles.social}><i className="fab fa-facebook-square fa-2x"></i></i>
            <i className={styles.social}><i className="fab fa-twitter-square fa-2x"></i></i>
            <i href="#" className={styles.social}><i className="fab fa-linkedin fa-2x"></i></i>
            <i className={styles.social}><i className="fab fa-google-plus-square fa-2x"></i></i>
          </div>
          <span className={styles.printSmall}>or use your email for registration</span>
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button className={`${styles.introButton} ${styles.fourth}`}>Sign Up</button>
        </form>
      </div>
      <div className={`${styles.formContainer} ${styles.signInContainer}`}>
        <form action="#">
          <h1 className={styles.headTitles}>Sign In</h1>
          <div className={styles.socialContainer}>
            <i className={styles.social}><i className="fab fa-facebook-square fa-2x"></i></i>
            <i className={styles.social}><i className="fab fa-twitter-square fa-2x"></i></i>
            <i className={styles.social}><i className="fab fa-linkedin fa-2x"></i></i>
            <i className={styles.social}><i className="fab fa-google-plus-square fa-2x"></i></i>
          </div>
          <span className={styles.printSmall}>or use your account</span>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password" />
          <p className={styles.printSmall}>Forgot your password?</p>
          <button className={`${styles.introButton} ${styles.fourth}`}>Sign In</button>
        </form>
      </div>
      <div className={styles.overlayContainer}>
        <div className={styles.overlay}>
          <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
            <h1 className={styles.headTitles}>Already a Member?</h1>
            <p className={styles.print}>Click below to login with your information.</p>
            <button className={`${styles.ghost} ${styles.introButton}`} onClick={panelInactive} >Sign In</button>
          </div>
        <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
            <h1 className={styles.headTitles}>Ready to Lift?</h1>
            <p className={styles.print}>Click below and sign up to be a member.</p>
          <button onClick={panelActive} className={`${styles.ghost} ${styles.introButton}`}>Sign Up</button>
        </div>
        </div>
      </div>
    </div>
  )

}

export default Login;
