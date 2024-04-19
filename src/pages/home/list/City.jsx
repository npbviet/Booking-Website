import React, { useState } from "react";

import styles from "./City.module.css";
import city from "../../../data/city.json";
import typeHotel from "../../../data/type.json";
import listHotel from "../../../data/hotel_list.json";
import { CityItem } from "./CityItem";
import { HotelDetail } from "./HotelDetail";
import { TypeHotel } from "./TypeHotel";

export const City = () => {
  const [item1, setItem1] = useState(city);
  const [item2, setItem2] = useState(typeHotel);
  const [item3, setItem3] = useState(listHotel);

  return (
    <div className={`${styles.city}`}>
      <div className={`${styles.flexItem}`}>
        {item1.map((item) => (
          <CityItem key={item.name} value={item} />
        ))}
      </div>
      <h2>Browse by property type</h2>
      <div className={`${styles.flexItem}`}>
        {item2.map((item) => (
          <TypeHotel key={item.name} value={item} />
        ))}
      </div>
      <h2>Home guests love</h2>
      <div className={`${styles.flexItem}`}>
        {item3.map((item) => (
          <HotelDetail key={item.name} value={item} />
        ))}
      </div>
    </div>
  );
};
