import { useState, useEffect } from "react";

// Le "contrôleur" pour gérer la récupération des données
function usePatientsController() {
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://api-ecf.sarahkatz.fr/patients");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPatients(data);
      } catch (e) {
        setError(e);
        console.error("Could not fetch patients:", e);
      }
      setIsLoading(false);
    };

    fetchPatients();
  }, []);

  const addPatient = async (capitaine) => {
    setIsLoading(true);
    setError(null); // Réinitialiser les erreurs précédentes
    console.log("Sending patient data:", capitaine);
    try {
      const response = await fetch("http://api-ecf.sarahkatz.fr/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Inclus d'autres en-têtes si nécessaire, comme l'authentification
        },
        body: JSON.stringify(capitaine),
      });
      if (!response.ok) {
        // Ici, tu peux utiliser response.text() pour voir ce que l'API renvoie
        const text = await response.text();
        console.error("Response text:", text); // Affiche le texte pour le débogage
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let data;

      setPatients((prevPatients) => [...prevPatients, data]);
    } catch (e) {
      setError(e);
      console.error("Could not add patient:", e);
    } finally {
      setIsLoading(false);
    }
  };

  return { patients, isLoading, error, addPatient };
}

export default usePatientsController;
