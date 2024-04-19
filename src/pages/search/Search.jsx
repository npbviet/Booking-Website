import React, { useState } from "react";

import { NavBar } from "../home/component/NavBar";
import { Subcribe } from "../home/component/Subcribe";
import { Footer } from "../home/component/Footer";

import { Popup } from "./Popup";
import { SearchList } from "./SearchList";

import styles from "./Search.module.css";
import object from "../../data/search.json";

const Search = () => {
  const [items, setItems] = useState(object);
  return (
    <div>
      {/* <h1>Search Page</h1> */}
      <NavBar />
      <div className={`${styles.searchFlex}`}>
        <Popup />
        <div className={`${styles.searchFlexItem}`}>
          {items.map((item) => (
            <SearchList key={item.name} value={item} />
          ))}
        </div>
      </div>
      <Subcribe />
      <Footer />
    </div>
  );
};

export default Search;
