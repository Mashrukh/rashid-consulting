import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">DG Consulting</Navbar.Brand>
          <Nav className="justify-content-end">
            <NavDropdown title="Our Services" id="ourServices">
              <NavDropdown.Item href="/stormwater">
                Stormwater Management
              </NavDropdown.Item>
              <NavDropdown.Item href="/overflow">
                Floodwater Risk Analysis
              </NavDropdown.Item>
              <NavDropdown.Item href="/cad">CAD Design</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/testimonial">Testimonial</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default Navigation;
