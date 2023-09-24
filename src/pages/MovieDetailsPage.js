import { Error } from 'components/Error/Error.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/MovieDeails/MovieDetails';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsLoading(true);
        setError(null);
        const movieData = await getMovieById(movieId);
        setMovieDetails(movieData);
      } catch (error) {
        setError('Oops! Something went wrong. Please reload the page.');
      } finally {
        setIsLoading(false);
      }
    }
    if (movieId) {
      getMovieDetails();
    }
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {!error && movieDetails && <MovieDetails movieDetails={movieDetails} />}
      {error && <Error>{error}</Error>}
    </div>
  );
}
