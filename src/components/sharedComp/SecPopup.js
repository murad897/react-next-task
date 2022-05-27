import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

const SecPopup = () => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    mpns: "",
    product: "",
    manifactuler: "",
  });

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
        <form className="popup-model">
          <div className="popup-model-item">
            <label htmlFor="image">Image</label>
            <div className="input-style">
              <input type="text" name="image" placeholder="HTTP LINK...." />
            </div>
          </div>
          <div className="popup-model-item">
            <label htmlFor="name">Name</label>
            <div className="input-style">
              <input type="text" name="name" placeholder="Name...." />
            </div>
          </div>
          <div className="popup-model-item">
            <label htmlFor="mpns">MPNS</label>
            <div className="input-style">
              <input type="text" name="mpns" placeholder="Mpns...." />
            </div>
          </div>
          <div className="popup-model-item">
            <label htmlFor="product">Product</label>
            <div className="input-style">
              <input type="text" name="product" placeholder="product...." />
            </div>
          </div>
          <div className="popup-model-item">
            <label htmlFor="manifactuler">Manifactuler</label>
            <div className="input-style">
              <input
                type="text"
                name="manifactuler"
                placeholder="Manifactuler...."
              />
            </div>
          </div>

          <Button className="submit-button" variant="contained">
            Submit
          </Button>
          <Button className="close-modal-button" variant="contained">
            Close modal
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default SecPopup;
