import React from 'react';
import '../css/Hero.css';

function Hero({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <section className="hero">
      <h1 className="hero-title">Welcome to AnimeNest 🎥</h1>
      <p className="hero-tagline">Search for your favorite anime and build your own nest of favorites!</p>

      <div className="hero-search">
        <input
          type="text"
          placeholder="Search anime..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onSearch}>Search</button>
      </div>
    </section>
  );
}

export default Hero;