import React, { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Navigation from "./Navigation";
import { PopupContext } from "../../context/context";
import { useContext } from "react";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const { setOpen } = useContext(PopupContext);
  const handleOpen = () => setOpen(true);
  const formSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  return (
    <div className="header-container">
      <div className="header-container-inner">
        {/* left section */}
        <div className="header-container-left-section">
          {/* logo */}
          <div className="header-logo-image">
            <img src="https://uploads-ssl.webflow.com/60e4d26b0e81b6e753fac886/60e4d26b0e81b62be5fac9b8_partsapp-logo.svg" />
          </div>
          {/* search input*/}
          <div className="header-search-input">
            <form onSubmit={formSubmit}>
              <input
                type="search"
                placeholder="Browse prodcuts"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        {/* right section */}
        <div className="header-container-right-section">
          <div className="header-create-button">
            <Button variant="contained" color="success" onClick={handleOpen}>
              Create
            </Button>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
