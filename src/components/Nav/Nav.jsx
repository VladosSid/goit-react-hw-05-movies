import { Link, Header, Container } from './Nav.styled';

export function Nav() {
  return (
    <Container>
      <Header>
        <Link to="/" end>
          <b>Home</b>
        </Link>
        <Link to="/movies">
          <b>Movies</b>
        </Link>
      </Header>
    </Container>
  );
}

export default Nav;
