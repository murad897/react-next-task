import Header from "../header/Header";
import React, { useEffect } from "react";
import Popup from "../sharedComp/Popup";
import { PopupContext } from "../../context/context";
import { formInfo } from "../../context/context";
import { useState } from "react";
import TableComp from "../table/Table";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500",
      name: "fdsfs",
      mpns: "fsdfsd",
      product: "232",
      manifactuler: "fdsfsd",
    },
    {
      image:
        "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500",
      name: "fdsfs54",
      mpns: "fsdfsd54",
      product: "23254",
      manifactuler: "fdsfsd54",
    },
  ]);

  console.log(products);
  return (
    <div className="home-page-container">
      <PopupContext.Provider value={{ open, setOpen }}>
        <formInfo.Provider value={{ products, setProducts }}>
          <Header />
          {open ? <Popup /> : ""}
          <TableComp />
        </formInfo.Provider>
      </PopupContext.Provider>
    </div>
  );
};

export default Main;
