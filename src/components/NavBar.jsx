import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    // <Navbar bg="dark" variant="dark"  sticky="top">
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Devices</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
