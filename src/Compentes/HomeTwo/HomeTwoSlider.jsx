import React, { useState, useEffect } from "react";

import "./hometwo.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "../HomeOne/styles.css";
import { Fade } from "react-awesome-reveal";
const HomeTwo = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="home-app-container">
      <h3
        style={{
          borderBottom: "1px solid rgb(165, 97, 42)",
          margin: "50px 0 -20px 100px",
          paddingBottom: "10px",
          width: "200px",
        }}
      >
        <div className=" headtwo">
          <span className="coloring"> Deals</span>{" "}
          <span
            className="coloring2"
            style={{ marginLeft: "5px", color: " rgb(165, 97, 42)" }}
          >
            {" "}
            of the Week
          </span>
        </div>
      </h3>{" "}
      <br />
      <Swiper
        breakpoints={{
          390: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        spaceBetween={100}
        className="mySwiper2 myswipe"
      >
        <div>
          <div className="responsive">
            <SwiperSlide>
              <div className="child-slide-three">
                <div>
                  <div className="num">-14%</div>

                  <img
                    width={200}
                    src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/10_a1.jpg"
                    alt=""
                  />
                </div>
                <div className="content-slider-three">
                  <p
                    className="name-slider-cart"
                    style={{ fontWeight: "bold" }}
                  >
                    Over Ear Stereo Wireless Headset 40H Playtime
                  </p>
                  <div
                    className="d-flex justify-content-flex-start align-items-flex-start gap-1"
                    style={{ marginLeft: "5px" }}
                  >
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <div className="prices-slider">
                      <del>$130.00</del>
                      <p>$125.00</p>
                    </div>
                    <div className="app-timer">
                      <div className="timer-houres">
                        <div> {`${hours}`}</div>
                        <span>Hour</span>
                      </div>
                      <div className="timer-houres">
                        <div> {`${minutes < 10 ? "0" : ""}${minutes}`}</div>
                        <span>Min</span>
                      </div>
                      <div className="timer-houres">
                        {" "}
                        <div> {`${seconds < 10 ? "0" : ""}${seconds}`}</div>
                        <span>Sec</span>
                      </div>
                    </div>
                  </div>
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btn-slide">Add To Cart</button>
                  </Fade>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="child-slide-three">
                <div>
                  <div className="num">-5%</div>
                  <img
                    width={200}
                    src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/14_a1.jpg"
                    alt=""
                  />
                </div>
                <div className="content-slider-three">
                  <p
                    className="name-slider-cart"
                    style={{ fontWeight: "bold" }}
                  >
                    Appale Airpods Max Over Air Headphones
                  </p>
                  <div
                    className="d-flex justify-content-flex-start align-items-flex-start gap-1"
                    style={{ marginLeft: "5px" }}
                  >
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <div className="prices-slider">
                      <del>$140.00</del>
                      <p>$130.00</p>
                    </div>
                    <div className="app-timer">
                      <div className="timer-houres">
                        <div> {`${hours}`}</div>
                        <span>Hour</span>
                      </div>
                      <div className="timer-houres">
                        <div> {`${minutes < 10 ? "0" : ""}${minutes}`}</div>
                        <span>Min</span>
                      </div>
                      <div className="timer-houres">
                        {" "}
                        <div> {`${seconds < 10 ? "0" : ""}${seconds}`}</div>
                        <span>Sec</span>
                      </div>
                    </div>
                  </div>
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btn-slide">Add To Cart</button>
                  </Fade>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="child-slide-three">
                <div>
                  <div className="num">-8%</div>
                  <img
                    width={200}
                    src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2019/01/05_a1.jpg"
                    alt=""
                  />
                </div>
                <div className="content-slider-three">
                  <p
                    className="name-slider-cart"
                    style={{ fontWeight: "bold" }}
                  >
                    Wirless Airbode Blotooth Earphons with deep Path
                  </p>
                  <div
                    className="d-flex justify-content-flex-start align-items-flex-start gap-1"
                    style={{ marginLeft: "5px" }}
                  >
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <div className="prices-slider">
                      <del>$100.00</del>
                      <p>$90.00</p>
                    </div>
                    <div className="app-timer">
                      <div className="timer-houres">
                        <div> {`${hours}`}</div>
                        <span>Hour</span>
                      </div>
                      <div className="timer-houres">
                        <div> {`${minutes < 10 ? "0" : ""}${minutes}`}</div>
                        <span>Min</span>
                      </div>
                      <div className="timer-houres">
                        {" "}
                        <div> {`${seconds < 10 ? "0" : ""}${seconds}`}</div>
                        <span>Sec</span>
                      </div>
                    </div>
                  </div>
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btn-slide">Add To Cart</button>
                  </Fade>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="child-slide-three">
                <div>
                  <div className="num">-14%</div>
                  <img
                    width={200}
                    src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/a1.jpg"
                    alt=""
                  />
                </div>
                <div className="content-slider-three">
                  <p
                    className="name-slider-cart"
                    style={{ fontWeight: "bold" }}
                  >
                    Over Ear Stereo Wireless Headset 40H Playtime
                  </p>
                  <div
                    className="d-flex justify-content-flex-start align-items-flex-start gap-1"
                    style={{ marginLeft: "5px" }}
                  >
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <div className="prices-slider">
                      <del>$130.00</del>
                      <p>$125.00</p>
                    </div>
                    <div className="app-timer">
                      <div className="timer-houres">
                        <div> {`${hours}`}</div>
                        <span>Hour</span>
                      </div>
                      <div className="timer-houres">
                        <div> {`${minutes < 10 ? "0" : ""}${minutes}`}</div>
                        <span>Min</span>
                      </div>
                      <div className="timer-houres">
                        {" "}
                        <div> {`${seconds < 10 ? "0" : ""}${seconds}`}</div>
                        <span>Sec</span>
                      </div>
                    </div>
                  </div>
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btn-slide">Add To Cart</button>
                  </Fade>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="child-slide-three">
                <div>
                  <div className="num">-14%</div>
                  <img
                    width={200}
                    src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/10_a1.jpg"
                    alt=""
                  />
                </div>
                <div className="content-slider-three">
                  <p
                    className="name-slider-cart"
                    style={{ fontWeight: "bold" }}
                  >
                    Over Ear Stereo Wireless Headset 40H Playtime
                  </p>
                  <div
                    className="d-flex justify-content-flex-start align-items-flex-start gap-1"
                    style={{ marginLeft: "5px" }}
                  >
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <div className="prices-slider">
                      <del>$130.00</del>
                      <p>$125.00</p>
                    </div>
                    <div className="app-timer">
                      <div className="timer-houres">
                        <div> {`${hours}`}</div>
                        <span>Hour</span>
                      </div>
                      <div className="timer-houres">
                        <div> {`${minutes < 10 ? "0" : ""}${minutes}`}</div>
                        <span>Min</span>
                      </div>
                      <div className="timer-houres">
                        {" "}
                        <div> {`${seconds < 10 ? "0" : ""}${seconds}`}</div>
                        <span>Sec</span>
                      </div>
                    </div>
                  </div>
                  <Fade direction="up" duration={1000} damping={0.6}>
                    <button className="btn-slide">Add To Cart</button>
                  </Fade>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default HomeTwo;
