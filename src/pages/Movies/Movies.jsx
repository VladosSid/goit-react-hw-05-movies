import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react'; // eslint-disable-line

export function Movies() {
  const [queryValue, setQueryValue] = useState('');

  return (
    <>
      <form>
        <input
          type="text"
          value={queryValue}
          onChange={e => {
            setQueryValue(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <Outlet />
    </>
  );
}

export default Movies;
