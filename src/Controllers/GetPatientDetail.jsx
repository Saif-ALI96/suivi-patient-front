import React, { useState, useEffect } from "react";
import axios from "axios";

function GetPatientDetail(idPatient) {
  const [patientDetails, setPatientDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPatientDetails() {
      if (!idPatient) {
        setError(new Error("No patient ID provided"));
        return;
      }
      setIsLoading(true);

      try {
        const response = await axios.get(
          `http://api-ecf.sarahkatz.fr/beds/byPatient/${idPatient}`
        );
        console.log(response);
        if (response.data === "") {
          const response2 = await axios.get(
            `http://api-ecf.sarahkatz.fr/patients/${idPatient}`
          );
          setPatientDetails(response2.data);
        } else {
          setPatientDetails(response.data);
        }
      } catch (e) {
        setError(e);
        console.error("Could not fetch patient details:", e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPatientDetails();
  }, [idPatient]);

  return { patientDetails, isLoading, error };
}

export default GetPatientDetail;
