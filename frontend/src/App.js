import './App.css';
import Header from './components/nav.js'
import Spotlight from './components/spotlight.js'
import SearchBar from './components/searchbar.js'
import Catalog from './components/catalog.js'
import Player from './components/player.js'
//import { DataProvider } from './components/BeatsDataContext.js'
import React, { useState, useEffect } from 'react';
import { addIndexToObjects, cheapestLicense } from './utils.js'



function App() {
  const [beats, setBeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentBeat, setCurrentBeat] = useState({});
  const [spotlight, setSpotlight] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);

  const getBeats = async (url) => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      let indexedData = addIndexToObjects(data)
      setBeats(indexedData);
      getSpotlight(indexedData);
    } catch (error) {
      console.error('Error fetching beats data:', error);
    } finally {
      setLoading(false);
    }
  };

  function getSpotlight(allbeats) {
      var spotlight = '';
      for (let i = 0; i < allbeats.length; i++) {
        if (allbeats[i].spotlight == true) {
          var spotlight = allbeats[i];
          break
        }
      };
      if (spotlight == '') {
        spotlight = allbeats[0]
      }
      setSpotlight(spotlight);
  };

  useEffect(() => {
    getBeats('http://127.0.0.1:8000/api/beats/');
  }, []);

  return (
    <div className="App min-h-screen">
      <Header />

      <Spotlight
        setCurrentBeat={setCurrentBeat}
        isPlaying={isPlaying}
        spotlight={spotlight}
        cheapestLicense={cheapestLicense} />

      <SearchBar
        setBeats={getBeats} />

      <Catalog
        beats={beats}
        setCurrentBeat={setCurrentBeat}
        cheapestLicense={cheapestLicense} />

      <Player
        beats={beats}
        setCurrentBeat={setCurrentBeat} currentBeat={currentBeat}
        setSpotlight={setSpotlight}
        isPlaying={isPlaying} setIsPlaying={setIsPlaying}
        cheapestLicense={cheapestLicense} />
    </div>
  );
}

export default App;
