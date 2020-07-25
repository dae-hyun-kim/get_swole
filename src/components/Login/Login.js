import React, { useRef } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom"

const Login = () => {

  const loginRef = useRef();

  const toggleSign = () => {
    loginRef.current.classList.toggle(styles.sSignUp)
  }


  return (
    <div ref={loginRef} className={`${styles.cont}`}>
      <div className={`${styles.form} ${styles.signIn}`}>
        <label htmlFor="">
          <span>Email Address</span>
          <input type="email" name="email"/>
        </label>
        <label htmlFor="">
          <span>Password</span>
          <input type="password" name="password" />
        </label>
        <button className={styles.submit} type="button">Sign In</button>
        <p className={styles.forgotPass}>Forgot Password</p>

        <div className={styles.socialMedia}>
          <ul>
            <li><span className={`${styles.facebook} fab fa-facebook-square fa-3x`}></span></li>
            <li><span className={`${styles.twitter} fab fa-twitter-square fa-3x`}></span></li>
            <li><span className={`${styles.linkedIn} fab fa-linkedin fa-3x`}></span></li>
            <li><span className={`${styles.instagram} fab fa-instagram fa-3x`}></span></li>
          </ul>
        </div>

        <div className={styles.subCont}>
          <div className={styles.image}>
            <div className={`${styles.imageText} ${styles.mUp}`}>
              <h2>New Here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className={`${styles.imageText} ${styles.mIn}`}>
              <h2>One of us?</h2>
              <p>If you already have an account, We missed you!</p>
            </div>
            <div className={styles.imageBtn} onClick={toggleSign}>
              <span className={styles.mUp}>Sign Up</span>
              <span className={styles.mIn}>Sign In</span>
            </div>
          </div>
          <div className={`${styles.form} ${styles.signUp}`}>
            <h2>Sign Up</h2>
            <label htmlFor="">
              <span>Name</span>
              <input type="text"/>
            </label>
            <label htmlFor="">
              <span>Email</span>
              <input type="text" />
            </label>
            <label htmlFor="">
              <span>Password</span>
              <input type="text" />
            </label>
            <label htmlFor="">
              <span>Confirm Password</span>
              <input type="text" />
            </label>
            <button type="button" className={styles.submit}>Sign Up Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
