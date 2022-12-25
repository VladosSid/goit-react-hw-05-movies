import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { useRequestAPI } from '../../hooks/RequestAPI/HooksRequestAPI';
import BaseInfoFilm from '../../components/BaseInfoFilm';

import { Container, Button } from './CardFilm.styled';

export function CardFilm() {
  const { state, setMoviesId } = useRequestAPI();
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setMoviesId(id);
  }, []); // eslint-disable-line

  return (
    <Container>
      <Button to={backLinkHref}>
        <b>Go back</b>
      </Button>

      {state ? <BaseInfoFilm dataFilm={state} /> : null}

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
