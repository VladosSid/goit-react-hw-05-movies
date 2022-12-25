import { NavLink, useLocation } from 'react-router-dom';

import { Item } from './ItemLink.styled';

export function ItemLink({ title, id }) {
  const location = useLocation();
  // console.log(location);
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
