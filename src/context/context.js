import { createContext } from "react";

export const PopupContext = createContext({
  Isopen: false,
  setOpen: (value) => {},
});

export const formInfo = createContext({
  products: [],
  setProducts: (product) => {},
});
