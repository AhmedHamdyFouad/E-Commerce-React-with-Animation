import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./sliderEight.css";

// import required modules
import { FreeMode } from "swiper/modules";

export default function SliderEight() {
  return (
    <div className="swiperApp-sliderEight">
      <div className="app-app-eight">
        <h3
          className="head-title-four head-title-eight "
          style={{
            borderBottom: "1px solid rgb(165, 97, 42)",
            paddingTop: "20px",
            paddingBottom: "10px",
            marginBottom: "30px",
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
        <Swiper
          breakpoints={{
            390: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 100,
            },
          }}
          freeMode={true}
          modules={[FreeMode]}
        >
          <SwiperSlide>
            <div className="app-slides-eight">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                asperiores laboriosam fugit molestiae
              </div>
              <div className="app-img-eight">
                <img
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/client_05.jpg"
                  alt=""
                />
                <div className="app-name-eight" style={{ rowGap: "-10px" }}>
                  <p
                    style={{
                      marginBottom: "3px",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Allie Grater
                  </p>
                  <p style={{ fontSize: "12px" }}>Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="app-slides-eight">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                asperiores laboriosam fugit molestiae
              </div>
              <div className="app-img-eight">
                <img
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/client_02.jpg"
                  alt=""
                />
                <div className="app-name-eight" style={{ rowGap: "-10px" }}>
                  <p
                    style={{
                      marginBottom: "3px",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Hohn Doe
                  </p>
                  <p style={{ fontSize: "12px" }}>Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="app-slides-eight">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                asperiores laboriosam fugit molestiae
              </div>
              <div className="app-img-eight">
                <img
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/client_01.jpg"
                  alt=""
                />
                <div className="app-name-eight" style={{ rowGap: "-10px" }}>
                  <p
                    style={{
                      marginBottom: "3px",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Rose Bush
                  </p>
                  <p style={{ fontSize: "12px" }}>Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="app-slides-eight">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                asperiores laboriosam fugit molestiae
              </div>
              <div className="app-img-eight">
                <img
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/client_03.jpg"
                  alt=""
                />
                <div className="app-name-eight" style={{ rowGap: "-10px" }}>
                  <p
                    style={{
                      marginBottom: "3px",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Percy Kewsh
                  </p>
                  <p style={{ fontSize: "12px" }}>Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="app-slides-eight">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                asperiores laboriosam fugit molestiae
              </div>
              <div className="app-img-eight">
                <img
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/client_04.jpg"
                  alt=""
                />
                <div className="app-name-eight" style={{ rowGap: "-10px" }}>
                  <p
                    style={{
                      marginBottom: "3px",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Fay Daway
                  </p>
                  <p style={{ fontSize: "12px" }}>Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="app-slides-eight">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                asperiores laboriosam fugit molestiae
              </div>
              <div className="app-img-eight">
                <img
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/client_05.jpg"
                  alt=""
                />
                <div className="app-name-eight" style={{ rowGap: "-10px" }}>
                  <p
                    style={{
                      marginBottom: "3px",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Allie Grater
                  </p>
                  <p style={{ fontSize: "12px" }}>Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="app-slides-eight">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                asperiores laboriosam fugit molestiae
              </div>
              <div className="app-img-eight">
                <img
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/client_02.jpg"
                  alt=""
                />
                <div className="app-name-eight" style={{ rowGap: "-10px" }}>
                  <p
                    style={{
                      marginBottom: "3px",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Allie Grater
                  </p>
                  <p style={{ fontSize: "12px" }}>Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="app-slides-eight">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                asperiores laboriosam fugit molestiae
              </div>
              <div className="app-img-eight">
                <img
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/client_02.jpg"
                  alt=""
                />
                <div className="app-name-eight" style={{ rowGap: "-10px" }}>
                  <p
                    style={{
                      marginBottom: "3px",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Allie Grater
                  </p>
                  <p style={{ fontSize: "12px" }}>Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="app-slides-eight">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                asperiores laboriosam fugit molestiae
              </div>
              <div className="app-img-eight">
                <img
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/client_02.jpg"
                  alt=""
                />
                <div className="app-name-eight" style={{ rowGap: "-10px" }}>
                  <p
                    style={{
                      marginBottom: "3px",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Allie Grater
                  </p>
                  <p style={{ fontSize: "12px" }}>Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="app-slides-eight">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                asperiores laboriosam fugit molestiae
              </div>
              <div className="app-img-eight">
                <img
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/client_02.jpg"
                  alt=""
                />
                <div className="app-name-eight" style={{ rowGap: "-10px" }}>
                  <p
                    style={{
                      marginBottom: "3px",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Allie Grater
                  </p>
                  <p style={{ fontSize: "12px" }}>Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
