import axios from "axios";
import "../App.css";
import NavBar from "../Components/NavBar";
import GetPatientDetail from "../Controllers/GetPatientDetail";
import { useParams, useNavigate, Link } from "react-router-dom";

const PatientInfo = () => {
  const { idPatient } = useParams();
  const navigate = useNavigate();
  const { isLoading, error, patientDetails } = GetPatientDetail(idPatient);

  const deletePatient = async () => {
    try {
      await axios.delete(`http://api-ecf.sarahkatz.fr/patients/${idPatient}`);
      // Reset patient details after successful deletion
      navigate("/patients");
      alert("Patient deleted");
    } catch (e) {
      console.error("Could not delete patient:", e);
    }
  };

  console.log(idPatient);
  if (isLoading || !patientDetails) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!patientDetails) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <NavBar />
      <div className="patient-info-container">
        <h2>Patient Info</h2>
        <div className="patient-info">
          <p>
            <strong>Nom :</strong>{" "}
            {patientDetails.patient
              ? patientDetails.patient.lastName
              : patientDetails.lastName}
          </p>
          <p>
            <strong>Prénom :</strong>{" "}
            {patientDetails.patient
              ? patientDetails.patient.firstName
              : patientDetails.firstName}
          </p>
          <p>
            <strong>Date de naissance :</strong>{" "}
            {patientDetails.patient
              ? patientDetails.patient.birthdate
              : patientDetails.birthdate}
          </p>
          <p>
            <strong>Num sécurité sociale :</strong>{" "}
            {patientDetails.patient
              ? patientDetails.patient.socialSecurityNumber
              : patientDetails.socialSecurityNumber}
          </p>
          <p>
            <strong>Date de création :</strong>{" "}
            {patientDetails.patient
              ? patientDetails.patient.createdAt
              : patientDetails.createdAt}
          </p>
          <p>
            <strong>Date de modification :</strong>
            {patientDetails.patient
              ? patientDetails.patient.modifiedAt
              : patientDetails.modifiedAt}
          </p>
          <p>
            <strong>Service :</strong>
            {patientDetails.room
              ? patientDetails.room.service.name
              : "le patient n'a pas de service"}
          </p>
          <p>
            <strong>Lit :</strong>
            {patientDetails.room
              ? patientDetails.room.number
              : "le patient n'a pas de chambre"}
          </p>
        </div>
        <div className="patient-info-actions">
          <Link to="/patients/patientInfo/:idPatient/modifierPatient">
            <button className="modify-button">Modifier</button>
          </Link>
          <button className="delete-button" onClick={deletePatient}>
            Supprimer
          </button>
        </div>
        test
      </div>
    </>
  );
};

export default PatientInfo;
