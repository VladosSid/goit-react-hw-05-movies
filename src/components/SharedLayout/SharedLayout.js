import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Nav from '../Nav';

export function SharedLayout() {
  return (
    <>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default SharedLayout;
