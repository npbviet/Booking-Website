import React, { useState } from "react";

import styles from "./NavBar.module.css";
import object from "../../../data/navBar.json";
import { NavBarItem } from "./NavBarItem";

export const NavBar = () => {
  const [items, setItems] = useState(object);

  return (
    <div className={`${styles.navBar}`}>
      <div className={`${styles.title}`}>
        <div onClick={() => window.location.replace("/")}>Booking Website </div>
        <div>
          <button className={`${styles["button-nav"]}`}>Register</button>
          <button className={`${styles["button-nav"]}`}>Login</button>
        </div>
      </div>
      <div className={`${styles.items}`}>
        {items.map((item) => (
          <NavBarItem
            key={item.type}
            type={item.type}
            icon={item.icon}
            active={item.active}
          />
        ))}
      </div>
    </div>
  );
};
