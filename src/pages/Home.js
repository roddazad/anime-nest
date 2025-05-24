import {React, useState, useEffect} from 'react';

import Hero from '../components/Hero';
import Spinner from '../components/Spinner';
import AnimeCard from '../components/AnimeCard';



const Home = () => {
     const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Fetch logic will go here soon!
  };

    return (
        <>

         <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
        {/* <Spinner />
        <AnimeCard /> */}

        </>

      );
}
 
export default Home;