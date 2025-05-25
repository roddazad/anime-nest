import {React, useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Navbar from '../src/components/Navbar';

function App() {
  const [favorites, setFavorites] = useState([]);
const [isHydrated, setIsHydrated] = useState(false);

// Load on first mount
useEffect(() => {
  try {
    const storedFavorites = localStorage.getItem('animeFavorites');
    console.log("Loaded from localStorage:", storedFavorites);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
    setIsHydrated(true); // ✅ Mark as loaded
  } catch (error) {
    console.error("Error loading from localStorage:", error);
  }
}, []);

// Save only after it's hydrated
useEffect(() => {
  if (isHydrated) {
    console.log("Favorites updated in App.js:", favorites);
    localStorage.setItem('animeFavorites', JSON.stringify(favorites));
  }
}, [favorites, isHydrated]);


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Home
            favorites={favorites}
            setFavorites={setFavorites}
          />
        } />
        <Route path="/favorites" element={
          <Favorites
            favorites={favorites}
            setFavorites={setFavorites}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;
