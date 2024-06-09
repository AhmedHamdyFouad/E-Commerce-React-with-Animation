import React from "react";
import "./styles.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "../HomeOne/styles.css";
// import { Fade } from "react-awesome-reveal";
import img1 from "./images/pngimg.com - battery_PNG12029.png";
import img2 from "./images/pngimg.com - keyboard_PNG101852.png";
import img3 from "./images/pngimg.com - laptop_PNG101774.png";
import img4 from "./images/pngimg.com - printer_PNG101583.png";
import img5 from "./images/pngimg.com - sony_playstation_PNG17549.png";
import img6 from "./images/pngimg.com - tablet_PNG8599.png";
import img7 from "./images/pngimg.com - watches_PNG101456.png";
import img8 from "./images/pngimg.com - watches_PNG9896.png";
import img9 from "./images/pngimg.com - watches_PNG9911.png";
import img10 from "./images/pngimg.com - web_camera_PNG7982.png";
import AfterSliderFour from "../AfterSliderFour/AfterSliderFour";
import { Fade } from "react-awesome-reveal";
const SliderFour = () => {
  return (
    <div className="clone-app">
      <div className="home-app-container slider-four">
        <h3
          className="head-title-four"
          style={{
            borderBottom: "1px solid rgb(165, 97, 42)",

            paddingBottom: "10px",
            width: "250px",
          }}
        >
          <div className="headfour">
            <span className="coloring"> Shop by</span>{" "}
            <span
              className="coloring2"
              style={{ marginLeft: "5px", color: " rgb(165, 97, 42)" }}
            >
              {" "}
              Featured Categories{" "}
            </span>
          </div>
        </h3>{" "}
        <br /> <br />
        <Swiper
          breakpoints={{
            390: {
              slidesPerView: 1,

              // centeredSlides:true
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1400: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
            1600: {
              slidesPerView: 7,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          spaceBetween={100}
          className="mySwiper2 myswipe my-swiper-four"
        >
          <div>
            <div className="responsive res-slider-four">
              <SwiperSlide>
                <div className="app-slide-four">
                  <img width={110} height={100} src={img10} alt="" />
                  <br />
                  <p style={{ fontWeight: "bold" }}>Camera</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="app-slide-four">
                  <img width={110} height={100} src={img3} alt="" />
                  <br />
                  <p style={{ fontWeight: "bold" }}>Labtop</p>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="app-slide-four">
                  <img width={110} height={100} src={img9} alt="" />
                  <br />
                  <p style={{ fontWeight: "bold" }}>Smart Watch</p>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="app-slide-four">
                  <img width={110} height={100} src={img5} alt="" />
                  <br />
                  <p style={{ fontWeight: "bold" }}>Gaming</p>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="app-slide-four">
                  <img width={110} height={100} src={img6} alt="" />
                  <br />
                  <p style={{ fontWeight: "bold" }}>ipad</p>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="app-slide-four">
                  <img width={110} height={100} src={img7} alt="" />
                  <br />
                  <p style={{ fontWeight: "bold" }}>Smart Watch</p>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="app-slide-four">
                  <img width={110} height={100} src={img8} alt="" />
                  <br />
                  <p style={{ fontWeight: "bold" }}>Smart Watch</p>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="app-slide-four">
                  <img width={110} height={100} src={img4} alt="" />
                  <br />
                  <p style={{ fontWeight: "bold" }}>Printer</p>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="app-slide-four">
                  <img width={110} height={100} src={img10} alt="" />
                  <br />
                  <p style={{ fontWeight: "bold" }}>Camera</p>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="app-slide-four">
                  <img width={110} height={100} src={img1} alt="" />
                  <br />
                  <p style={{ fontWeight: "bold" }}>Battery</p>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="app-slide-four">
                  <img width={110} height={100} src={img2} alt="" />
                  <br />
                  <p style={{ fontWeight: "bold" }}>Keyboard</p>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="app-slide-four">
                  <img width={110} height={100} src={img3} alt="" />
                  <br />
                  <p style={{ fontWeight: "bold" }}>Labtop</p>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
        <AfterSliderFour />
        <h3
          className="head-title-four head-title-bottom"
          style={{
            borderBottom: "1px solid rgb(165, 97, 42)",

            paddingBottom: "10px",
            width: "250px",
          }}
        >
          <div className="headfour headbot">
            <span className="coloring"> Shop by</span>{" "}
            <span
              className="coloring2"
              style={{ marginLeft: "5px", color: " rgb(165, 97, 42)" }}
            >
              {" "}
              Computer Accessories{" "}
            </span>
          </div>
        </h3>{" "}
        <br /> <br />
        <div className="imgage-left-slider-right">
          <div>
            {" "}
            <div className="slide-left-four four-image-left computer">
              <img
                className="four-image-left"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/category-banner-01.jpg"
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "50px",
                  color: "#000",
                  letterSpacing: "2px",
                  className: "content-four",
                }}
              >
                <div className="app-image-one">
                  <span
                    style={{
                      color: " rgb(165, 97, 42)",
                      fontWeight: "800",
                      fontSize: "23px",
                    }}
                  >
                    NEW ARRIVALS{" "}
                  </span>{" "}
                  <br />
                  <br />
                  STANDING VINTAGE FANS <br />
                  <span style={{ fontSize: "30px" }}> </span>
                  <span style={{ color: "red", fontWeight: "bold" }}>102$</span>
                  <br />
                  Shop Now{" "}
                  <span
                    style={{
                      backgroundColor: "yellow",
                      padding: "5px",
                      color: "red",
                      borderRadius: "50%",
                      fontWeight: "bold",
                    }}
                  >
                    {">"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Swiper
              breakpoints={{
                390: {
                  slidesPerView: 1,

                  // centeredSlides:true
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1400: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1600: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              spaceBetween={100}
              className="mySwiper2 mySwiperOne"
            >
              <div className="responsive">
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="imgone"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/07_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="content-image-one">
                    <div className="hiddn">
                      <i class="fa-solid fa-heart"></i>
                      <i class="fa-solid fa-eye"></i>
                      <i class="fa-brands fa-shopify"></i>
                    </div>
                    <div className="content-homeone">
                      <div className="content-child gap-2">
                        <div
                          className="content-image-one-child content-image-one-child-one"
                          style={{
                            color: "rgb(255, 89, 0)",
                            fontWeight: "bold",
                          }}
                        >
                          Galaxy Watch5 44mm Bluetooth Smart Watch
                        </div>

                        <Fade direction="up" duration={1000} damping={0.6}>
                          {" "}
                          <div
                            className="price-one-one"
                            style={{
                              color: "rgb(255, 0, 221)",
                              fontWeight: "bold",
                              fontSize: "18px",
                              marginTop: "10px",
                            }}
                          >
                            $224.00
                          </div>
                        </Fade>
                      </div>
                    </div>{" "}
                  </div>
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="imgone"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/08_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child content-image-one-child-one"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Bose Sound Link Micro Wireless Bluetooth{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $414.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/03_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Air Buds Bluetooth Earbuds, True Charging{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $252.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/16_a1-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Samsung Buds2.0 Pro Galaxy MM-R4{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $255.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/15_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Apple iPad Air 5th Generation Wi-Fi{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $868.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/06_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Beats Ear Headphones Studio Buds Wireless{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $471.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/17_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Echo Dot 4th Gen Smart speaker with Alexa{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $300.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/a1-3-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $420.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/06_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $252.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/17_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child content-image-one-child text-center gap-2">
                      <div
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $365.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/a1-3-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child content-image-one-child text-center gap-2">
                      <div
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $258.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/06_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child content-image-one-child text-center gap-2">
                      <div
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $213.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/17_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child content-image-one-child text-center gap-2">
                      <div
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $213.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      {/* ##################################################################################################################### */}

      <div className="clone2">
        {" "}
        <h3
          className="head-title-four head-title-bottom"
          style={{
            borderBottom: "1px solid rgb(165, 97, 42)",

            paddingBottom: "10px",
            width: "250px",
          }}
        >
          <div className="headfour headbot">
            <span className="coloring"> Shop by</span>{" "}
            <span
              className="coloring2"
              style={{ marginLeft: "5px", color: " rgb(165, 97, 42)" }}
            >
              {" "}
              Bluetooth Speaker{" "}
            </span>
          </div>
        </h3>{" "}
        <br /> <br />
        <div className="imgage-left-slider-right">
          <div>
            {" "}
            <div className="slide-left-four four-image-left computer">
              <img
                className="four-image-left"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/category-banner-02.jpg"
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "50px",
                  color: "#000",
                  letterSpacing: "2px",
                  className: "content-four",
                }}
              >
                <div
                  className="app-image-one"
                  style={{
                    color: "rgb(165, 97, 42)",
                    fontWeight: "800",
                    fontSize: "23px",
                  }}
                >
                  LATEST OFFERS <br />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Swiper
              breakpoints={{
                390: {
                  slidesPerView: 1,

                  // centeredSlides:true
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1400: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1600: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              spaceBetween={100}
              className="mySwiper2 mySwiperOne"
            >
              <div className="responsive">
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="imgone"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/03_a1-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="content-image-one">
                    <div className="hiddn">
                      <i class="fa-solid fa-heart"></i>
                      <i class="fa-solid fa-eye"></i>
                      <i class="fa-brands fa-shopify"></i>
                    </div>
                    <div className="content-homeone">
                      <div className="content-child gap-2">
                        <div
                          className="content-image-one-child content-image-one-child-one"
                          style={{
                            color: "rgb(255, 89, 0)",
                            fontWeight: "bold",
                          }}
                        >
                          Galaxy Watch5 44mm Bluetooth Smart Watch
                        </div>

                        <Fade direction="up" duration={1000} damping={0.6}>
                          {" "}
                          <div
                            className="price-one-one"
                            style={{
                              color: "rgb(255, 0, 221)",
                              fontWeight: "bold",
                              fontSize: "18px",
                              marginTop: "10px",
                            }}
                          >
                            $213.00
                          </div>
                        </Fade>
                      </div>
                    </div>{" "}
                  </div>
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="imgone"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/018-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child content-image-one-child-one"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Bose Sound Link Micro Wireless Bluetooth{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $747.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/06_a1-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Air Buds Bluetooth Earbuds, True Charging{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $245.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/a1-3-211x211.jpg" alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Samsung Buds2.0 Pro Galaxy MM-R4{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $582.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/08_a1-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Apple iPad Air 5th Generation Wi-Fi{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $365.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/07_a1-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Beats Ear Headphones Studio Buds Wireless{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $824.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/017-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Echo Dot 4th Gen Smart speaker with Alexa{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $842.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/a1-3-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $352.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/06_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $354.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/17_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child content-image-one-child text-center gap-2">
                      <div
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $868.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/a1-3-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child content-image-one-child text-center gap-2">
                      <div
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $300.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/06_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child content-image-one-child text-center gap-2">
                      <div
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $213.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/17_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child content-image-one-child text-center gap-2">
                      <div
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $213.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      
      */}

      <div className="clone3">
        {" "}
        <h3
          className="head-title-four head-title-bottom"
          style={{
            borderBottom: "1px solid rgb(165, 97, 42)",

            paddingBottom: "10px",
            width: "250px",
          }}
        >
          <div className="headfour headbot">
            <span className="coloring"> Shop by</span>{" "}
            <span
              className="coloring2"
              style={{ marginLeft: "5px", color: " rgb(165, 97, 42)" }}
            >
              {" "}
              Mobile Accessories{" "}
            </span>
          </div>
        </h3>{" "}
        <br /> <br />
        <div className="imgage-left-slider-right">
          <div>
            {" "}
            <div className="slide-left-four four-image-left computer">
              <img
                className="four-image-left"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/category-banner-03.jpg"
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "50px",
                  color: "#000",
                  letterSpacing: "2px",
                  className: "content-four",
                }}
              >
                <div
                  className="app-image-one"
                  style={{
                    color: "rgb(165, 97, 42)",
                    fontWeight: "800",
                    fontSize: "23px",
                  }}
                >
                  LATEST OFFERS <br />
                </div>
                <br /> <span style={{ fontWeight: "700" }}>ON BLUETOOTH</span>
                <br />
                <br /> <span style={{ fontWeight: "700" }}>SPEAKERS</span>
                <br />
                <br />{" "}
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "30px",
                    color: " rgb(255, 0, 208)",
                  }}
                >
                  $99
                </span>
                <br />
              </div>
            </div>
          </div>
          <div>
            <Swiper
              breakpoints={{
                390: {
                  slidesPerView: 1,

                  // centeredSlides:true
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1400: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1600: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              spaceBetween={100}
              className="mySwiper2 mySwiperOne"
            >
              <div className="responsive">
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="imgone"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/39-211x211.jpg"                      alt=""
                    />
                  </Fade>
                  <div className="content-image-one">
                    <div className="hiddn">
                      <i class="fa-solid fa-heart"></i>
                      <i class="fa-solid fa-eye"></i>
                      <i class="fa-brands fa-shopify"></i>
                    </div>
                    <div className="content-homeone">
                      <div className="content-child gap-2">
                        <div
                          className="content-image-one-child content-image-one-child-one"
                          style={{
                            color: "rgb(255, 89, 0)",
                            fontWeight: "bold",
                          }}
                        >
                          Galaxy Watch5 44mm Bluetooth Smart Watch
                        </div>

                        <Fade direction="up" duration={1000} damping={0.6}>
                          {" "}
                          <div
                            className="price-one-one"
                            style={{
                              color: "rgb(255, 0, 221)",
                              fontWeight: "bold",
                              fontSize: "18px",
                              marginTop: "10px",
                            }}
                          >
                            $757.00
                          </div>
                        </Fade>
                      </div>
                    </div>{" "}
                  </div>
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="imgone"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/14_a1-211x211.jpg"                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child content-image-one-child-one"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Bose Sound Link Micro Wireless Bluetooth{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $722.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/15_a1-211x211.jpg"                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Air Buds Bluetooth Earbuds, True Charging{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $747.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/13_a1-211x211.jpg"                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Samsung Buds2.0 Pro Galaxy MM-R4{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $422.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/a1-3-211x211.jpg"                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Apple iPad Air 5th Generation Wi-Fi{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $575.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/a1-211x211.jpg"                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Beats Ear Headphones Studio Buds Wireless{" "}
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $757.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/018-211x211.jpg"                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Echo Dot 4th Gen Smart speaker with Alexa{" "}
                      </div>
                      
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $741.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/a1-3-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $242.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/06_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child text-center gap-2">
                      <div
                        className="content-image-one-child"
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $724.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/17_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child content-image-one-child text-center gap-2">
                      <div
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                      
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $244.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/a1-3-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child content-image-one-child text-center gap-2">
                      <div
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $244.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/06_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child content-image-one-child text-center gap-2">
                      <div
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $213.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-one">
                  <Fade direction="down">
                    {" "}
                    <img
                      className="img"
                      src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/17_a2-211x211.jpg"
                      alt=""
                    />
                  </Fade>
                  <div className="hiddn">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-brands fa-shopify"></i>
                  </div>
                  <div className="content-homeone">
                    <div className="content-child content-image-one-child text-center gap-2">
                      <div
                        style={{
                          color: "rgb(255, 89, 0)",
                          fontWeight: "bold",
                        }}
                      >
                        Galaxy Watch5 44mm Bluetooth Smart Watch
                      </div>
                     
                      <Fade direction="up" duration={1000} damping={0.6}>
                        {" "}
                        <div
                          className="price-one-two"
                          style={{
                            color: "rgb(255, 0, 221)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "10px",
                          }}
                        >
                          $213.00
                        </div>
                      </Fade>
                    </div>
                  </div>{" "}
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btnn btn-one">Add To Cart</button>
                  </Fade>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderFour;
