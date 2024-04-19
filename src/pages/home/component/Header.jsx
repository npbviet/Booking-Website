import React, { useState } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export const Header = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [show, setShow] = useState(false);

  //_______________________________Setting date_________________________________
  const monthStart = state[0].startDate.toLocaleString("en-US", {
    month: "short",
  });
  const dayStart = state[0].startDate.toLocaleString("en-US", {
    day: "2-digit",
  });
  const yearStart = state[0].startDate.getFullYear();
  let monthEnd, dayEnd, yearEnd;

  if (state[0].endDate !== null) {
    monthEnd = state[0].endDate.toLocaleString("en-US", {
      month: "short",
    });
    dayEnd = state[0].endDate.toLocaleString("en-US", {
      day: "2-digit",
    });
    yearEnd = state[0].endDate.getFullYear();
  } else {
    monthEnd = monthStart;
    dayEnd = dayStart;
    yearEnd = yearStart;
  }
  //_______________________________Kết thúc setting date_________________________________

  return (
    <div className={`${styles.header}`}>
      <h2>A lifetime of discounts? It's Genius.</h2>
      <p>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account
      </p>
      <button className={`${styles["button-header-1"]}`}>
        Sign in / Register
      </button>
      <div className={`${styles["input-bar"]}`}>
        <div className={`${styles["input-item"]}`}>
          <FontAwesomeIcon icon={"fa-bed"} />
          <input
            className={`${styles["input-card"]}`}
            placeholder="Where are you going"
          />
        </div>
        <div className={`${styles["input-item"]}`}>
          <FontAwesomeIcon icon={"fa-solid fa-calendar-days"} />
          <input
            className={`${styles["input-card"]}`}
            placeholder={`${dayStart}/${monthStart}/${yearStart} to ${dayEnd}/${monthEnd}/${yearEnd}`}
            onClick={(e) => {
              e.preventDefault();
              setShow(true);
            }}
          />
          {show && (
            <DateRange
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              className={`${styles.dateCalendar}`}
              minDate={new Date()}
              onChange={(item) => {
                setState([item.selection]);
                if (item.selection.startDate !== item.selection.endDate) {
                  setShow(false);
                }
              }}
              ranges={state}
            />
          )}
        </div>
        <div className={`${styles["input-item"]}`}>
          <FontAwesomeIcon icon={"fa-person"} />
          <input
            className={`${styles["input-card"]}`}
            placeholder="1 adult . 0 children . 1 room"
          />
        </div>
        <button
          className={`${styles["button-header-2"]}`}
          onClick={() => window.location.replace("/search")}
        >
          Search
        </button>
      </div>
    </div>
  );
};
