import React from 'react';
import AnimeCard from '../components/AnimeCard';
import '../css/Favorites.css'; // optional styling

function Favorites({ favorites, setFavorites}) {
    const removeFromFavorites = (animeId) => {
    const updated = favorites.filter((fav) => fav.mal_id !== animeId);
    setFavorites(updated);
  };
  return (
    <div className="favorites-page">
      <h2 className="favorites-title">Your Favorite Anime ❤️</h2>

      {favorites.length === 0 ? (
        <p className="no-favorites">No favorites yet. Go add some anime!</p>
      ) : (
        <div className="anime-grid">
          {favorites.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              title={anime.title}
              image={anime.images.jpg.image_url}
              synopsis={anime.synopsis}
              score={anime.score}
              url={anime.url}
              isFavoriteView={true}
              onRemoveFavorite={() => removeFromFavorites(anime.mal_id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;