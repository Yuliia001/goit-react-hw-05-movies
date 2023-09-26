import { Suspense, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getPoster } from 'services/getPoster';
import {
  BackLink,
  ListInfo,
  StyledLink,
  Wrapper,
  WrapperInfo,
} from './Moviedetails.styled';

export const MovieDetails = ({ movieDetails }) => {
  const location = useLocation();
  const goBackPath = useRef(location.state?.from ?? '/');

  return (
    <div>
      <BackLink to={goBackPath.current}>Go back</BackLink>
      <Wrapper>
        <img
          src={getPoster(movieDetails.poster_path)}
          width={250}
          alt={movieDetails.title}
        />
        <WrapperInfo>
          <h2>{movieDetails.title}</h2>
          <h2>User Score:</h2>
          <p>{Math.floor(movieDetails.popularity)}%</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}%</p>
          <h2>Genres</h2>
          <p>{movieDetails.genres.map(({ name }) => name).join(', ')}</p>
        </WrapperInfo>
      </Wrapper>
      <h2>Additional Information</h2>
      <ListInfo>
        <li>
          <StyledLink to={'cast'}>Cast</StyledLink>
        </li>
        <li>
          <StyledLink to={'reviews'}>Reviews</StyledLink>
        </li>
      </ListInfo>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
