import React from "react";
import chambre from "../assets/chambre.png";
import lit from "../assets/lit.png";
import patient from "../assets/patient.png";
import service from "../assets/service.png";

import NavBarHome from "../Components/NavBarHome";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <NavBarHome />
      <h2 style={{ marginLeft: "15%", marginTop: "26%" }}>Accueil</h2>

      <div style={style.selection}>
        <div className="patients" style={style.row}>
          <div>
            <Link to="/patients">
              <h2 style={style.titleStyle}>Patients</h2>
            </Link>
          </div>
          <img src={patient} style={style.image} />
        </div>
        <div className="lit" style={style.row}>
          <div>
            <h2 style={style.titleStyle}>Lits</h2>
          </div>
          <img src={lit} style={style.image} />
        </div>
        <div className="chambre">
          <div>
            <h2 style={style.titleStyle}>Chambres</h2>
          </div>
          <img src={chambre} style={style.image} />
        </div>
        <div className="service">
          <div>
            <h2 style={style.titleStyle}>Services</h2>
          </div>
          <img src={service} style={style.image} />
        </div>
      </div>

      <div style={style.footer}>
        <h3 style={style.titleStyleFooter}>Rue de Cambrai, 59500 Douai</h3>
      </div>
    </>
  );
};

const style = {
  selection: {
    border: "2px solid #265B1D",
    borderRadius: "15px",
    padding: "15px",
    margin: "5% 8%",
    background: "#F5F5DC",
  },
  image: {
    width: "45%",
    height: "100%",
    borderRadius: "20px",
    padding: "5px",
    marginLeft: "25%",
    marginTop: "10px",
    marginBottom: "10px",
  },
  titleStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: "25px",
    padding: "5px 30px",
    margin: "10px 40px",
    border: "2px solid black ",
    borderRadius: "15px",
    background: "#265B1D",
    textAlign: "center",
  },
  row: {
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    display: "flex",
    background: "#265b1d",
    width: "100%",
    // maxWidth: "540px",
    padding: "5px 15px",
    alignItems: "center",
    height: "15%",
  },
  titleStyleFooter: {
    fontWeight: "light",
    padding: "5px 30px",
    margin: "8px 0px",
    border: "2px solid black ",
    borderRadius: "15px",
    background: "#F5F5DC",
    textAlign: "center",
  },
};

export default HomePage;
