import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./styles.css";
import { FreeMode } from "swiper/modules";

import { Fade } from "react-awesome-reveal";
export default function SliderLast() {
  return (
    <>
      <h3
        style={{
          borderBottom: "1px solid rgb(165, 97, 42)",
          margin: "50px 0 -20px 100px",
          paddingBottom: "10px",
          width: "200px",
        }}
      >
        <div className="app-coloring">
          <span className="coloring"> Related</span>{" "}
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
            spaceBetween: 20,
            // centeredSlides:true
          },
          480: {
            slidesPerView: 1,
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
        modules={[Pagination, FreeMode]}
        freeMode={true}
        spaceBetween={100}
        className="mySwiper2 myswiperclone"
      >
        <div className="responsive">
          <SwiperSlide className="swiper-slide">
            <Fade direction="down">
              {" "}
              <img
                className="img"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/18-211x211.jpg"
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
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/20-211x211.jpg"
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
                  Bose Sound Link Micro Wireless Bluetooth{" "}
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
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Air Buds Bluetooth Earbuds, True Charging{" "}
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
                    $410.00
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
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Samsung Buds2.0 Pro Galaxy MM-R4 NZAWXAR{" "}
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
                    $271.00
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
                  style={{
                    color: "rgb(255, 89, 0)",
                    fontWeight: "bold",
                  }}
                >
                  Apple iPad Air 5th Generation Wi-Fi Cellular{" "}
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
                    $757.00
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
                  Beats Ear Headphones Studio Buds Wireless{" "}
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
                    $350.00
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
                    $723.00
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
                    $272.00
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
    </>
  );
}
