import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import OffCanva from "./offCanva";

const initialStorage = localStorage.getItem("shoopingCart")
  ? JSON.parse(localStorage.getItem("shoopingCart"))
  : [];

const ContextUseContext = createContext({});

const ContextProvider = ({ children }) => {
  
  const [data, setdata] = useState(initialStorage);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("shoopingCart", JSON.stringify(data));
  }, [data]);

  const CartQuantity = data.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };
  const getItems = (id) => {
    return data.find((ele) => ele.id === id)?.quantity || 0;
  };

  const increase = (id) => {
    setdata((currItems) => {
      if (currItems.find((ele) => ele.id === id) == null) {
        return [...data, { id, quantity: 1 }];
      } else {
        return currItems.map((ele) => {
          if (ele.id === id) {
            return { ...ele, quantity: ele.quantity + 1 };
          } else {
            return ele;
          }
        });
      }
    });
  };

  const decrease = (id) => {
    setdata((currItems) => {
      if (currItems.find((ele) => ele.id === id) == null) {
        return currItems.filter((ele) => ele.id !== id);
      } else {
        return currItems.map((ele) => {
          if (ele.id === id) {
            return { ...ele, quantity: ele.quantity - 1 };
          } else {
            return ele;
          }
        });
      }
    });
  };

  const remove = (id) => {
    setdata((currItems) => currItems.filter((ele) => ele.id !== id));
  };




  return (
    <ContextUseContext.Provider
      value={{
        data,
        getItems,
        increase,
        decrease,
        remove,
        openCart,
        closeCart,
        CartQuantity,
      }}
    >
      {children}
      <OffCanva isOpen={isOpen} />
    </ContextUseContext.Provider>
  );
};

export default ContextProvider;

export const UseShooppingCart = () => {
  return useContext(ContextUseContext);
};
