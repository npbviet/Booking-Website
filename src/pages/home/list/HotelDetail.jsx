import React from "react";
import styles from "./HotelDetail.module.css";

export const HotelDetail = (props) => {
  return (
    <div className={`${styles.hotelDetail}`}>
      <img src={props.value["image_url"]} />
      <div
        className={`${styles.hotelName}`}
        onClick={() => window.location.replace("/detail")}
      >
        {props.value.name}
      </div>
      <div className={`${styles.hotelCity}`}>{props.value.city}</div>
      <div className={`${styles.hotelPrice}`}>
        Starting from ${props.value.price}
      </div>
      <div>
        <span className={`${styles.hotelRate}`}>{props.value.rate}</span>
        <span className={`${styles.hotelDetailType}`}>{props.value.type}</span>
      </div>
    </div>
  );
};
