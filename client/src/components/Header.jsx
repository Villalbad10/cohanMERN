import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { logout } from "../firebase/logout";

const Header = () => {
  const { data } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3 rounded-pill mt-2"
        >
          <Container fluid className="container">
            <Navbar.Brand>
              <img
                style={{ width: "8%", marginRight: ".5rem" }}
                className="rounded-pill"
                src={data.photoUrl}
              />
              Bienvenid@ {data.displayName}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    style={{ width: "8%", marginRight: ".5rem" }}
                    className="rounded-pill"
                    src={data.photoUrl}
                  />
                  {data.displayName}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={() => dispatch(logout())}>Salir</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
