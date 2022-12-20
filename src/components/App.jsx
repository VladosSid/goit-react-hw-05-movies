import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// import Nav from './Nav';
import SharedLayout from './SharedLayout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import CardFilm from '../pages/CardFilm';

export const App = () => {
  const [carrentFilm, setCarrentFilm] = useState(null);

  const currentIdFilm = id => {
    setCarrentFilm(id);
    console.log(carrentFilm);
  };

  return (
    <div>
      {/* <Nav /> */}
      {/* <SharedLayout /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id/:nameFilm" element={<CardFilm />} />
        </Route>
      </Routes>
    </div>
  );
};
