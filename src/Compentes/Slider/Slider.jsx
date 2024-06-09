import React from "react";
// Import Swiper React components
// import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./images/pngimg.com - heater_PNG35.png";
import img2 from "./images/pngimg.com - iphone_14_PNG40.png";
import img3 from "./images/pngimg.com - watches_PNG101453.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Fade } from "react-awesome-reveal";
// import ScrollReveal from "scrollreveal";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SliderHome() {


  return (
    <div style={{backgroundColor:"rgba(255, 123, 0, 0.075)"}}>
      <Swiper
        style={{
          width: "100%",
          backgroundColor: "rgba(255, 123, 0, 0.075)",
          flexGrow: "1",
        }}
        spaceBetween={30}
        speed={3500}
        autoplay={{
          delay: 5000,

          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
         <SwiperSlide direction="horizontal">
          <div className="d-flex justify-content-between align-items-center sliedd">
            <div className="left">
              <Fade cascade>
                <Fade
                  className="head"
                  style={{ color: "blue" }}
                  direction="down"
                >
                  New and Imported From Us !!
                </Fade>
                <Fade cascade direction="top">
                  {" "}
                  <Fade cascade direction="top">
                    <div className="content"> HEATER Energy </div>{" "}
                    <div className="content"> With New </div>{" "}
                    <div className="content">ACTIVITY TRACKER</div>
                    <div
                      className="price"
                      style={{ color: "rgb(255, 0, 149)" }}
                    >
                      New Price : $399
                    </div>
                    <div
                      className="price"
                      style={{ color: "rgb(255, 0, 149)" }}
                    >
                      <del style={{ color: "red" }}>Old Price : $499</del>
                    </div>
                  </Fade>
                </Fade>
                <Fade
                  style={{ marginTop: "15px" }}
                  direction="top"
                  delay={3500}
                >
                  <button className="colorbutton">
                     Shop Now
                  </button>
                </Fade>
              </Fade>
            </div>
            <div>
              <Fade direction="down" delay={1500}>
                <img
                  className="imgcon"
                  src={img1}
                  style={{ height: "45vh", width: "20vw" }}
                  alt=""
                />
              </Fade>
            </div>
          </div>
        </SwiperSlide> 
        <SwiperSlide direction="horizontal">
          <div className="d-flex justify-content-between align-items-center sliedd">
            <div className="left">
              <Fade>
                <Fade
                  className="head"
                  style={{ color: "blue" }}
                  direction="down"
                >
                  
                </Fade>
                <Fade>
                  {" "}
                  <Fade>
                    <div className="content">
                      {" "}
                      <Fade>BUY FROM SHOP</Fade>
                    </div>{" "}
                    <div className="content">SUMSUNG GALAXY</div>{" "}
                    <div className="content">WITH NEW</div>{" "}
                    <div className="content">ACTIVITY TRACKER</div>
                    <div
                      className="price"
                      style={{ color: "rgb(255, 0, 149)" }}
                    >
                      New Price : $399
                    </div>
                    <div
                      className="price"
                      style={{ color: "rgb(255, 0, 149)" }}
                    >
                      <del style={{ color: "red" }}>Old Price : $499</del>
                    </div>
                  </Fade>
                </Fade>
                <Fade
                  style={{ marginTop: "15px" }}
                  direction="left"
                  duration={1000}
                  delay={3500}
                >
                   <button className="colorbutton">
                     Shop Now
                  </button>
                </Fade>
              </Fade>
            </div>
            <div>
              <Fade direction="down" delay={1500}>
                <img
                  className="imgcon"
                  src={img2}
                  style={{ height: "45vh", width: "20vw" }}
                  alt=""
                />
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        
       <SwiperSlide direction="horizontal">
          <div className="d-flex justify-content-between align-items-center sliedd">
            <div className="left">
              <Fade cascade>
                <Fade
                  className="head"
                  style={{ color: "blue" }}
                  direction="down"
                >
                  LImited Time Offer !!
                </Fade>
                <Fade cascade direction="top">
                  {" "}
                  <Fade cascade direction="top">
                    <div className="content"> BUY SMART WATCH</div>{" "}
                    <div className="content">WITH NEW</div>{" "}
                    <div className="content">ACTIVITY TRACKER</div>
                    <div
                      className="price"
                      style={{ color: "rgb(255, 0, 149)" }}
                    >
                      New Price : $399
                    </div>
                    <div
                      className="price"
                      style={{ color: "rgb(255, 0, 149)" }}
                    >
                      <del style={{ color: "red" }}>Old Price : $499</del>
                    </div>
                  </Fade>
                </Fade>
                <Fade
                  style={{ marginTop: "15px" }}
                  direction="top"
                  delay={3500}
                >
                 <button className="colorbutton">
                     Shop Now
                  </button>
                  
                </Fade>
              </Fade>
            </div>
            <div>
              <Fade direction="down" delay={1500}>
                <img
                  className="imgcon"
                  src={img3}
                  style={{ height: "45vh", width: "20vw" }}
                  alt=""
                />
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
