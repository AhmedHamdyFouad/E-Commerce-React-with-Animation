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

export default function FinichSliderTwo() {
  return (
    <>
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
            slidesPerView: 8,
            spaceBetween: -10,
          },
          1400: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
          1600: {
            slidesPerView: 8,
            spaceBetween: -10,
          },
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={50}
        className="lastfinished container"
        freeMode={true}
        modules={[FreeMode]}
      >
        <SwiperSlide>
          <div>
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/01.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/02.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/03.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/04.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/05.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/06.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "} <SwiperSlide>
          <div>
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/01.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/02.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/03.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/04.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/05.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <img
              src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/06.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "}
       
      </Swiper>

     
    </>
  );
}
