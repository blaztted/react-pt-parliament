import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  const [scrolling, setScrolling] = useState(false);

  // When the user scrolls down, the navbar have some shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      id="navbar"
      bg="white"
      data-bs-theme="light"
      expand="lg"
      fixed="top"
      className={scrolling ? "shadow-sm" : ""}
    >
      <Container>
        <Navbar.Brand href="#home" id="nav-title">
          GOV.pt
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="me-3">
              Assembleia
            </Nav.Link>
            <Nav.Link href="#features " className="me-3">
              Partidos
            </Nav.Link>
            <Nav.Link href="#pricing" className="me-3">
              Líderes
            </Nav.Link>
            <Nav.Link href="#pricing" className="me-3">
              Europa
            </Nav.Link>
            <Nav.Link href="#pricing" className="me-3">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
