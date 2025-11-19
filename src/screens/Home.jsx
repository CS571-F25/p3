import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import icmExterior from "../assets/icm-exterior.jpg";
import icmInterior from "../assets/icm-interior.jpg";
import quranImg from "../assets/quran.jpg";
import diyaaImg from "../assets/brotherdiyaa.jpg";

const PRAYERS_TO_SHOW = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

function to12Hour(time24) {
  if (!time24) return "";
  const [h, m] = time24.split(":");
  let hour = parseInt(h, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${m} ${ampm}`;
}

export default function Home() {
  const [timings, setTimings] = useState(null);
  const [dateInfo, setDateInfo] = useState(null);
  const [metaInfo, setMetaInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPrayerTimes() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          "https://api.aladhan.com/v1/timingsByCity?city=Madison&state=WI&country=USA&method=2&school=1"
        );
        if (!res.ok) throw new Error("Failed to load prayer times");

        const json = await res.json();
        const { timings, date, meta } = json.data;

        setTimings(timings);
        setDateInfo(date);
        setMetaInfo(meta);
      } catch (err) {
        console.error(err);
        setError("Could not load prayer times. Please check again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchPrayerTimes();
  }, []);

  return (
    <main
      style={{
        backgroundColor: "#f5efe4",
        minHeight: "calc(100vh - 96px)",
      }}
    >
      <section
        style={{
          padding: "4rem 8vw 3rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          Welcome to the Islamic Center of Madison
        </h1>
        <p style={{ maxWidth: "40rem", lineHeight: 1.6 }}>
          Located next to the UW–Madison campus, the Islamic Center of Madison
          is a welcoming masjid for students, families, and visitors. Join us
          for daily prayers, Jumu‘ah, and community programs.
        </p>
        <p style={{ marginTop: "0.5rem", fontWeight: 500 }}>
          Address: 21 N Orchard St, Madison, WI 53715
        </p>
      </section>

      <section
        id="prayer-times"
        style={{
          padding: "2.5rem 8vw 3rem",
          backgroundColor: "#f0e7d8",
        }}
      >
        <h2 style={{ marginBottom: "0.5rem" }}>Today&apos;s Salah Times</h2>

        {loading && <p>Loading prayer times…</p>}
        {error && (
          <p style={{ color: "darkred", maxWidth: "30rem" }}>{error}</p>
        )}

        {!loading && !error && timings && (
          <>
            <p style={{ marginBottom: "1rem", fontSize: "0.95rem" }}>
              {dateInfo?.readable} — {metaInfo?.timezone}
              <br />
              <span style={{ fontSize: "0.85rem", color: "#555" }}>
                Times provided by the AlAdhan prayer times.
              </span>
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "0.75rem",
                maxWidth: "640px",
              }}
            >
              {PRAYERS_TO_SHOW.map((name) => (
                <Card key={name} className="shadow-sm">
                  <Card.Body
                    className="text-center"
                    style={{ padding: "0.85rem 0.5rem" }}
                  >
                    <Card.Title
                      style={{
                        fontSize: "0.95rem",
                        marginBottom: "0.25rem",
                        fontWeight: 600,
                      }}
                    >
                      {name}
                    </Card.Title>
                    <Card.Text style={{ marginBottom: 0 }}>
                      {to12Hour(timings[name])}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </>
        )}
      </section>

      <section style={{ padding: "2.5rem 8vw 3rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2.5rem",
            alignItems: "stretch",
          }}
        >
          <div style={{ flex: "1 1 320px", minWidth: "280px" }}>
            <h2>About the Masjid</h2>
            <p style={{ lineHeight: 1.6 }}>
              The Islamic Center of Madison serves as a hub for the Muslim
              community in downtown Madison. We host the five daily prayers,
              Jumu‘ah, educational programs, and community events throughout
              the year.
            </p>
            <p style={{ lineHeight: 1.6 }}>
              Whether you are a UW student, a long-time resident, or a visitor,
              you are always welcome to pray with us and connect with the
              Madison Muslim community.
            </p>
          </div>

          <div
            style={{
              flex: "1 1 420px",
              minWidth: "320px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {[icmExterior, icmInterior, quranImg, diyaaImg].map((src, idx) => (
                <Card
                  key={idx}
                  className="shadow-sm"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    height: "260px",
                  }}
                >
                  <Card.Img
                    src={src}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
