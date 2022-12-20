import RequestApi from '../../hooks/RequestAPI';
import { NavLink } from 'react-router-dom';

import { Box, Item } from './Home.styled';

export function Home() {
  const [trendFilm, setTrendFilm] = RequestApi(); // eslint-disable-line
  return (
    <Box>
      <h1>Trending today</h1>
      <ul>
        {trendFilm
          ? trendFilm.map(({ original_title, id }) => (
              <Item key={id}>
                <NavLink
                  to={`movies/${id}/${original_title
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
