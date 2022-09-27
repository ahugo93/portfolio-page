import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function TopBar() {
    return (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#hucodes">HuCodes</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#aboutme">About Me</Nav.Link>
              <Nav.Link href="#github">GitHub</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    )}

