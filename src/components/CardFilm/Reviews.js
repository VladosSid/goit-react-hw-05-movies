import { useParams } from 'react-router-dom';

import RequestCast from '../../hooks/RequestApiSecondary';

export function Reviews() {
  const { id } = useParams();

  const [reviews, setReviews] = RequestCast('reviews', id); // eslint-disable-line

  return (
    <ul>
      {reviews
        ? reviews.results.map(({ author, content, created_at, id }) => (
            <li key={id}>
              <div>
                <h3>{author}</h3>
                <span>{created_at}</span>
              </div>
              <p>{content}</p>
            </li>
          ))
        : 'Reviews not found'}
    </ul>
  );
}
export default Reviews;
