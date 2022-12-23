import { NavLink, useLocation } from 'react-router-dom';

import { Item } from './ListFilm.styled';

export function ItemLink({ title, id }) {
  const location = useLocation();
  return (
    <>
      <Item>
        <NavLink
          to={`/movies/${id}/${title
            .toLowerCase()
            .replace(':', '')
            .replaceAll(' ', '-')}`}
          state={{ from: location }}
        >
          {title}
        </NavLink>
      </Item>
    </>
  );
}

export default ItemLink;
