import { useEffect, useState } from 'react';
import { getTrending } from 'services/api';
// import toast from 'react-hot-toast';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error.styled';

export default function Home() {
  const [trendingMovies, settrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        setError(null);
        const movies = await getTrending();
        settrendingMovies(movies.results);
      } catch (error) {
        setError('Oops! Something went wrong. Please reload the page.');
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {!error && <MoviesList title="Trending movies" movies={trendingMovies} />}
      {error && <Error>{error}</Error>}
    </div>
  );
}
