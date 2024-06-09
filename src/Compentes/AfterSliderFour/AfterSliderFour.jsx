import React from 'react'
import "./AfterSlider.css"
const AfterSliderFour = () => {
  return (
    <div>
       <div className="static">
        <div className="slide-left-four" style={{ position: "relative" }}>
          <img
            src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/cms-banner-7.jpg"
            alt=""
          />
          <div
            style={{
              position: "absolute",
              top: "50px",
              left: "50px",
              color: "#fff",
              letterSpacing:"2px",
              className:"content-four"
            }}
          >
            NEW ARRIVALS <br />
            STANDING VINTAGE FANS <br /><br />
            <span style={{ fontSize: "30px" }}>
              {" "}
            <span style={{color:"rgb(255, 0, 212)"}}>  UP TO 70% OFF <br /></span>
            </span><br />
            Shop Now <span style={{backgroundColor:"yellow", padding:"5px",color:"red", borderRadius:"50%",fontWeight:"bold"}}>{">"}</span>
          </div>
        </div>

        <div className="slide-right-four" style={{ position: "relative" }}>
          <img
            src="https://demos.coderplace.com/woo/WCM02/WCM02045/WP03/wp-content/uploads/2023/06/cms-banner-8.jpg"
            alt=""
          />
          <div
              style={{
                position: "absolute",
                top: "50px",
                left: "50px",
                color: "#000",
                letterSpacing:"2px",
                className:"content-four"
              }}
          >
            NEW ARRIVALS <br />
            STANDING VINTAGE FANS <br /><br />
            <span style={{ fontSize: "30px" }}>
              {" "}
            <span style={{color:"rgb(255, 0, 212)"}}>  UP TO 70% OFF <br /></span>
            </span><br />
            <span style={{color:"rgb(255, 94, 0)", fontWeight:"800"}}>Shop Now </span><span style={{backgroundColor:"yellow", padding:"5px",color:"red", borderRadius:"50%",fontWeight:"bold"}}>{">"}</span>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default AfterSliderFour
