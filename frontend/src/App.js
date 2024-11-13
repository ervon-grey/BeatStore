import './App.css';
import Header from './components/nav.js'
import Cart from './components/cart.js'
import Spotlight from './components/spotlight.js'
import SearchBar from './components/searchbar.js'
import Catalog from './components/catalog.js'
import Player from './components/player.js'
import Dialog from './components/dialog.js'
import ContactDialog from './components/ContactDialog.js'

import React, { useState, useEffect, useRef } from 'react';
import { addIndexToObjects, cheapestLicense, dummyLicenses } from './utils.js'



function App() {
  const [beats, setBeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentBeat, setCurrentBeat] = useState({});
  const [spotlight, setSpotlight] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [cart, setCart] = useState({ "items": [], "open": false });
  const cartRef = useRef(cart);

  const [dialogState, setDialogState] = useState({
    "open": false,
    "beat": dummyLicenses
  });
  const dialogRef = useRef(null);
  useEffect(() => {
    if (dialogState["open"]) {
      dialogRef.current.showModal();
    }
    else {
      dialogRef.current.close()
    }
  }, [dialogState])

  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
  const contactDialogRef = useRef(null);



  const getBeats = async (url) => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      let indexedData = addIndexToObjects(data)
      if (indexedData.length > 0) {
        setBeats(indexedData);
        getSpotlight(indexedData);
      }
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
    document.addEventListener("click", handleClickOutsideCart);
  }, []);
  const cartContainerRef = useRef(null);

  function handleClickOutsideCart(event) {
    if (!cartContainerRef.current.contains(event.target) && cartRef.current.open) {
      setCart((cart) => ({ ...cart, open: false }));
    }
  }
  useEffect(() => {
    cartRef.current = cart;
  }, [cart]);


  return (
    <div className="App min-h-screen max-w-screen-2xl mx-auto">
      <Header
        cart={cart}
        setCart={setCart}
        setIsContactDialogOpen={setIsContactDialogOpen}
      />
      <Cart
        cart={cart}
        setCart={setCart}
        cartContainerRef={cartContainerRef}
      />
      <Spotlight
        setCurrentBeat={setCurrentBeat}
        isPlaying={isPlaying}
        spotlight={spotlight}
        cheapestLicense={cheapestLicense}
        setDialogState={setDialogState}
      />
      <SearchBar
        getBeats={getBeats} />
      <Catalog
        beats={beats}
        setCurrentBeat={setCurrentBeat}
        cheapestLicense={cheapestLicense}
        setDialogState={setDialogState}
      />

      <Player className="max-w-screen-2xl" //not working
        beats={beats}
        setCurrentBeat={setCurrentBeat} currentBeat={currentBeat}
        setSpotlight={setSpotlight}
        isPlaying={isPlaying} setIsPlaying={setIsPlaying}
        cheapestLicense={cheapestLicense}
        setDialogState={setDialogState}
      />

      <Dialog
        dialogRef={dialogRef}
        setDialogState={setDialogState}
        dialogState={dialogState}
        setCart={setCart}
        cart={cart}
      />

      <ContactDialog
        contactDialogRef={contactDialogRef}
        setIsContactDialogOpen={setIsContactDialogOpen}
        isContactDialogOpen={isContactDialogOpen}
      />

    </div>

  );
}

export default App;
