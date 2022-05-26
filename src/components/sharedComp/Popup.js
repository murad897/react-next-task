import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { PopupContext } from "../../context/context";
import { useContext } from "react";

const Popup = () => {
  const { setOpen } = useContext(PopupContext);
  const handleOpen = () => setOpen(false);
  const PopupSubmitEvent = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Box sx={style}>
        <form className="popup-model" onSubmit={PopupSubmitEvent}>
          <div className="popup-model-item">
            <label htmlFor="fimage">Image</label>
            <input type="text" name="fimage" placeholder="HTTP LINK...." />
          </div>
          <div className="popup-model-item">
            <label htmlFor="fname">Name</label>
            <input type="text" name="fname" placeholder="Name...." />
          </div>
          <div className="popup-model-item">
            <label htmlFor="fmpns">MPNS</label>
            <input type="text" name="fmpns" placeholder="Mpns...." />
          </div>
          <div className="popup-model-item">
            <label htmlFor="fproduct">Product</label>
            <input type="text" name="fproduct" placeholder="product...." />
          </div>
          <div className="popup-model-item">
            <label htmlFor="fmanifactuler">Manifactuler</label>
            <input type="text" name="fmanifactuler" placeholder="Manifactuler...." />
          </div>
          <Button className="submit-button" variant="contained" onClick={handleOpen}>
            Submit
          </Button>
          <Button className="close-modal-button" variant="contained" onClick={handleOpen}>
            Close modal
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Popup;
