import React from "react";
import img1 from "./images/pngimg.com - air_conditioner_PNG45.png";
import img2 from "./images/pngimg.com - laptop_PNG101820.png";
import img3 from "./images/pngimg.com - generator_PNG63.png";
import "./hometwo.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
// import "./styles.css";
import { Fade } from "react-awesome-reveal";
const HomeTwo = () => {
  return (
    <div className="home-app-container">
      <div className="app-home-two">
        <div className="child-home-two">
          <div className="content-home-two-child">
            <p>
              ARRIVALS <br />
              STANDING VINTAGE
            </p>
            <p
              style={{
                fontWeight: "bold",
                color: "rgb(255, 0, 221)",
                fontSize: "1.4rem",
                fontFamily: "Sriracha",
              }}
            >
              UP TO 70% OFF
            </p>
            <p style={{ fontWeight: "bold" }}>
              Shop Now{" "}
              <span
                style={{
                  backgroundColor: "yellow",
                  padding: "3px",
                  borderRadius: "50%",
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                {">"}
              </span>
            </p>
          </div>
          <div>
            <Fade direction="up" duration={2000}>
              <img src={img1} alt="" />
            </Fade>
          </div>
        </div>

        <div className="child-home-two">
          <div className="content-home-two-child">
            <p>
              BIG DEAL FOR <br />
              SMART LOOK
            </p>
            <p
              style={{
                fontWeight: "bold",
                color: "rgb(255, 0, 221)",
                fontSize: "1.4rem",
                fontFamily: "Sriracha",
              }}
            >
              MACBOOK COVER
            </p>
            <p style={{ fontWeight: "bold" }}>
              Shop Now{" "}
              <span
                style={{
                  backgroundColor: "yellow",
                  padding: "3px",
                  borderRadius: "50%",
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                {">"}
              </span>
            </p>{" "}
          </div>
          <div>
            <Fade direction="down" duration={2000}>
              <img src={img2} alt="" />
            </Fade>
          </div>
        </div>

        <div className="child-home-two dispaly">
          <div className="content-home-two-child">
            <p>
              BIG DISCOUNT <br />
              ON VR HEADSET{" "}
            </p>
            <p
              style={{
                fontWeight: "bold",
                color: "rgb(255, 0, 221)",
                fontSize: "1.4rem",
                fontFamily: "Sriracha",
              }}
            >
              UP TO 70% OFF
            </p>

            <p style={{ fontWeight: "bold" }}>
              Shop Now{" "}
              <span
                style={{
                  backgroundColor: "yellow",
                  padding: "3px",
                  borderRadius: "50%",
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                {">"}
              </span>
            </p>
          </div>
          <div>
            <Fade direction="up" duration={2000}>
              {" "}
              <img className="img-absolute" src={img3} alt="" />
            </Fade>
          </div>
        </div>
      </div>
      <h3
        style={{
          borderBottom: "1px solid rgb(165, 97, 42)",
          margin: "50px 0 -20px 100px",
          paddingBottom: "10px",
          width: "200px",
        }}
      >
        <div className="app-coloring">
          <span className="coloring"> New</span>{" "}
          <span
            className="coloring2"
            style={{ marginLeft: "5px", color: " rgb(165, 97, 42)" }}
          >
            {" "}
            Products
          </span>
        </div>
      </h3>{" "}
      <br />
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
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1600: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        spaceBetween={100}
        className="mySwiper2"
      >
        <div className="responsive">
          <SwiperSlide className="swiper-slide">
            <Fade direction="down">
              {" "}
              <img
                className="img"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/50-211x211.jpg"
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
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Wifi Camera Memory Card 1080p Camera CCTV{" "}
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <Fade direction="up" duration={1000} damping={0.6}>
                  {" "}
                  <div
                    style={{
                      color: "rgb(255, 0, 221)",
                      fontWeight: "bold",
                      fontSize: "18px",
                      marginTop: "10px",
                    }}
                  >
                    $222.00
                  </div>
                </Fade>
              </div>
            </div>{" "}
            <Fade direction="up" duration={1000} damping={0.6}>
              <button className="btnn">Add To Cart</button>
            </Fade>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Fade direction="down">
              {" "}
              <img
                className="img"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/020-211x211.jpg"
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
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Cam Spherical Digital Camera Clicking 360{" "}
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <Fade direction="up" duration={1000} damping={0.6}>
                  {" "}
                  <div
                    style={{
                      color: "rgb(255, 0, 221)",
                      fontWeight: "bold",
                      fontSize: "18px",
                      marginTop: "10px",
                    }}
                  >
                    $472.00
                  </div>
                </Fade>
              </div>
            </div>{" "}
            <Fade direction="up" duration={1000} damping={0.6}>
              <button className="btnn">Add To Cart</button>
            </Fade>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Fade direction="down">
              {" "}
              <img
                className="img"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/028-211x211.jpg"
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
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Laview home security camera HD 1080p{" "}
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <Fade direction="up" duration={1000} damping={0.6}>
                  {" "}
                  <div
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
              <button className="btnn">Add To Cart</button>
            </Fade>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Fade direction="down">
              {" "}
              <img
                className="img"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/022-211x211.jpg"
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
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Woo Amazon echo plus 3rd generation smart speaker{" "}
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <Fade direction="up" duration={1000} damping={0.6}>
                  {" "}
                  <div
                    style={{
                      color: "rgb(255, 0, 221)",
                      fontWeight: "bold",
                      fontSize: "18px",
                      marginTop: "10px",
                    }}
                  >
                    $541.00
                  </div>
                </Fade>
              </div>
            </div>{" "}
            <Fade direction="up" duration={1000} damping={0.6}>
              <button className="btnn">Add To Cart</button>
            </Fade>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <Fade direction="down">
              {" "}
              <img
                className="img"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/10_a1-211x211.jpg"
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
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Over Ear Stereo Wireless Headset 40H Playtime{" "}
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <Fade direction="up" duration={1000} damping={0.6}>
                  {" "}
                  <div
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
              <button className="btnn">Add To Cart</button>
            </Fade>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Fade direction="down">
              {" "}
              <img
                className="img"
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
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Basics USB Plug-n-Play Computer Speakers for PC{" "}
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <Fade direction="up" duration={1000} damping={0.6}>
                  {" "}
                  <div
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
              <button className="btnn">Add To Cart</button>
            </Fade>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
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
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Echo Dot 4th Gen Smart speaker with Alexa{" "}
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <Fade direction="up" duration={1000} damping={0.6}>
                  {" "}
                  <div
                    style={{
                      color: "rgb(255, 0, 221)",
                      fontWeight: "bold",
                      fontSize: "18px",
                      marginTop: "10px",
                    }}
                  >
                    $424.00
                  </div>
                </Fade>
              </div>
            </div>{" "}
            <Fade direction="up" duration={1000} damping={0.6}>
              <button className="btnn">Add To Cart</button>
            </Fade>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Fade direction="down">
              <img
                className="img"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/14-211x211.jpg"
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
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Galaxy Watch5 44mm Bluetooth Smart Watch
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <Fade direction="up" duration={1000} damping={0.6}>
                  {" "}
                  <div
                    style={{
                      color: "rgb(255, 0, 221)",
                      fontWeight: "bold",
                      fontSize: "18px",
                      marginTop: "10px",
                    }}
                  >
                    $699.00
                  </div>
                </Fade>
              </div>
            </div>{" "}
            <Fade direction="up" duration={1000} damping={0.6}>
              <button className="btnn">Add To Cart</button>
            </Fade>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <Fade direction="down">
              {" "}
              <img
                className="img"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/11_a1-211x211.jpg"
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
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Galaxy Watch5 44mm Bluetooth Smart Watch
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <Fade direction="up" duration={1000} damping={0.6}>
                  {" "}
                  <div
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
              <button className="btnn">Add To Cart</button>
            </Fade>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Fade direction="down">
              {" "}
              <img
                className="img"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/13_a2-211x211.jpg"
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
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Galaxy Watch5 44mm Bluetooth Smart Watch
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <Fade direction="up" duration={1000} damping={0.6}>
                  {" "}
                  <div
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
              <button className="btnn">Add To Cart</button>
            </Fade>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
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
              <div className="content-child text-center gap-2">
                <div
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Galaxy Watch5 44mm Bluetooth Smart Watch
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <Fade direction="up" duration={1000} damping={0.6}>
                  {" "}
                  <div
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
              <button className="btnn">Add To Cart</button>
            </Fade>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
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
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Galaxy Watch5 44mm Bluetooth Smart Watch
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <Fade direction="up" duration={1000} damping={0.6}>
                  {" "}
                  <div
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
              <button className="btnn">Add To Cart</button>
            </Fade>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
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
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Galaxy Watch5 44mm Bluetooth Smart Watch
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <Fade direction="up" duration={1000} damping={0.6}>
                  {" "}
                  <div
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
              <button className="btnn">Add To Cart</button>
            </Fade>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default HomeTwo;
