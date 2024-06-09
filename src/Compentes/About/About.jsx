import React from "react";

import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";
import HeaderImg from "../HeaderImg/HeaderImg";
import Header from "../Hedaer/Header";

import "./about.css";

import img1 from "./images/Screenshot 2024-06-08 095638.png";
import img2 from "./images/Screenshot 2024-06-08 095657.png";
import img3 from "./images/Screenshot 2024-06-08 101121.png";
const About = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
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
            About Us
          </h4>
        </div>
      </div>
      <div className="hidden-about d-flex m-auto justify-content-center align-items-center lg-hidden">
        <img style={{ width: "45vw" }} src={img2} alt="" />
        <img style={{ width: "45vw" }} src={img1} alt="" />
      </div>
      <div className="d-flex justify-content-center">
        <img style={{ width: "90vw", margin: "auto" }} src={img3} alt="" />{" "}
      </div>
      <Footer />
    </div>
  );
};

export default About;
