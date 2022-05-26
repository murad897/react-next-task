import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { PopupContext } from "../../context/context";
import { useContext } from "react";
import { formInfo } from "../../context/context";

const Popup = () => {
  const { setProducts } = useContext(formInfo);
  const { setOpen } = useContext(PopupContext);
  const handleOpen = () => setOpen(false);
  const handleProduct = () => setProducts((prevState) => [...prevState, formData]);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    mpns: "",
    product: "",
    manifactuler: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  // const handleProduct = () => setProducts((prevState) => [...prevState, formData]);
  const PopupSubmitEvent = (e) => {
    e.preventDefault();
    setProducts(true);
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
  useEffect(() => {
    console.log(formData);
  });
  return (
    <div>
      <Box sx={style}>
        <form className="popup-model" onSubmit={PopupSubmitEvent}>
          <div className="popup-model-item">
            <label htmlFor="image">Image</label>
            <input
              value={formData.image}
              type="text"
              name="image"
              placeholder="HTTP LINK...."
              onChange={handleChange}
            />
          </div>
          <div className="popup-model-item">
            <label htmlFor="name">Name</label>
            <input
              value={formData.name}
              type="text"
              name="name"
              placeholder="Name...."
              onChange={handleChange}
            />
          </div>
          <div className="popup-model-item">
            <label htmlFor="mpns">MPNS</label>
            <input
              value={formData.mpns}
              type="text"
              name="mpns"
              placeholder="Mpns...."
              onChange={handleChange}
            />
          </div>
          <div className="popup-model-item">
            <label htmlFor="product">Product</label>
            <input
              value={formData.product}
              type="text"
              name="product"
              placeholder="product...."
              onChange={handleChange}
            />
          </div>
          <div className="popup-model-item">
            <label htmlFor="manifactuler">Manifactuler</label>
            <input
              value={formData.manifactuler}
              type="text"
              name="manifactuler"
              placeholder="Manifactuler...."
              onChange={handleChange}
            />
          </div>
          <Button
            className="submit-button"
            variant="contained"
            onClick={() => {
              handleProduct(), handleOpen();
            }}
          >
            Submit
          </Button>
          <Button
            className="close-modal-button"
            variant="contained"
            onClick={() => {
              handleOpen();
            }}
          >
            Close modal
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Popup;
