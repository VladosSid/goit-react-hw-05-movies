import { Link, Header } from './Nav.styled';

export function Nav() {
  return (
    <>
      <Header>
        <Link to="/" end>
          <b>Home</b>
        </Link>
        <Link to="/movies">
          <b>Movies</b>
        </Link>
      </Header>
    </>
  );
}

export default Nav;
