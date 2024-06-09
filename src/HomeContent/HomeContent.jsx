import React from "react";
import "./homecontent.css";
import img1 from "./images/pngimg.com - flashlight_PNG102055.png";
import img2 from "./images/pngimg.com - headphones_PNG101966.png";
import img3 from "./images/pngimg.com - video_camera_PNG7895.png";
import img4 from "./images/pngimg.com - wireless_speaker_PNG22.png";
import { Button } from "react-bootstrap";
const HomeContent = () => {
  return (
    <div>
      <div className="row headerContent">
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-between cont">
          <div>
            <div style={{ fontWeight: "400" }}>BIG DEAL</div>
            <div style={{ fontWeight: "bold" }}>AMAZON ECHO DOT</div>
            <div
              style={{
                fontWeight: "bold",
                color: "red",
                fontFamily: "Sriracha",
              }}
            >
              Bluetooth Speaker
            </div>
            <Button className="btn-shop" variant="warning">
              Shop Now
            </Button>
          </div>
          <div>
            <img className="imgs-top" src={img1} alt="" />
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-between cont">
          <div>
            <div style={{ fontWeight: "400" }}>BIG DEAL</div>
            <div style={{ fontWeight: "bold" }}>AMAZON ECHO DOT</div>
            <div
              style={{
                fontWeight: "bold",
                color: "red",
                fontFamily: "Sriracha",
              }}
            >
              Bluetooth Speaker
            </div>
            <Button className="btn-shop" variant="warning">
              Shop Now
            </Button>
          </div>
          <div>
            <img className="imgs-top" src={img2} alt="" />
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-between cont">
          <div>
            <div style={{ fontWeight: "400" }}>BIG DEAL</div>
            <div style={{ fontWeight: "bold" }}>AMAZON ECHO DOT</div>
            <div
              style={{
                fontWeight: "bold",
                color: "red",
                fontFamily: "Sriracha",
              }}
            >
              Bluetooth Speaker
            </div>
            <Button className="btn-shop" variant="warning">
              Shop Now
            </Button>
          </div>
          <div>
            <img className="imgs-top" src={img3} alt="" />
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-between cont">
          <div>
            <div style={{ fontWeight: "400" }}>BIG DEAL</div>
            <div style={{ fontWeight: "bold" }}>AMAZON ECHO DOT</div>
            <div
              style={{
                fontWeight: "bold",
                color: "red",
                fontFamily: "Sriracha",
              }}
            >
              Bluetooth Speaker
            </div>
            <Button className="btn-shop" variant="warning">
              Shop Now
            </Button>
          </div>
          <div>
            <img className="imgs-top" src={img4} alt="" />
          </div>
        </div>
      </div>{" "}
      <div className="app-all">
        <div className="home-app-app">
          <div className="home-content-child">
            <i
              style={{ color: "rgb(255, 202, 44)", fontSize: "35px" }}
              class="fa-solid fa-truck"
            ></i>
            <div>
              <h6>Easy Free Delivery</h6>
              <p style={{ color: "rgb(255, 0, 191)" }}>Order On $100*</p>
            </div>
          </div>

          <div className="home-content-child">
            <i
              style={{ color: "rgb(255, 202, 44)", fontSize: "35px" }}
              class="fa-solid fa-ticket"
            ></i>
            <div>
              <h6>Premium Warranty</h6>
              <p style={{ color: "rgb(255, 0, 191)" }}>Up to 2 Years</p>
            </div>
          </div>

          <div className="home-content-child">
            <i
              style={{ color: "rgb(255, 202, 44)", fontSize: "35px" }}
              class="fa-solid fa-handshake"
            ></i>
            <div>
              <h6>Easy Free Return</h6>
              <p style={{ color: "rgb(255, 0, 191)" }}>365 Days Return</p>
            </div>
          </div>

          <div className="home-content-child">
            <i
              style={{ color: "rgb(255, 202, 44)", fontSize: "35px" }}
              class="fa-solid fa-music"
            ></i>
            <div>
              <h6>24*7 Online Support</h6>
              <p style={{ color: "rgb(255, 0, 191)" }}>Premium Service</p>
            </div>
          </div>

          <div className="home-content-child">
            <i
              style={{ color: "rgb(255, 202, 44)", fontSize: "35px" }}
              class="fa-solid fa-crown"
            ></i>
            <div>
              <h6>Best Special Gifts</h6>
              <p style={{ color: "rgb(255, 0, 191)" }}>First Order</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
