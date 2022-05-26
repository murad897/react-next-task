import Header from "../header/Header";
import React, { useEffect } from "react";
import Popup from "../sharedComp/Popup";
import { PopupContext } from "../../context/context";
import { useState } from "react";
const Main = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="home-page-container">
      <PopupContext.Provider value={{ open, setOpen }}>
        <Header />
        {open ? <Popup /> : ""}
      </PopupContext.Provider>
    </div>
  );
};

export default Main;
