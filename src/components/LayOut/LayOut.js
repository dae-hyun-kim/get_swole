import React from "react";
import styles from "./LayOut.module.css"

const LayOut = (props) => {
  return (
    <div className={styles.test}>
      {props.children}
    </div>
  )
}

export default LayOut
