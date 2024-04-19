import React from "react";
import styles from "./Subcribe.module.css";

export const Subcribe = () => {
  return (
    <div className={`${styles.subcribe}`}>
      <h2>Save time, save money!</h2>
      <p>Sign up we'll send the best deals to you</p>
      <div>
        <input placeholder="Your Email"></input>
        <button className={`${styles["button-subcribe"]}`}>Subcribe</button>
      </div>
    </div>
  );
};
