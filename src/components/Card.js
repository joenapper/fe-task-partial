const Card = ({ title, overview, vote_average, popularity, poster_path }) => {
  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="movie-image"
        style={{ height: 400, objectFit: 'cover', objectPosition: 'top' }}
      />

      <div className="movie-content">
        <h2 className="movie-title">{title}</h2>
        <p>{overview}</p>
        <p>Rating: {vote_average}/10</p>
        <p>Popularity: {popularity}</p>
      </div>
    </div>
  );
};

export default Card;
