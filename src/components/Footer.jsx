
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer
      className="text-light py-4 mt-5 w-100"
      style={{ backgroundColor: '#003f69' }}
    >
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h5>Censo Escolar</h5>
            <p>Dados do Censo Escolar 2025 - Paraíba.</p>
          </Col>

          <Col xs={12} md={6}>
            <h5 className="mb-3">Links úteis</h5>

            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="text-light">
                Home
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/instituicoesensino"
                className="text-light"
              >
                Instituições de Ensino
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <Row>
          <Col className="text-center">
            © {new Date().getFullYear()} Censo Escolar - IFPB.
            Todos os direitos reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
