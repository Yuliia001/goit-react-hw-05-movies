import { MovieItem } from 'components/MovieItem/MovieItem';
import { Title } from './MoviesTitle.styled';

export const MoviesList = ({ title, movies }) => {
  return (
    <ul>
      {movies.length > 0 && <Title>{title}</Title>}
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie}></MovieItem>
      ))}
    </ul>
  );
};
