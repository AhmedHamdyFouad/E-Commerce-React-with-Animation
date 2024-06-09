import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode } from "swiper/modules";

export default function FinichSlideOne() {
  return (
    <>
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
          <span className="coloring"> Latest </span>{" "}
          <span
            className="coloring2"
            style={{ marginLeft: "5px", color: " rgb(165, 97, 42)" }}
          >
            {" "}
            News & Update{" "}
          </span>
        </div>
      </h3>
      <Swiper
        breakpoints={{
          390: {
            slidesPerView: 1,
            spaceBetween: 20,

            // centeredSlides:true
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: -10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: -10,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: -10,
          },
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={100}
        className="swiper-finished"
        freeMode={true}
        modules={[FreeMode]}
      >
        <SwiperSlide>
          <div>
            <div>
              <img
                className="img-finish"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/05-1.jpg"
                alt=""
              />
            </div>
            <div style={{ width: "90%", marginTop: "15px" }}>
              <p style={{ fontWeight: "600" }}>
                Revolutionizing Gaming: The Latest Gaming Consoles and
                Accessories
              </p>
              <span style={{ color: "gray" }}>By Justin | 06 June, 2024</span>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <div>
              <img
                className="img-finish"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/04.jpg"
                alt=""
              />
            </div>
            <div style={{ width: "90%", marginTop: "15px" }}>
              <p style={{ fontWeight: "600" }}>
              Uncovering the Secrets of Photography: Essential Camera Gear for Every Enthusiast

              </p>
              <span style={{ color: "gray" }}>By Justin | 06 June, 2024</span>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <div>
              <img
                className="img-finish"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/02.jpg"
                alt=""
              />
            </div>
            <div style={{ width: "90%", marginTop: "15px" }}>
              <p style={{ fontWeight: "600" }}>
              Enhancing Your Audio Experience: The Best Headphones and Speakers

              </p>
              <span style={{ color: "gray" }}>By Justin | 06 June, 2024</span>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <div>
              <img
                className="img-finish"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/01.jpg"
                alt=""
              />
            </div>
            <div style={{ width: "90%", marginTop: "15px" }}>
              <p style={{ fontWeight: "600" }}>
              The Evolution of Television: Exploring the Latest TV Technologies

              </p>
              <span style={{ color: "gray" }}>By Justin | 06 June, 2024</span>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <div>
              <img
                className="img-finish"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/03/03.jpg"
                alt=""
              />
            </div>
            <div style={{ width: "90%", marginTop: "15px" }}>
              <p style={{ fontWeight: "600" }}>
                Revolutionizing Gaming: The Latest Gaming Consoles and
                Accessories
              </p>
              <span style={{ color: "gray" }}>By Justin | 06 June, 2024</span>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <div>
              <img
                className="img-finish"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/01.jpg"
                alt=""
              />
            </div>
            <div style={{ width: "90%", marginTop: "15px" }}>
              <p style={{ fontWeight: "600" }}>
                Revolutionizing Gaming: The Latest Gaming Consoles and
                Accessories
              </p>
              <span style={{ color: "gray" }}>By Justin | 06 June, 2024</span>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <div>
              <img
                className="img-finish"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/05-1.jpg"
                alt=""
              />
            </div>
            <div style={{ width: "90%", marginTop: "15px" }}>
              <p style={{ fontWeight: "600" }}>
                Revolutionizing Gaming: The Latest Gaming Consoles and
                Accessories
              </p>
              <span style={{ color: "gray" }}>By Justin | 06 June, 2024</span>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <div>
              <img
                className="img-finish"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/04.jpg"
                alt=""
              />
            </div>
            <div style={{ width: "90%", marginTop: "15px" }}>
              <p style={{ fontWeight: "600" }}>
              Uncovering the Secrets of Photography: Essential Camera Gear for Every Enthusiast

              </p>
              <span style={{ color: "gray" }}>By Justin | 06 June, 2024</span>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <div>
              <img
                className="img-finish"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/02.jpg"
                alt=""
              />
            </div>
            <div style={{ width: "90%", marginTop: "15px" }}>
              <p style={{ fontWeight: "600" }}>
              Enhancing Your Audio Experience: The Best Headphones and Speakers

              </p>
              <span style={{ color: "gray" }}>By Justin | 06 June, 2024</span>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <div>
              <img
                className="img-finish"
                src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/01.jpg"
                alt=""
              />
            </div>
            <div style={{ width: "90%", marginTop: "15px" }}>
              <p style={{ fontWeight: "600" }}>
              The Evolution of Television: Exploring the Latest TV Technologies

              </p>
              <span style={{ color: "gray" }}>By Justin | 06 June, 2024</span>
            </div>
          </div>
        </SwiperSlide>{" "}
        
      </Swiper>
    </>
  );
}
