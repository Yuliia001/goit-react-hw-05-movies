import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPoster } from 'services/getPoster';

export const MovieDetails = ({ movieDetails }) => {
  const location = useLocation();
  const goBackPath = useRef(location.state?.from ?? '/');

  return (
    <div>
      <Link to={goBackPath.current}>Go back</Link>
      <div>
        <img
          src={getPoster(movieDetails.poster_path)}
          width={250}
          alt={movieDetails.title}
        />
        <h2>{movieDetails.title}</h2>
        <h2>User Score:</h2>
        <p>{Math.floor(movieDetails.popularity)}%</p>
        <h2>Overview</h2>
        <p>{movieDetails.overview}%</p>
        <h2>Genres</h2>
        <p>{movieDetails.genres.map(({ name }) => name).join(', ')}</p>
      </div>
    </div>
  );
};
