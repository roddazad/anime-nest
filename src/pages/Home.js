import {React, useState, useEffect} from 'react';
import '../css/Home.css';
import Hero from '../components/Hero';
import Spinner from '../components/Spinner';
import AnimeCard from '../components/AnimeCard';



const Home = ({ favorites, setFavorites }) => {
     const [searchTerm, setSearchTerm] = useState('');
     const [searchedAnime, setSearchedAnime] = useState([]);
     const [error, setError] = useState('');
     const [loading, setLoading] = useState(false);

     const addToFavorites = (anime) => {
  // prevent duplicates
  const alreadyExists = favorites.some((fav) => fav.mal_id === anime.mal_id);
  if (!alreadyExists) {
    setFavorites([...favorites, anime]);
  }
};

  const handleSearch = () => {
    setLoading(true);
     setError('');   
    console.log("Searching for:", searchTerm);
    // Fetch logic!
    fetch(`https://api.jikan.moe/v4/anime?q=${searchTerm}`)
    .then((res) => {
      if(!res.ok)  {
        throw new Error ("Unable to fetch data from the source...")
      } return res.json();
    })
    .then((data) => {
      console.log(data);
      setSearchedAnime(data.data);
      setLoading(false);
      setError('');
    })
    .catch((err) => {
      console.log(err);
      setError("Something went wrong. Please try again later.");
      setSearchedAnime([]);
      setLoading(false);  
    })
  };

    return (
        <>

         <Hero
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
         />
            {error && (
        <p className="error-message">{error}</p>
      )}

        {!error && loading ? (
          <Spinner />
        ) : (
          <div className="anime-grid">
            {searchedAnime.map((anime) => (
              <AnimeCard
                key={anime.mal_id}
                title={anime.title}
                image={anime.images.jpg.image_url}
                synopsis={anime.synopsis}
                score={anime.score}
                url={anime.url}
                onAddFavorite={() => addToFavorites(anime)}
              />
            ))}
          </div>
        )}
        

        </>

      );
}
 
export default Home;