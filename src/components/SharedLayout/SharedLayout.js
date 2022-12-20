import { Outlet } from 'react-router-dom';

import Nav from '../Nav';

export function SharedLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default SharedLayout;
