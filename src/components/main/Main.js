import Header from "../header/Header";
import React, { useEffect } from "react";
import Popup from "../sharedComp/Popup";
import { PopupContext } from "../../context/context";
import { formInfo } from "../../context/context";
import { useState } from "react";
import Table from "../table/Table";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  console.log(products);
  return (
    <div className="home-page-container">
      <PopupContext.Provider value={{ open, setOpen }}>
        <formInfo.Provider value={{ products, setProducts }}>
          <Header />
          {open ? <Popup /> : ""}
          <Table />
        </formInfo.Provider>
      </PopupContext.Provider>
    </div>
  );
};

export default Main;
