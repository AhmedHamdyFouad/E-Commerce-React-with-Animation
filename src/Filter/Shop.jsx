import React, { useState } from "react";
import HeaderImg from "../Compentes/HeaderImg/HeaderImg";
import Header from "../Compentes/Hedaer/Header";
import "./shop.css";
import { Link } from "react-router-dom";
import Data from "./Data";

// import BasicExample from "./Card";
import Footer from "../Compentes/Footer/Footer";
// import { Button } from "react-bootstrap";
import Store from "./Store";
const Shop = () => {
  const [data, setData] = useState(Data);
  const menuItems = [...new Set(Data.map((ele) => ele.category))];
  const menuColor = [...new Set(Data.map((ele) => ele.color))];
  const menuSize = [...new Set(Data.map((ele) => ele.size))];

  const handleFilter = (cat) => {
    const newData = Data.filter((item) => item.category === cat);
    setData(newData);
  };
  const handleFilterColor = (cat) => {
    const newData = Data.filter((item) => item.color === cat);
    setData(newData);
  };
  const handleFilterSize = (cat) => {
    const newData = Data.filter((item) => item.size === cat);
    setData(newData);
  };
  const AllData = () => {
    setData(Data);
  };

  return (
    <div className="app-filter-app" style={{ overflowX: "hidden" }}>
      <HeaderImg />
      <Header />
      <div>
        <div className="title-shop">
          <p style={{ paddingTop: "20px", paddingLeft: "150px" }}>
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "700",
                color: "rgb(255, 0, 208)",
              }}
              to="/"
            >
              <span> Home</span>
            </Link>{" "}
            / Shop
          </p>
          <h4
            style={{
              paddingLeft: "150px",
              fontFamily: "cursive",
              color: " rgb(255, 153, 0)",
              fontWeight: "700",
            }}
          >
            Shop
          </h4>
        </div>
      </div>

      {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
      <div className="d-flex">
        <div className="left-filter-side">
          <h6
            style={{
              paddingTop: "20px",
              margin: "auto",
              width: "90%",
              fontWeight: "bold",
              color: "red",
            }}
          >
            Filter By Categories
          </h6>
          <label
            onClick={() => AllData()}
            htmlFor={"all"}
            style={{
              paddingLeft: "16px",
              paddingTop: "8px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              id={"all"}
              className="inp-check"
              style={{ marginRight: "3px", cursor: "pointer" }}
            />
            <span>All</span>
          </label>
          <form action="" style={{ display: "flex", flexDirection: "column" }}>
            {menuItems.map((ele) => (
              <label
                htmlFor={ele}
                style={{
                  paddingLeft: "16px",
                  paddingTop: "8px",
                  cursor: "pointer",
                }}
              >
                <input
                  onClick={() => handleFilter(ele)}
                  type="checkbox"
                  id={ele}
                  className="inp-check"
                  style={{ marginRight: "3px", cursor: "pointer" }}
                />
                <span>{ele}</span>
              </label>
            ))}
          </form>
          {/* #################################################  COLOR */}
          <div style={{ marginTop: "30px" }}>
            <h6
              style={{
                paddingTop: "30px",
                paddingBottom: "10px",
                margin: "auto",
                width: "90%",
                fontWeight: "bold",
                color: "red",
              }}
            >
              Filter By Color
            </h6>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {menuColor.map((ele) => (
                <div
                  style={{
                    display: "flex",
                    margin: "8px",
                    flexDirection: "row",
                  }}
                >
                  <div
                    onClick={() => handleFilterColor(ele)}
                    style={{
                      width: "27px",
                      height: "27px",
                      borderRadius: "50%",
                      backgroundColor: ele,
                      display: "flex",
                      cursor: "pointer",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* #################################################  SIZE */}

          <div style={{ marginTop: "30px" }}>
            <h6
              style={{
                paddingTop: "-40px",
                margin: "auto",
                width: "90%",
                fontWeight: "bold",
                color: "red",
              }}
            >
              Filter By Size
            </h6>
            <form
              action=""
              style={{ display: "flex", flexDirection: "column" }}
            >
              {menuSize.map((ele) => (
                <label
                  onClick={() => handleFilterSize(ele)}
                  htmlFor={ele}
                  style={{
                    paddingLeft: "16px",
                    paddingTop: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    id={ele}
                    name="men"
                    value="men"
                    style={{ marginRight: "3px" }}
                  />
                  <span>{ele}</span>
                </label>
              ))}
            </form>
          </div>
          <img
            loading="lazy"
            style={{
              width: "250px",
              height: "300px",
              marginTop: "50px",
              borderRadius: "5px",
              marginBottom: "30px",
            }}
            src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP01/wp-content/uploads/2023/06/left-banner-01-1.jpg"
            alt=""
          />
        </div>

        <div className="right-filter-side" style={{ marginTop: "50px" }}>
          <div className="header-right-filter-side">
            <div>Showing 1 – 24 of {Data.length} results</div>
            <div style={{ display: "flex" }}>
              <i
                class="fa-solid fa-bars"
                style={{
                  paddingRight: "10px",
                  fontSize: "25px",
                  color: "rgb(165, 97, 42)",
                  cursor: "pointer",
                  fontWeight: "900",
                }}
              ></i>
              <i
                class="fa-solid fa-table-columns"
                style={{
                  paddingRight: "10px",
                  fontSize: "25px",
                  color: " rgb(165, 97, 42)",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>

          <Store data={data} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
