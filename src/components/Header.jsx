
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
      <Navbar
        expand="lg"
        className="bg-body-tertiary w-100"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Censo Escolar
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="header-navbar" />

          <Navbar.Collapse id="header-navbar">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/instituicoesensino">
                Instituições de Ensino
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
