import React from 'react';
import '../css/AnimeCard.css'

const AnimeCard = ({image, title, score, url, synopsis, onAddFavorite, onRemoveFavorite,
  isFavoriteView}) => {
    return ( 
        <div className="anime-card">
            <img src={image} alt={title} className="anime-image" />
            <div className="anime-info">
                <h3 className="anime-title">{title}</h3>
                <p className="anime-score">⭐ {score || "N/A"}</p>
                <p className="anime-synopsis">
                {synopsis ? synopsis.slice(0, 120) + '...' : 'No description available.'}
                </p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="anime-link">
                View on MyAnimeList
                </a>
               {isFavoriteView ? (
          <button className="fav-button remove" onClick={onRemoveFavorite}>
            ❌ Remove from Favorites
          </button>
        ) : (
          <button className="fav-button" onClick={onAddFavorite}>
            ❤️ Add to Favorites
          </button>
        )}
            </div>
    </div>
     );
}
 
export default AnimeCard;