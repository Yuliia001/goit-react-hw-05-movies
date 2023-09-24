import { Error } from 'components/Error/Error.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/MovieDeails/MovieDetails';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    getMovieDetails();
  }, [movieId, movieDetails]);

  return (
    <div>
      {isLoading && <Loader />}
      {!error && <MovieDetails movieDetails={movieDetails} />}
      {error && <Error>{error}</Error>}
    </div>
  );
}
