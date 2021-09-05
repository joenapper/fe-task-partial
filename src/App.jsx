import { fetchGenres, fetchMovies } from './api'; // you may add functionality to these functions, but please use them
import './styles.css'; // have a look at this file and feel free to use the classes
import Genre from './components/Genre';
import Card from './components/Card';

export default function App() {
  return (
    <main>
      <h1>
        <span>
          <span role="img" aria-label="Popcorn emoji">
            🍿
          </span>{' '}
          Now playing
        </span>
      </h1>

      <section>
        <Genre />
      </section>

      <section>
        <Card />
      </section>
    </main>
  );
}
