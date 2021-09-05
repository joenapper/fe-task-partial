import { useState, useEffect } from 'react';
import { fetchGenres, fetchMovies } from './api'; // you may add functionality to these functions, but please use them
import './styles.css'; // have a look at this file and feel free to use the classes
import Genre from './components/Genre';
import Card from './components/Card';

export default function App() {
  const [genres, setGenres] = useState(null);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const genresResponse = await fetchGenres();
        const genresData = await genresResponse.json();
        setGenres(genresData);

        const moviesResponse = await fetchMovies();
        const moviesData = await moviesResponse.json();
        setMovies(moviesData);
      } catch (e) {
        console.log(e);
      }
    }

    getData();
  }, []);

  const popularityOrderedMovies = movies?.sort(function (a, b) {
    return b.popularity - a.popularity;
  });

  return (
    <main className="container">
      <h1>
        <span>
          <span role="img" aria-label="Popcorn emoji">
            🍿
          </span>{' '}
          Now playing
        </span>
      </h1>

      <section className="genres-list">
        {genres?.map(({ id, name }) => (
          <Genre key={id} id={id} name={name} />
        ))}
      </section>

      <section className="movies">
        {popularityOrderedMovies?.map(
          ({
            id,
            title,
            overview,
            vote_average,
            popularity,
            poster_path,
            genre_ids,
          }) => (
            <Card
              key={id}
              title={title}
              overview={overview}
              vote_average={vote_average}
              popularity={popularity}
              poster_path={poster_path}
              genre_ids={genre_ids}
            />
          )
        )}
      </section>
    </main>
  );
}
