import React, { useState } from "react";

import { NavBar } from "../home/component/NavBar";
import { Subcribe } from "../home/component/Subcribe";
import { Footer } from "../home/component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Detail.module.css";
import object from "../../data/detail.json";

const Detail = () => {
  const [items, setItems] = useState(object);
  return (
    <div>
      {/* <h1>Detail Page</h1> */}
      <NavBar />
      <div className={`${styles.detail}`}>
        <div className={`${styles.detailFlex1}`}>
          <div>
            <h3>{items.name}</h3>
            <div className={`${styles.detailLocation}`}>
              <FontAwesomeIcon icon={"fa-solid fa-location-dot"} />
              <span>{items.address}</span>
            </div>
            <div className={`${styles.detailDistance}`}>{items.distance}</div>
            <div className={`${styles.detailPrice}`}>{items.price}</div>
          </div>
          <button>Reverse or Book Now!</button>
        </div>
        <div className={`${styles.detailFlex2}`}>
          {items.photos.map((item) => (
            <img src={item} />
          ))}
        </div>
        <div className={`${styles.detailFlex3}`}>
          <div className={`${styles.detailFlex3Item}`}>
            <h3>{items.title}</h3>
            <p>{items.description}</p>
          </div>
          <div className={`${styles.detailTable}`}>
            <h4>Perfect for a 9-night stay!</h4>
            <p>
              Located in the real hearth of Krakow, this property have an
              excellent location score of 9.8!
            </p>
            <div className={`${styles.detail9Price}`}>
              ${items.nine_night_price} <span>(9 nights)</span>
            </div>
            <button>Reverse or Book Now!</button>
          </div>
        </div>
      </div>
      <Subcribe />
      <Footer />
    </div>
  );
};

export default Detail;
