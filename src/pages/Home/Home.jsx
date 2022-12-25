import { useRequestAPI } from '../../hooks/RequestAPI/HooksRequestAPI';
import { useEffect } from 'react';

import { Box } from './Home.styled';
import ItemLink from '../../components/ItemLink';

export function Home() {
  const { state, setHomePopularity } = useRequestAPI();

  useEffect(() => {
    setHomePopularity(true);
  }, []); // eslint-disable-line

  return (
    <Box>
      <h1>Trending today</h1>

      <ul>
        {state
          ? state.map(({ original_title, id }) => (
              <ItemLink key={id} title={original_title} id={id} />
            ))
          : null}
      </ul>
    </Box>
  );
}
export default Home;
