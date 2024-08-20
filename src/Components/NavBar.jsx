import React from "react";
import logoHopital from "../assets/logoHopital.png";
import "../Components/NavBarHome.css";
import backBottonImage from "../assets/BackButtonImage.png";
import { Link } from "react-router-dom";
// import backBotton from "../assets/BackButton";

const NavBar = () => {
  return (
    <div className="container">
      <div className="mainFrame2 cf">{/* <backBotton /> */}</div>
      <Link to={"/"}>
        <div className="backBotton">
          <img src={backBottonImage} alt="back botton" />
        </div>
      </Link>
      <div className="logo2">
        <img src={logoHopital} alt="logo Hopital" />
      </div>
    </div>
  );
};

export default NavBar;
