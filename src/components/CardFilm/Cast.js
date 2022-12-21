import { useParams } from 'react-router-dom';

import { IMG_PATH } from '../utils';
import RequestCast from '../../hooks/RequestApiSecondary';

export function Cast() {
  const { id } = useParams();
  const [cast, setCast] = RequestCast('credits', id); // eslint-disable-line

  return (
    <>
      {cast
        ? cast.cast.map(({ name, profile_path }) => (
            <li key={name}>
              <img src={`${IMG_PATH}w200${profile_path}`} alt="Profile Path" />
              <p>{name}</p>
            </li>
          ))
        : null}
    </>
  );
}
export default Cast;
