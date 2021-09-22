import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Image, Nav } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="white">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onFocus={() => {
                {
                  <h1>Heloow</h1>;
                }
              }}
            >
              Individual
            </Nav.Link>
            <Nav.Link href="#features">Buiseness</Nav.Link>
            <Nav.Link href="#pricing">Partners</Nav.Link>
            <Nav.Link href="#pricing">Usefull Info</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
