import RequestApi from '../../hooks/RequestAPI';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Box, Item } from './Home.styled';

export function Home(filmId) {
  const [trendFilm, setTrendFilm] = RequestApi(); // eslint-disable-line
  const [idFilmUrl, setIdFilm] = useState(null);

  return (
    <Box>
      <h1>Trending today</h1>
      <ul>
        {trendFilm
          ? trendFilm.map(({ original_title, id }) => (
              <Item key={id}>
                <NavLink
                  to={`${original_title
                    .toLowerCase()
                    .replace(':', '')
                    .replaceAll(' ', '-')}`}
                >
                  {original_title}
                </NavLink>
              </Item>
            ))
          : null}
      </ul>
    </Box>
  );
}
export default Home;
