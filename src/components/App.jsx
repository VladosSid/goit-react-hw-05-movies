import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLayout';
import Cast from './Cast';
import Reviews from './Reviews';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const CardFilm = lazy(() => import('../pages/CardFilm'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id/:nameFilm" element={<CardFilm />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
