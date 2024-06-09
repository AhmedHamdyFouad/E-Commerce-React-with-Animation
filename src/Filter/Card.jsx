import Card from "react-bootstrap/Card";
import { Fade } from "react-awesome-reveal";
import "./shop.css";
import { UseShooppingCart } from "../Context/Context";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardDetails from "./CardDetails";

function BasicExample({ id, image, title, desc, price }) {
  const { getItems, increase, decrease, remove } = UseShooppingCart();
  const quantity = getItems(id);
  <CardDetails id={id} image={image} title={title} desc={desc} price={price} />;
  return (
    <div
      className="app-card-shop"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Card key={id} style={{ width: "14rem" }} className="card-app-map">
        <Link to={`/shop/CardDetails/${id}`} style={{ textDecoration: "none" }}>
          <Card.Img variant="top" className="img-shop-shop" src={image} />
        </Link>
        <Card.Body>
          <Card.Title
            style={{
              color: "rgb(255, 153, 0)",
              fontWeight: "600",
              textTransform: "capitalize",
            }}
          >
            {title}
          </Card.Title>
          <Card.Text>{desc}</Card.Text>
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
              {price}{" "}
            </span>
            <span style={{ color: "red", fontWeight: "600", fontSize: "20px" }}>
              $
            </span>
          </div>
          <Fade direction="up" duration={1000} damping={0.6}>
            {quantity === 0 ? (
              <button
                onClick={() => increase(id)}
                className="btn-btn-shop-cart"
                style={{
                  backgroundColor: "rgb(165, 97, 42)",
                  color: "#fff",
                  fontFamily: "cursive",
                  padding: "10px",
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
                    justifyContent: "center",
                  }}
                  className="app"
                >
                  <Row style={{ display: "flex" }}>
                    <Col lg={3} md={4} sm={12}>
                      <Button onClick={() => decrease(id)} variant="warning">
                        -
                      </Button>
                    </Col>

                    <Col lg={6} md={4} sm={12}>
                      <span>{quantity} in cart</span>
                    </Col>
                    <Col lg={3} md={4} sm={12}>
                      <Button onClick={() => increase(id)} variant="warning">
                        +
                      </Button>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <Button
                    onClick={() => remove(id)}
                    style={{ marginTop: "10px" }}
                    variant="danger"
                  >
                    Remove
                  </Button>
                </Row>
              </div>
            )}
          </Fade>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
