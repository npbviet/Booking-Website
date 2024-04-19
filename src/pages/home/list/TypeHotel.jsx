import React from "react";
import styles from "./TypeHotel.module.css";

export const TypeHotel = (props) => {
  return (
    <div className={`${styles.typeHotel}`}>
      <img src={props.value.image} />
      <div className={`${styles.typeName}`}>{props.value.name}</div>
      <div className={`${styles.typeCount}`}>{props.value.count} hotels</div>
    </div>
  );
};
