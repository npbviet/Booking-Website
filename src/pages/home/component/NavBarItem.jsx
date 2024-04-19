import React from "react";
import styles from "./NavBarItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBarItem = (props) => {
  return (
    <div className={`${styles.barItem} ${props.active && styles.active}`}>
      <FontAwesomeIcon icon={props.icon} className={`${styles.icon}`} />
      {props.type}
    </div>
  );
};
