import React from "react";
import Data from "../Filter/Data";
import { Button, Stack } from "react-bootstrap";
import { UseShooppingCart } from "./Context";

const StackComponent = ({ id, quantity }) => {
  const { remove } = UseShooppingCart();

  const item = Data.find((ele) => ele.id === id);

  if (item == null) {
    return null;
  }

  return (
    <Stack direction="horizontal" className="d-flex align-items-center" gap={2}>
      <img
        src={item.image}
        alt="efev"
        style={{ width: "80px", height: "75px" }}
      />

      <div className="me-auto">
        <div>
          {item.title}{" "}
          {quantity > 1 && <span className="text-muted">x {quantity}</span>}
        </div>

        <div className="text-muted" style={{ fontSize: "20px" }}>
          {item.price}
        </div>

        <div>{item.price * quantity}</div>
      </div>

      <Button variant="outline-danger" onClick={() => remove(id)}>
        x
      </Button>
      <br />
    </Stack>
  );
};

export default StackComponent;
