import { Link, useParams } from 'react-router-dom';

import RequestCast from '../../hooks/RequestApiSecondary';

export function Cast() {
  const { id } = useParams();
  //   const cast = RequestCast('credits', id);
  const [cast, setCast] = RequestCast('credits', id); // eslint-disable-line

  console.log(cast);
  return (
    <>{cast ? cast.cast.map(({ name }) => <li key={name}>{name}</li>) : null}</>
  );
}
export default Cast;
