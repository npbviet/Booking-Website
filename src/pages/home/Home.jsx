import React from "react";

import { NavBar } from "./component/NavBar";
import { Header } from "./component/Header";
import { City } from "./list/City";
import { Subcribe } from "./component/Subcribe";
import { Footer } from "./component/Footer";
const Home = () => {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <NavBar />
      <Header />
      <City />
      <Subcribe />
      <Footer />
    </div>
  );
};

export default Home;
