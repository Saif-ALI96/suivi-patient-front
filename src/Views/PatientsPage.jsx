import React from "react";

import NavBar from "../Components/NavBar";
import usePatientsController from "../Controllers/usePatientsController";
import { Link } from "react-router-dom";
// import PatientInfo from "./PatientInfo";
// import GetPatientDetail from "../Controllers/GetPatientDetail";

const PatientsPage = () => {
  const { patients, isLoading, error } = usePatientsController();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <NavBar />
      <h2 style={style.pageStyles}>Patients</h2>
      <div className="section" style={style.section}>
        <div className="titre" style={style.titre}>
          <h2 style={{ marginLeft: "5%" }}>Nom</h2>
          <h2 style={{ marginRight: "5%" }}>Prénom</h2>
        </div>
        <div style={style.listStyles}>
          {patients.map((patient, index) => (
            <div key={index} style={style.patientStyles}>
              <Link to={`/patients/PatientInfo/${patient.idPatient}`}>
                <h4 style={{ paddingLeft: "4%", color: "black" }}>
                  {patient.lastName}
                </h4>
              </Link>
              <h4 style={{ paddingRight: "4%" }}>{patient.firstName}</h4>
            </div>
          ))}
        </div>
        <Link to="/patients/addPatient">
          <button style={style.buttomStyles}>+</button>
        </Link>
      </div>
    </>
  );
};

const style = {
  titre: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#265b1d",
    borderRadius: "10px",
    padding: "5px 15px",
    height: "15%",
    margin: "10% 3% 0%",
    position: "fixed",
    top: "90px",
    width: "90%",
    zIndex: "1000",
    color: "white",
  },
  section: {
    position: "relative",
    paddingTop: "10%",
  },
  pageStyles: {
    marginLeft: "15%",
    marginTop: "25%", // Ajusté pour réduire l'espace
  },
  patientStyles: {
    background: "white",
    padding: "10px",
    margin: "10px 0", // Espace entre les patients
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Ombre portée légère
    borderRadius: "4px", // Bordures arrondies
    display: "flex",
    justifyContent: "space-between", // Espace entre nom et prénom
  },
  listStyles: {
    display: "flex",
    flexDirection: "column",
    background: "#F5F5DC", // Couleur de fond douce
    padding: "1rem", // Espacement autour des patients
    borderRadius: "10px", // Bordures arrondies
    // maxWidth: "600px", // Largeur maximale de la liste
    margin: "0 5% 5% 5%", // Centrer la liste sur la page
    marginTop: "20px",
    overFlowY: "scroll",
    height: "80vh",
    overflowX: "hidden",
    maxHeight: "calc(100vh - 60xp)",
  },
  buttomStyles: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "30px",
    lineHeight: "50px",
    textAlign: "center",
    cursor: "pointer",
    border: "black",
  },
};

export default PatientsPage;
