import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Views/HomePage";
import PatientsPage from "./Views/PatientsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPatientPage from "./Views/AddPatientPage";
import PatientInfo from "./Views/PatientInfo";
import ModifierPatient from "./Views/ModifierPatient";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/patients/addPatient" element={<AddPatientPage />} />
          <Route
            path="/patients/patientInfo/:idPatient"
            element={<PatientInfo />}
          />
          <Route
            path="/patients/patientInfo/:idPatient/modifierPatient"
            element={<ModifierPatient />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
