import { IMG_PATH } from '../utils';

import { Container } from './BaseInfoFilm.styled';

export function BaseInfoFilm({ dataFilm }) {
  const { original_title, overview, vote_average, genres, poster_path } =
    dataFilm;

  return (
    <>
      <Container>
        <img src={`${IMG_PATH}w300${poster_path}`} alt="Poster Film" />

        <ul>
          <li>
            <h2>{original_title}</h2>
          </li>

          <li>User Score: {vote_average}</li>

          <li>
            <h3>Overview: </h3>
            {overview}
          </li>

          <li>
            <h4>Genres:</h4>
            {genres ? genres.map(({ name }) => `${name}`).join(', ') : ''}
          </li>
        </ul>
      </Container>
    </>
  );
}

export default BaseInfoFilm;
