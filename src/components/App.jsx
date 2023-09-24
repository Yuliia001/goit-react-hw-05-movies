// import Home from 'pages/HomePage';
// import MovieDetailsPage from 'pages/MovieDetailsPage';
// import MoviePage from 'pages/MoviePage';
// // import Cast from 'components/Cast';
// // import Review from 'components/Reviews';
// import { Routes, Route } from 'react-router-dom';

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/movies" element={<MoviePage />} />
//       <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
//       {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
//         <Route path="/movies/:movieId/reviews" element={<Review />} /> */}
//     </Routes>
//   );
// };

import Home from 'pages/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import MoviePage from 'pages/MoviePage';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<MoviePage />} />
      <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
    </Routes>
  );
};
