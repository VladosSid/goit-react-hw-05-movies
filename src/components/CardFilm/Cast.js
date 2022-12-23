import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { IMG_PATH } from '../utils';
import { useRequestAPI } from '../../hooks/RequestAPI/HooksRequestAPI';

export function Cast() {
  const { stateCast, setMoviesCastReviews } = useRequestAPI();
  const { id } = useParams();

  useEffect(() => {
    setMoviesCastReviews({ id: id, type: 'credits' });
  }, []); // eslint-disable-line

  return (
    <>
      {stateCast
        ? stateCast.cast.map(({ name, profile_path, id }) => (
            <li key={id}>
              <img src={`${IMG_PATH}w200${profile_path}`} alt="Profile Path" />
              <p>{name}</p>
            </li>
          ))
        : null}
    </>
  );
}
export default Cast;
