import React from "react";
import { Row, Col } from "react-bootstrap";
import mosqueImage from "../../assets/MasjidProject.png";

export default function MosqueDisplay() {
  return (
    <Row
      className="align-items-center py-4 px-2"
    >
      {/* LEFT — TEXT CONTENT */}
      <Col
        className="mb-4 mb-lg-0 pe-lg-4"
        style={{
          paddingLeft: "1rem",
          paddingRight: "1rem",
          marginTop: "0.5rem",       // softer top spacing
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontWeight: 700,
            marginBottom: "2.5rem",     // more breathing space
          }}
        >
          Help Build Our New Masjid
        </h1>

        {/* HADITH — MORE VISIBLE */}
        <h2
          style={{
            fontSize: "1.3rem",
            fontStyle: "italic",
            marginBottom: "2rem",      // deeper separation
            lineHeight: "1.45",
          }}
        >
          “Whoever builds a mosque for the sake of Allah,
          Allah will build for him a house in Paradise.” — Prophet Muhammad ﷺ
        </h2>

        {/* MAIN DESCRIPTION — STRUCTURED & SKIMMABLE */}
        <p
          className="text-muted"
          style={{
            fontSize: "1.12rem",
            lineHeight: "1.7",
            marginBottom: "2rem",
          }}
        >
          Be part of building a lasting home for prayer, learning, and community.
          Our new masjid will serve families, youth, and future generations —
          providing space for Qur’an study, Jumu’ah, Ramadan programs, and essential
          community services.
        </p>

        <p
          className="text-muted"
          style={{
            fontSize: "1.12rem",
            lineHeight: "1.7",
            marginBottom: "2rem",
          }}
        >
          Your contribution becomes <i>sadaqah jariyah</i> — a continuous charity
          that benefits you even after you leave this world. Every donation, small or
          large, helps raise walls where Allah’s name will be remembered daily.
        </p>

        <p
          className="text-muted"
          style={{
            fontSize: "1.12rem",
            lineHeight: "1.7",
          }}
        >
          Together, let’s build a place filled with prayer, knowledge, and unity.
        </p>

      </Col>


      {/* RIGHT — MOSQUE IMAGE */}
      <Col lg={6} className="d-flex justify-content-center">
        <div
        >
          <img
            src={mosqueImage}
            alt="Mosque Project"
            style={{
              width: "100%",
              aspectRatio: "1 / 1",        // makes it a perfect square
              objectFit: "cover",          // zoom/crop instead of stretching
              objectPosition: "center",    // center focus
              borderRadius: "8px",
            }}
          />
        </div>
      </Col>
    </Row>
  );
}
