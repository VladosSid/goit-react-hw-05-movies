import { Routes, Route } from 'react-router-dom';

import SharedLayout from './SharedLayout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import CardFilm from '../pages/CardFilm';
import { Cast, Reviews } from '../components/CardFilm';

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
