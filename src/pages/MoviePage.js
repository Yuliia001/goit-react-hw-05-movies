import { useState, useEffect } from 'react';
import { Error } from 'components/Error/Error.styled';
import { Loader } from 'components/Loader/Loader';
import { getSearchMovie } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';

export default function MoviePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    async function searchMovie() {
      try {
        setIsLoading(true);
        setError(null);
        const searchQuery = await getSearchMovie(query);
        setMovies(searchQuery);
      } catch (error) {
        setError('Oops! Something went wrong. Please reload the page.');
      } finally {
        setIsLoading(false);
      }
    }
    searchMovie();
  }, [query]);

  return (
    <div>
      <SearchBar setSearchParams={setSearchParams} />
      {movies.length > 0 && (
        <MoviesList title="Search Results" movies={movies} />
      )}
      {isLoading && <Loader />}
      {error && <Error>{error}</Error>}
    </div>
  );
}
