import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";

import StackComponent from "./stackCom";
import Data from "../Filter/Data";
import { UseShooppingCart } from "./Context";

const OffCanva = ({ isOpen }) => {
  const { data, closeCart } = UseShooppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>Cart</Offcanvas.Header>

      <Offcanvas.Body>
        <Stack gap={3}>
          {data.map((ele) => (
            <StackComponent key={ele.id} {...ele} />
          ))}

          <div
            style={{ display: "flex", fontSize: "30px", fontWeight: "bold" }}
          >
            <div style={{ color: "red", marginRight: "5px" }}>Total</div>

            {data.reduce((total, ele) => {
              const item = Data.find((i) => i.id === ele.id);
              return total + (item?.price || 0) * ele.quantity;
            }, 0)}
            <span style={{ color: "rgb(47, 165, 0)" }}>$</span>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanva;
