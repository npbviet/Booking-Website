import React from "react";

import styles from "./Popup.module.css";
export const Popup = () => {
  return (
    <div className={`${styles.popUp}`}>
      <h3>Search</h3>
      <h4>Destination</h4>
      <input type="text" />
      <h4>Check-in Date</h4>
      <input type="text" value="06/24/2022 to 06/24/2022" />
      <h4>Options</h4>
      <form>
        <label>
          Min price per night:
          <input type="number" />
        </label>
        <label>
          Max price per night:
          <input type="number" />
        </label>
        <label>
          Adult:
          <input type="number" />
        </label>
        <label>
          Children:
          <input type="number" />
        </label>
        <label>
          Room:
          <input type="number" />
        </label>
      </form>
      <button>Search</button>
    </div>
  );
};
