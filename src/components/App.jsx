import { Routes, Route } from 'react-router-dom';
import Home from 'pages/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import MoviePage from 'pages/MoviePage';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
