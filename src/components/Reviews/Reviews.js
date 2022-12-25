import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useRequestAPI } from '../../hooks/RequestAPI/HooksRequestAPI';

export function Reviews() {
  const { stateCast, setMoviesCastReviews } = useRequestAPI();

  const { id } = useParams();

  useEffect(() => {
    setMoviesCastReviews({ id: id, type: 'reviews' });
  }, []); // eslint-disable-line

  return (
    <ul>
      {stateCast
        ? stateCast.results.map(({ author, content, created_at, id }) => (
            <li key={id}>
              <div>
                <h3>{author}</h3>
                <span>{created_at}</span>
              </div>
              <p>{content}</p>
            </li>
          ))
        : 'We don`t have any reviews for this movies.'}
    </ul>
  );
}
export default Reviews;
