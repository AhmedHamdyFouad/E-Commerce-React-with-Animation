import React from "react";
import Data from "./Data";
import "./shop.css";
import BasicExample from "./Card";

const Store = ({ data }) => {
  const menuItems = [...new Set(Data.map((ele) => ele.category))];
  const menuColor = [...new Set(Data.map((ele) => ele.color))];
  const menuSize = [...new Set(Data.map((ele) => ele.size))];

  return (
    <div className="app-filter-card">
      {data.map((ele) => {
        return (
          <div className="child-filter-card">
            <BasicExample
              menuColor={menuColor}
              menuItems={menuItems}
              menuSize={menuSize}
              key={ele.id}
              {...ele}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Store;
