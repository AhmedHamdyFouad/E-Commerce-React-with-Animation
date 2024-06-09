import React, { useState } from "react";
import images from "./images/Screenshot 2024-06-04 141125.png";
import { useParams } from "react-router-dom";
import image3 from "./images/Screenshot 2024-06-05 135308.png";
import HeaderImg from "../Compentes/HeaderImg/HeaderImg";
import Header from "../Compentes/Hedaer/Header";
import image2 from "./images/Screenshot 2024-06-05 133650.png";
import image4 from "./images/Screenshot 2024-06-06 113200.png";
import Data from "./Data";
import { Button, Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./stylesDetails.css";
import { UseShooppingCart } from "../Context/Context";
import SliderLast from "../Compentes/lastSlider/SliderLastOne";
import Footer from "../Compentes/Footer/Footer";
const CardDetails = () => {
  const { id } = useParams();
  const products = Data.find((ele) => ele.id === id);
  const [mainImage, setMainImage] = useState(products.image);
  const { getItems, increase, decrease, remove } = UseShooppingCart();
  const quantity = getItems(id);
  const handleThumbnailClick = (newImage) => {
    setMainImage(newImage);
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "red", label: "red" },
    { value: "blue", label: "blue" },
    { value: "Green", label: "Green" },
  ];

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [activeTab, setActiveTab] = useState(0);

  const tabsContent = [
    {
      title: "Description",
      content: (
        <div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: "50px",
              }}
            >
              <img src={image2} alt="" />
              <div
                style={{ width: "80vw", margin: "auto", textAlign: "justify" }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Power your passive speakers to give your home soundtrack a
                  boost and The soundtrack to your life Maximize your amplifier
                  with powerful Bose speakers with your home soundtrack a boost
                  and The soundtrack to your life The soundtrack to your life —
                  Power your passive speakers and connect the Bose Music
                  Amplifier over Wi-Fi so you can stream all your favorites,
                  from playlists to
                </span>
                podcasts, easily from your phone. Making connections — For an
                optimal sound experience, pair with Bose in-ceiling or outdoor
                speakers. The custom EQ delivers clear, well-balanced sound.
                Amped-up streaming apps — Access the Bose Music app’s integrated
                music services and internet radio stations over Wi-Fi. Or
                connect to your phone with Bluetooth, Apple AirPlay 2, Spotify
                Connect, or Chromecast built-in. Our secret ingredient — This
                amp was built with Bose proprietary signal processing technology
                that automatically adjusts tonal balance with changes in volume.
                You get lifelike sound at almost all listening levels while
                vocals maintain clarity. Sounds good, right? — For an optimal
                sound experience, pair the Bose Music Amplifier with passive
                speakers from Bose, like the Bose Virtually Invisible 791
                in-ceiling speakers and the Bose 251 environmental speakers.
              </div>
              <img src={image3} alt="" />
              <h2 style={{ marginTop: "50px", fontFamily: "Sriracha" }}>
                About this item
              </h2>
              <div style={{ width: "80vw", margin: "auto" }}>
                Hybrid Active Noise Cancelling Headphones with Transparent
                Modes, 65H Playtime Wireless Over-Ear Bluetooth Headphones with
                Mic Deep Bass,Multi-Connection,Soft-Earpads for PC TV Products
                with electrical plugs are designed for use in the US. Outlets
                and voltage differ internationally and this product may require
                an adapter or converter for use in your destination. Please
                check compatibility before purchasing. Amped-up streaming apps —
                Access the Bose Music app’s integrated music services and
                internet radio stations over Wi-Fi. Or connect to your phone
                with Bluetooth, Apple AirPlay 2, Spotify Connect, or Chromecast
                built-in. A remote control can allow operation of devices that
                are out of convenient reach for direct operation of controls.
                They function best when used from a short distance. This is
                primarily a convenience feature for the user. In some cases,
                remote controls allow a person to operate a device that they
                otherwise would not be able to reach, as when a garage door
                opener is triggered from outside.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Additional information",
      content: (
        <div className="app-weight ">
          <div style={{ padding: "8px", fontWeight: "bold" }}>
            <span style={{ marginRight: "40px", fontWeight: "bold" }}>
              {" "}
              Weight{" "}
            </span>
            <span>0.5kg</span>
          </div>
          <div
            style={{
              backgroundColor: " rgba(255, 191, 134, 0.822)",
              padding: "8px",
              color: "red",
              fontWeight: "bold",
            }}
          >
            <span style={{ marginRight: "40px", fontWeight: "bold" }}>
              {" "}
              Dimensions{" "}
            </span>
            <span>10 × 12 × 0.5 cm</span>
          </div>
          <div style={{ padding: "8px", fontWeight: "bold" }}>
            <span style={{ marginRight: "40px", fontWeight: "bold" }}>
              {" "}
              Color{" "}
            </span>
            <span>Gray, White</span>
          </div>
          <div
            style={{
              backgroundColor: " rgba(255, 191, 134, 0.822)",
              padding: "8px",
              color: "red",
              fontWeight: "bold",
            }}
          >
            <span style={{ marginRight: "40px", fontWeight: "bold" }}>
              {" "}
              size{" "}
            </span>
            <span>Large, Medium, Small</span>
          </div>
        </div>
      ),
    },
    {
      title: "Reviews (2)",
      content: (
        <div>
          <img style={{ marginTop: "50px" }} src={image4} alt="" />
        </div>
      ),
    },
  ];

  return (
    <div style={{ overflowX: "hidden" }}>
      <HeaderImg />
      <Header />
      <div
        className=""
        style={{
          width: "100vw",
          height: "100px",
          backgroundColor: "rgba(255, 123, 0, 0.151)",
        }}
      >
        <h6
          className="h6header"
          style={{
            paddingTop: "40px",
            paddingLeft: "150px",
            color: "red",
            fontWeight: "bold",
          }}
        >{`Home / Shop / ${products.title} / ${products.desc}`}</h6>
      </div>

      <div
        className="stylingsheet"
        style={{
          width: "80vw",
          height: "60px",
          margin: "auto",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(255, 123, 0, 0.151)",
          borderLeft: "10px solid  rgb(255, 153, 0)",
          marginTop: "30px",
        }}
      >
        <div>
          <h6
            style={{
              paddingLeft: "20px",
              marginTop: "10px",
              color: " rgb(172, 103, 0)",
              fontWeight: "bold",
            }}
          >{`"${products.desc}"`}</h6>
        </div>

        <div style={{ paddingRight: "20px" }}>
          <Button
            className="btn btn-warning"
            style={{ color: "darkred", fontWeight: "bold" }}
          >
            View Cart
          </Button>
        </div>
      </div>

      {/*  Home  */}

      <div className="home-images-app">
        <div className="home-images-left">
          <img
            className="img-app-move"
            style={{ marginLeft: "150px" }}
            width={400}
            src={products.image && mainImage}
            alt="eww"
          />
          <Swiper
            breakpoints={{
              390: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: -10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: -10,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1600: {
                slidesPerView: 5,
                spaceBetween: -30,
              },
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={100}
            className="image-app-container"
            freeMode={true}
            modules={[FreeMode]}
          >
            <SwiperSlide>
              <div>
                <img
                  width={100}
                  src={`${products.image}`}
                  alt=""
                  onClick={() => handleThumbnailClick(products.image)}
                />
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div>
                <img
                  width={100}
                  src={products.image2}
                  alt=""
                  onClick={() => handleThumbnailClick(products.image2)}
                />
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div>
                <img
                  width={100}
                  src={products.image3}
                  alt=""
                  onClick={() => handleThumbnailClick(products.image3)}
                />
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div>
                <img
                  src={products.image4}
                  alt=""
                  onClick={() => handleThumbnailClick(products.image4)}
                />
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div>
                <img
                  src={products.image5}
                  alt=""
                  onClick={() => handleThumbnailClick(products.image5)}
                />
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div>
                <img
                  src={products.image6}
                  alt=""
                  onClick={() => handleThumbnailClick(products.image5)}
                />
              </div>
            </SwiperSlide>{" "}
          </Swiper>
        </div>

        {/*#################################### right ############################################################################# */}
        <div className="home-title-right">
          <h6>{products.title}</h6>
          <h4 style={{ fontWeight: "bold" }}>{products.desc}</h4>
          <div
            className="d-flex"
            style={{
              marginBottom: "15px",
              color: "rgb(255, 196, 0)",
              gap: "3px",
              fontSize: "17px",
            }}
          >
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>

          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "red", fontSize: "20px", fontWeight: "600" }}>
              {products.price}{" "}
            </span>
            <span style={{ color: "red", fontWeight: "600", fontSize: "20px" }}>
              $
            </span>
          </div>
          <div>
            <h6
              style={{
                lineHeight: "25px",
                borderBottom: "1px solid #e5e5e5",
                paddingBottom: "10px",
              }}
            >
              {products.description}
            </h6>
          </div>
          <p style={{ fontWeight: "bold" }}>color</p>
          <div>
            <select
              style={{
                cursor: "pointer",
                border: "2px solid rgb(165, 97, 42)",
                borderRadius: "5px",
              }}
              value={selectedOption}
              onChange={handleChange}
            >
              <option
                style={{
                  cursor: "pointer",
                  border: "2px solid rgb(165, 97, 42)",
                  borderRadius: "5px",
                }}
                value=""
              >
                Select Color
              </option>
              {options.map((option) => (
                <option
                  style={{
                    cursor: "pointer",
                    border: "2px solid rgb(165, 97, 42)",
                    borderRadius: "5px",
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {quantity === 0 ? (
            <button
              onClick={() => increase(id)}
              className="btn-btn-shop-cart"
              style={{
                backgroundColor: "rgb(165, 97, 42)",
                color: "#fff",
                fontFamily: "cursive",
                padding: "10px",
                marginTop: "15px",
                border: "none",
                fontSize: "1.1rem",
                fontWeight: "700",
                borderRadius: "10px",
              }}
            >
              Add To Cart
            </button>
          ) : (
            <div>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
                className="app"
              >
                <div className="row-column-cart">
                  <Col lg={3} md={4} sm={12}>
                    <Button onClick={() => decrease(id)} variant="warning">
                      -
                    </Button>
                  </Col>

                  <Col style={{ marginTop: "5px" }} lg={6} md={4} sm={12}>
                    <span>{quantity} in cart</span>
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Button onClick={() => increase(id)} variant="warning">
                      +
                    </Button>
                  </Col>
                </div>
              </div>
              <Row>
                <Button
                  onClick={() => remove(id)}
                  style={{ marginLeft: "0px", width: "200px" }}
                  variant="danger"
                >
                  Remove
                </Button>
              </Row>
            </div>
          )}
          <h6 style={{ paddingTop: "15px", fontWeight: "bold" }}>
            Free shipping on orders over $50!
          </h6>
          <h6 style={{ paddingTop: "10px" }}>
            {" "}
            <i class="fa-solid fa-check"></i>
            <span style={{ paddingLeft: "5px" }}>Satisfaction Guaranteed</span>
          </h6>
          <h6 style={{ paddingTop: "10px" }}>
            {" "}
            <i class="fa-solid fa-check"></i>
            <span style={{ paddingLeft: "5px" }}> No Hassle Refunds</span>
          </h6>
          <h6 style={{ paddingTop: "10px" }}>
            {" "}
            <i class="fa-solid fa-check"></i>
            <span style={{ paddingLeft: "5px" }}> Secure Payments</span>
          </h6>
          <img src={images} alt="" />
        </div>
      </div>
      <div>
        <div className="tabs">
          {tabsContent.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="tab-title">{tab.title}</span>
            </div>
          ))}
        </div>

        <div className="tab-content">{tabsContent[activeTab].content}</div>
      </div>
      <div style={{ width: "90vw", margin: "auto" }}>
        <SliderLast />
      </div>

      <Footer />
    </div>
  );
};

export default CardDetails;
