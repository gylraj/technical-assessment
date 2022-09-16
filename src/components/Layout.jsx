import { Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
