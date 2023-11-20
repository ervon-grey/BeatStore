import React, { createContext, useContext, useState, useEffect } from 'react';

const BeatsContext = createContext();

export const DataProvider = ({ children }) => {
  const [beatsJson, setBeatsJson] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getBeats = async () => {
      try {
        let response = await fetch('http://127.0.0.1:8000/api/beats/');
        let data = await response.json();
        setBeatsJson(data);
      } catch (error) {
        console.error('Error fetching beats data:', error);
      } finally {
        setLoading(false);
      }
    };

    getBeats();
  }, []); 

  return (
    <BeatsContext.Provider value={beatsJson}>
      {children}
    </BeatsContext.Provider>
  );
};

export const useBeatsData = () => {
  return useContext(BeatsContext);
};
