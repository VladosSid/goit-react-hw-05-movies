import { Link, Header } from './Nav.styled';

export function Nav() {
  return (
    <>
      <Header>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </Header>
    </>
  );
}

export default Nav;
