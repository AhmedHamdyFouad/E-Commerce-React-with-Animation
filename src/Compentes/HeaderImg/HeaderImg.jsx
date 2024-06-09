import React from "react";

import "./hader.css";
const Header = () => {
  return (
    <div className="appImg">
      <div className="row content">
        <div className="col-lg-8 left">
          <div className="h">Biggest Offer On -WaterProof, DSLR Camera Lenses & Earphones</div>
          <div  className="display">
          <i class="fa-regular fa-envelope" style={{marginRight:"5px"}}></i>Ahmed@gmail.com
          </div>
        </div>

        <div className="col-lg-4 right">
          <div className="head none">
            <i class="fa-solid fa-phone"  style={{marginRight:"5px", color:"#fff"}}></i>Call Us : (+02) 01097739094
          </div>
          <div  className="head convert">
          <i class="fa-regular fa-envelope" style={{marginRight:"5px", color:"#fff"}}></i>Ahmed@gmail.com
          </div>
          <div className="head login">
          <i class="fa-solid fa-right-to-bracket" style={{marginRight:"5px", color:"#fff"}}></i>Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
