const Card = ({ title, overview, vote_average, popularity }) => {
  return (
    <div className="movie">
      <h2 className="movie-title">{title}</h2>
      <p>{overview}</p>
      <p>Rating: {vote_average}/10</p>
      <p>Popularity: {popularity}</p>
    </div>
  );
};

export default Card;
