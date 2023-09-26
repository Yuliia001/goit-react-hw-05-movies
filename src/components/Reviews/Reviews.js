import { useState, useEffect } from 'react';
import { Error } from 'components/Error/Error.styled';
import { Loader } from 'components/Loader/Loader';
import { getMovieReview } from 'services/api';
import { useParams } from 'react-router-dom';
import { ReviewsList } from './ReviewsList';

export default function Reviews() {
  const [movieReview, setMovieReview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviewMovie() {
      try {
        setIsLoading(true);
        setError(null);
        const dataReview = await getMovieReview(movieId);
        setMovieReview(dataReview);
        if (dataReview.results.length === 0) {
          setError('We dont have reviews for this movie.');
        }
      } catch (error) {
        setError('Oops! Something went wrong. Please reload the page.');
      } finally {
        setIsLoading(false);
      }
    }
    if (movieId) {
      getReviewMovie();
    }
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {movieReview && <ReviewsList movieReview={movieReview} />}
      {error && <Error>{error}</Error>}
    </div>
  );
}
