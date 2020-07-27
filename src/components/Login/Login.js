import React, { useRef } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom"

const Login = () => {

  // const loginRef = useRef();

  // const toggleSign = () => {
  //   loginRef.current.classList.toggle(styles.sSignUp)
  // }

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
          <h1>Create Account</h1>
          <div className={styles.socialContainer}>
            <i className={styles.social}><i className="fab fa-facebook-square fa-2x"></i></i>
            <i className={styles.social}><i className="fab fa-twitter-square fa-2x"></i></i>
            <i href="#" className={styles.social}><i className="fab fa-linkedin fa-2x"></i></i>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button>Sign Up</button>
        </form>
      </div>
      <div className={`${styles.formContainer} ${styles.signInContainer}`}>
        <form action="#">
          <h1>Sign In</h1>
          <div className={styles.socialContainer}>
            <i className={styles.social}><i className="fab fa-facebook-square fa-2x"></i></i>
            <i className={styles.social}><i className="fab fa-twitter-square fa-2x"></i></i>
            <i className={styles.social}><i className="fab fa-linkedin fa-2x"></i></i>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className={styles.overlayContainer}>
        <div className={styles.overlay}>
          <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className={styles.ghost} onClick={panelInactive} >Sign In</button>
          </div>
        <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
          <h1>Hello, Friend</h1>
          <p>Enter your personal details and start your journey with us</p>
          <button onClick={panelActive} className={styles.ghost}>Sign Up</button>
        </div>
        </div>
      </div>
    </div>
  )

//   return (
//     <div ref={loginRef} className={`${styles.cont}`}>
//       <div className={`${styles.form} ${styles.signIn}`}>
//         <label htmlFor="">
//           <span>Email Address</span>
//           <input type="email" name="email"/>
//         </label>
//         <label htmlFor="">
//           <span>Password</span>
//           <input type="password" name="password" />
//         </label>
//         <button className={styles.submit} type="button">Sign In</button>
//         <p className={styles.forgotPass}>Forgot Password</p>

//         <div className={styles.socialMedia}>
//           <ul>
//             <li><span className={`${styles.facebook} fab fa-facebook-square fa-3x`}></span></li>
//             <li><span className={`${styles.twitter} fab fa-twitter-square fa-3x`}></span></li>
//             <li><span className={`${styles.linkedIn} fab fa-linkedin fa-3x`}></span></li>
//             <li><span className={`${styles.instagram} fab fa-instagram fa-3x`}></span></li>
//           </ul>
//         </div>

//         <div className={styles.subCont}>
//           <div className={styles.image}>
//             <div className={`${styles.imageText} ${styles.mUp}`}>
//               <h2>New Here?</h2>
//               <p>Sign up and discover great amount of new opportunities!</p>
//             </div>
//             <div className={`${styles.imageText} ${styles.mIn}`}>
//               <h2>One of us?</h2>
//               <p>If you already have an account, We missed you!</p>
//             </div>
//             <div className={styles.imageBtn} onClick={toggleSign}>
//               <span className={styles.mUp}>Sign Up</span>
//               <span className={styles.mIn}>Sign In</span>
//             </div>
//           </div>
//           <div className={`${styles.form} ${styles.signUp}`}>
//             <h2>Sign Up</h2>
//             <label htmlFor="">
//               <span>Name</span>
//               <input type="text"/>
//             </label>
//             <label htmlFor="">
//               <span>Email</span>
//               <input type="text" />
//             </label>
//             <label htmlFor="">
//               <span>Password</span>
//               <input type="text" />
//             </label>
//             <label htmlFor="">
//               <span>Confirm Password</span>
//               <input type="text" />
//             </label>
//             <button type="button" className={styles.submit}>Sign Up Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
}

export default Login;
