import React from "react";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { UseShooppingCart } from "../../Context/Context";
import { Button } from "react-bootstrap";

const HeaderContent = () => {
  const { openCart, CartQuantity } = UseShooppingCart();

  return (
    <div style={{ zIndex: "999" }}>
      <Navbar expand="lg" className="bg-body-tertiary auto app">
        <Navbar.Brand href="#home">
          <img
            height="35px"
            width="191px"
            src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/logo.svg"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle
          // style={{ color: "red" }}
          className="color-info"
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ color: "red" }} className="me-auto">
            <Nav.Link>
              <Link
                className="hedear-routing"
                style={{ color: "black", textDecoration: "none" }}
                to="/"
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="hedear-routing"
                style={{ color: "black", textDecoration: "none" }}
                to="/shop"
              >
                Shop
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="hedear-routing"
                style={{ color: "black", textDecoration: "none" }}
                to="/shop"
              >
                Printers
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="hedear-routing"
                style={{ color: "black", textDecoration: "none" }}
              >
                Refrigerators
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="hedear-routing"
                style={{ color: "black", textDecoration: "none" }}
                to="/"
              >
                Televisions
              </Link>
            </Nav.Link>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link
                  className="hedear-routing"
                  style={{ color: "black", textDecoration: "none" }}
                  to="/shop"
                >
                  Action
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blog Left Sidebar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Blog Right Sidebar
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Blog Without Sidebar
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">
              <Link
                className="hedear-routing"
                style={{ color: "black", textDecoration: "none" }}
                to="/about"
              >
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link
                className="hedear-routing"
                style={{ color: "black", textDecoration: "none" }}
                to="/contact"
              >
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
          <div className="app-link-right">
            <Nav.Link
              className="link-right"
              style={{ fontSize: "25px" }}
              href="#link"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </Nav.Link>
            <Nav.Link
              className="link-right"
              style={{ fontSize: "25px", marginLeft: "15px" }}
              href="#link"
            >
              <i class="fa-regular fa-heart"></i>
            </Nav.Link>
            <Nav.Link
              className="link-right"
              style={{ fontSize: "25px", marginLeft: "15px" }}
              href="#link"
            >
              <Link>
                <Button
                  onClick={openCart}
                  style={{ position: "relative" }}
                  variant="outline-primary"
                  className="rounded-circle"
                >
                  <i
                    class="fa-solid fa-cart-shopping"
                    style={{ fontSize: "20px" }}
                  ></i>

                  <span
                    className="rounded-circle"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "1.5rem",
                      backgroundColor: "red",
                      color: "#fff",
                      fontWeight: "bold",
                      position: "absolute",
                      bottom: "-10px",
                      right: "0",
                    }}
                  >
                    {CartQuantity}
                  </span>
                </Button>
              </Link>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderContent;
