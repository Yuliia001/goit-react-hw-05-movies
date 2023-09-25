import { Routes, Route } from 'react-router-dom';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { lazy } from 'react';

const Home = lazy(() => import('pages/HomePage'));
const MoviePage = lazy(() => import('pages/MoviePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
// const Cast = lazy(() => import('../components/Cast/Cast'));
// const Reviews = lazy(() => import('../components/Reviews/Reviews'));

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
