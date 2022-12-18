import { Routes, Route } from 'react-router-dom';

import Nav from './Nav';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
export const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Home />
    </div>
  );
};
