import React from "react";
import logoHopital from "../assets/logoHopital.png";

import "../Components/NavBarHome.css";

const NavBarHome = () => {
  return (
    <div className="container">
      <div class="mainFrame cf">
        <div class="row">
          <input type="text" id="input-box" placeholder="Rechercher" />
          <div id="Recherche"></div>
        </div>
      </div>
      <div className="logo">
        <img src={logoHopital} />
      </div>
    </div>
  );
};

export default NavBarHome;
