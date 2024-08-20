import React, { useEffect } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import { useState } from "react";
import "../App.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import GetPatientDetail from "../Controllers/GetPatientDetail";

function Form() {
  const { idPatient } = useParams();
  const navigate = useNavigate();
  const { patientDetails } = GetPatientDetail(idPatient);
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    birthdate: "",
    socialSecurityNumber: "",
  });

  useEffect(() => {
    if (patientDetails) {
      setFormData({
        lastName: patientDetails.lastName || "",
        firstName: patientDetails.firstName || "",
        birthdate: patientDetails.birthdate || "",
        socialSecurityNumber: patientDetails.socialSecurityNumber || "",
      });
    }
  }, [patientDetails]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data soumise:", formData);

    try {
      const response = axios.put(
        `http://api-ecf.sarahkatz.fr/patients/${idPatient}`,
        formData
      );
      console.log(response);
      alert("Patient updated successfully");
      navigate(`/patients/patientInfo/${idPatient}`);
    } catch (error) {
      console.error("Could not update patient:", error);
      alert("Failed to update patient");
    }
  };

  if (!patientDetails) {
    return <div>Loading...</div>;
  }

  // const handleReset = () => {
  //   setFormData({
  //     nom: "",
  //     prenom: "",
  //     dateNaissance: "",
  //     numeroSecuriteSociale: "",
  //     service: "",
  //   });
  // };

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Prénom:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Date de naissance:
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Numéro de sécurité sociale:
          <input
            type="text"
            name="socialSecurityNumber"
            value={formData.socialSecurityNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Service:
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Sélectionnez un service</option>
            <option value="urgence">Urgence</option>
            <option value="urologue">Urologue</option>
            <option value="incendie">Incendie</option>
          </select>
        </label>
        <br />
        <button type="submit">Modifier</button>
        <Link to="/patients">
          <button type="button" onClick={handleChange}>
            Annuler
          </button>
        </Link>
      </form>
    </>
  );
}

export default Form;
