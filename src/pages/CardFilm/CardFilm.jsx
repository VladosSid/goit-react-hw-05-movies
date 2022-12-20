import { useParams, Outlet, Link } from 'react-router-dom';

import RequestApi from '../../hooks/RequestAPI';
import { CardInfoFilm } from '../../components/CardFilm';

import { Container, Button } from './CardFilm.styled';

export function CardFilm() {
  const { id } = useParams();
  const [dataFilm, setDataFilm] = RequestApi(null, id); // eslint-disable-line

  return (
    <Container>
      <Button>
        <b>Go back</b>
      </Button>

      {dataFilm ? <CardInfoFilm dataFilm={dataFilm} /> : null}

      <div>
        Additional information
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>

          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </Container>
  );
}

export default CardFilm;
