import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <div>
        <div className="footer-app d-flex " style={{ color: "#fff" }}>
          <div className="container content-footer">
            <div className="d-flex align-items-center icon-">
              <i
                class="fa-solid fa-message"
                style={{
                  marginRight: "20px",
                  fontSize: "30px",
                  color: "yellow",
                }}
              ></i>
              <div>
                <p
                  style={{
                    fontWeight: "700",
                    paddingTop: "20px",
                    fontSize: "20px",
                    color: "rgb(0, 251, 255)",
                  }}
                >
                  Join Our Newsletter, Get 10% Off
                </p>
                <p style={{ marginTop: "-10px" }}>
                  Get all latest information on events, sales and offers
                </p>
              </div>{" "}
            </div>
            <div style={{ display: "flex" }}>
              <input
                className="form-control inp-footer"
                type="text"
                style={{ width: "30vw" }}
              />
              <button
                className="btn btn-warning"
                style={{ color: "rgb(255, 0, 208)", fontWeight: "700" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ######################################################## */}

      <div className="down-footer-app">
        <div className="child-footer-one">
          <p style={{ fontWeight: "700" }}>Contact Information</p>
          <div className="d-flex">
            <i
              class="fa-solid fa-headphones"
              style={{
                marginRight: "10px",
                fontSize: "30px",
                color: "rgb(255, 0, 208)",
              }}
            ></i>
            <p>
              You have any Questions ? Call us 24x7{" "}
              <span style={{ fontWeight: "700" }}>
                (+01) 1234 567 890, (+01) 1234 567 890
              </span>
            </p>
          </div>
          <p>
            1487 Rocky Horse Carrefour 1487 Rocky Horse Arlington, TX 16819
            United <br />
            <br />
            demo@example.com
          </p>
          <div className="icon-footer-left">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-messenger"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>

        {/* ********************************** */}

        <div className="child-footer-two">
          <p style={{ fontWeight: "700" }}>My account</p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Help Center
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Redeem Voucher
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Order Tracking
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Order History
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Shopping Cart
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Affiliate
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Account
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Gift Card
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Service Center
          </p>
        </div>
        <div className="child-footer-three">
          <p style={{ fontWeight: "700" }}>Information</p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Product Support
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Checkout
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            License Policy
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Submit a Dispute
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Locality
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            About us
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Policies & Rules
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Terms & Conditions
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Service Center
          </p>
        </div>
        <div className="child-footer-four">
          <p style={{ fontWeight: "700" }}>Company Details</p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Help Center
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            About Us
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Careers
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Order History
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Blog
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Submit a Dispute
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Affiliate
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Contact Us
          </p>
          <p style={{ marginBottom: "2px", fontSize: "14px" }}>
            <span
              style={{ fontSize: "15px", paddingRight: "5px", opacity: "0.6" }}
            >
              {">"}
            </span>
            Support
          </p>
        </div>
      </div>
      <div className="container finish-image-footer">
        <div>© 2024 Demo Store - Theme by Ahmed Hamdy</div>
        <div>
          <img
            src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/payment.png"
            alt=""
          />
        </div>
       
      </div>

     
    </div>
  );
};

export default Footer;
