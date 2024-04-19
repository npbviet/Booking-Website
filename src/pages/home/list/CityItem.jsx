import React from "react";
import styles from "./CityItem.module.css";

export const CityItem = (props) => {
  return (
    <div className={`${styles.cityItem}`}>
      <img src={props.value.image} />
      <div className={`${styles.cityName}`}>{props.value.name}</div>
      <div className={`${styles.citySubtext}`}>{props.value.subText}</div>
    </div>
  );
};
