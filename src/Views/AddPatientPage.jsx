import React, { useState } from "react";
import usePatientsController from "../Controllers/usePatientsController";
import NavBar from "../Components/NavBar";
import "../App.css";
import { Link } from "react-router-dom";

const AddPatientPage = () => {
  const { addPatient } = usePatientsController();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [socialSecurityNumber, setSocialSecurityNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Assure-toi de valider les données ici avant de les envoyer
    const newPatient = {
      lastName,
      firstName,
      birthdate, // Format de la date à confirmer avec l'API
      socialSecurityNumber,
    };
    await addPatient(newPatient);

    // Réinitialisation des champs ou affichage de succès
    setLastName("");
    setFirstName("");
    setBirthdate("");
    setSocialSecurityNumber("");
    // Afficher le message de succès ou traiter la réponse ici
  };
  return (
    <>
      <NavBar />
      <h2 style={style.pageStyles}>Ajouter un patient</h2>
      <form onSubmit={handleSubmit} className="add-patient-form">
        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Ex: Jihon"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="Ex: Doe"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date de naissance</label>
          <input
            id="dob"
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="socialSecurityNumber">N° sécurité sociale</label>
          <input
            id="socialSecurityNumber"
            type="text"
            value={socialSecurityNumber}
            onChange={(e) => setSocialSecurityNumber(e.target.value)}
            required
            placeholder="Ex: 123456789010"
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="button">
            Ajouter
          </button>
          <Link to="/patients">
            <button type="button" className="button">
              Annuler
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

const style = {
  pageStyles: {
    marginLeft: "15%",
    marginTop: "25%", // Ajusté pour réduire l'espace
  },
};

export default AddPatientPage;
