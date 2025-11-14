import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import mosqueImage from "../../assets/Mosque3D.png";

export default function MosqueDisplay() {
  return (
    <Row className="align-items-center py-4">
      {/* LEFT — TEXT CONTENT */}
      <Col lg={6} className="mb-4 mb-lg-0">
        <h2 className="mb-3" style={{ fontWeight: "700" }}>
          Support Our Masjid Project
        </h2>

        <p className="mb-3" style={{ fontSize: "1.1rem", color: "var(--text-muted)" }}>
          Your contribution helps maintain and improve our beloved mosque —
          ensuring it remains a welcoming and spiritually uplifting place for
          worship, education, and community gatherings.
        </p>

        <p className="mb-4" style={{ fontStyle: "italic" }}>
          “Whoever builds a mosque for the sake of Allah, Allah will build for
          him a house in Paradise.” — Prophet Muhammad ﷺ
        </p>

        {/* <Button variant="primary" size="lg">
          Learn More
        </Button> */}
      </Col>

      {/* RIGHT — MOSQUE IMAGE */}
      <Col lg={6} className="d-flex justify-content-center">
        <img
          src={mosqueImage}
          alt="Mosque"
          style={{
            maxWidth: "100%",
            height: "auto",
            // borderRadius: "12px",
            // boxShadow: "0px 4px 18px rgba(0,0,0,0.08)",
          }}
        />
      </Col>
    </Row>
  );
}
