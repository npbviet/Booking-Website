import React, { useState } from "react";

import styles from "./Footer.module.css";
import object from "../../../data/footer.json";

export const Footer = () => {
  const [items, setItems] = useState(object);
  return (
    <ul className={`${styles.footer}`}>
      <li className={`${styles.itemsFooter}`}>
        {items.map((col) => (
          <div key={col.col_number}>
            {col.col_values.map((rowItem) => (
              <div key={rowItem}>{rowItem}</div>
            ))}
          </div>
        ))}
      </li>
    </ul>
  );
};
