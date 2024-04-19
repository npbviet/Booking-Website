import React from "react";

import styles from "./SearchList.module.css";
export const SearchList = (props) => {
  return (
    <div className={`${styles.searchList}`}>
      <div className={`${styles.searchListCol1}`}>
        <img src={props.value.image_url} />
      </div>
      <div className={`${styles.searchListCol2}`}>
        <div className={`${styles.searchListName}`}>{props.value.name}</div>
        <div className={`${styles.searchListDistance}`}>
          {props.value.distance} from center
        </div>
        <div className={`${styles.searchListTag}`}>{props.value.tag}</div>
        <div className={`${styles.searchListDescription}`}>
          {props.value.description}
        </div>
        <div className={`${styles.searchListType}`}>{props.value.type}</div>
        <div className={`${styles.searchListFreeCancel}`}>
          {props.value.free_cancel && (
            <div>
              <div className={`${styles.freeCancel}`}>Free Cancellation</div>
              <div>
                You can cancel later, so lock in this great price today!
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={`${styles.searchListCol3}`}>
        <div className={`${styles.rateText}`}>
          {props.value.rate_text}
          <span>{props.value.rate}</span>
        </div>
        <h3 className={`${styles.price}`}>${props.value.price}</h3>
        <p>Include taxes and fees</p>
        <button>See availability</button>
      </div>
    </div>
  );
};
