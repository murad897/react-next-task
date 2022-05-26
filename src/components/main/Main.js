import Header from "../header/Header";
import React, { useEffect } from "react";
import Popup from "../sharedComp/Popup";
import { PopupContext } from "../../context/context";
import { formInfo } from "../../context/context";
import { useState } from "react";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(products);
  });
  console.log(products);
  return (
    <div className="home-page-container">
      <PopupContext.Provider value={{ open, setOpen }}>
        <formInfo.Provider value={{ products, setProducts }}>
          <Header />
          {open ? <Popup /> : ""}
        </formInfo.Provider>
      </PopupContext.Provider>
    </div>
  );
};

export default Main;
