import { useState, useEffect } from 'react';
import { Error } from 'components/Error/Error.styled';
import { Loader } from 'components/Loader/Loader';
import { getSearchMovie } from 'services/api';
import { useSearchParams } from 'react-router-dom';

export default function MoviePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    async function searchMovie() {
      try {
        setIsLoading(true);
        setError(null);
        await getSearchMovie(query);
      } catch (error) {
        setError('Oops! Something went wrong. Please reload the page.');
      } finally {
        setIsLoading(false);
      }
    }
    searchMovie();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const value = evt.target.query.value;

    setSearchParams({ query: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Search for movies" />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      {error && <Error>{error}</Error>}
    </div>
  );
}
