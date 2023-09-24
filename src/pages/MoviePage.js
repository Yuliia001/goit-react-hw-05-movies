import { useState, useEffect } from 'react';
import { Error } from 'components/Error/Error.styled';
import { Loader } from 'components/Loader/Loader';
import { getSearchMovie } from 'services/api';
import { useSearchParams } from 'react-router-dom';

export default function MoviePage() {
  const [searchMovie, setSearchMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
}

//   useEffect(() => {
//     async function getMovieDetails() {
//       try {
//         setIsLoading(true);
//         setError(null);
//         const movieData = await getMovieById(movieId);
//         setMovieDetails(movieData);
//       } catch (error) {
//         setError('Oops! Something went wrong. Please reload the page.');
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     if (movieId) {
//       getMovieDetails();
//     }
//   }, [movieId]);

//   return (
//     <div>
//       {isLoading && <Loader />}
//       <div>MoviePage</div>;
//       {error && <Error>{error}</Error>}
//     </div>
//   );
// }
