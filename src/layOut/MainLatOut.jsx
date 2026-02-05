import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

const MainLatOut = () => {
  return (
    <div className="p-1">
      {/* <Header2></Header2> */}
      <Header></Header>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLatOut;
