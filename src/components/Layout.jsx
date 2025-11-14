import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">

      {/* NAVBAR */}
      <Navbar expand="lg" className="border-bottom">
        <Container>
          <Navbar.Brand 
            as={Link} 
            to="/" 
            className="fw-bold fs-3"
            style={{ color: "var(--text-main)" }}
          >
            🕌 ICM
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" />

          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto gap-3">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/donations">Donate</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* MAIN */}
      <main className="flex-grow-1 py-4">
        <Container>
          <Outlet />
        </Container>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-3 border-top mt-auto">
        <small>© 2025 Islamic Center of Madison</small>
      </footer>

    </div>
  );
}
