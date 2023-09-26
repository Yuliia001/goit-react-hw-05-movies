import { useState, useEffect } from 'react';
import { Error } from 'components/Error/Error.styled';
import { Loader } from 'components/Loader/Loader';
import { getMovieCast } from 'services/api';
import { useParams } from 'react-router-dom';
import { CastList } from './CastList';

export default function Cast() {
  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCastMovie() {
      try {
        setIsLoading(true);
        setError(null);
        const dataCast = await getMovieCast(movieId);
        setMovieCast(dataCast);
      } catch (error) {
        setError('Oops! Something went wrong. Please reload the page.');
      } finally {
        setIsLoading(false);
      }
    }
    if (movieId) {
      getCastMovie();
    }
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {movieCast && <CastList movieCast={movieCast} />}
      {error && <Error>{error}</Error>}
    </div>
  );
}
