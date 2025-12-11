import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import prayerImage from "../../assets/masjidPic.jpeg";

const PRAYERS_TO_SHOW = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

function to12Hour(time24) {
  if (!time24) return "";
  const [h, m] = time24.split(":");
  let hour = parseInt(h, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${m} ${ampm}`;
}

export default function PrayerTimesSection() {
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
    <section
      id="prayer-times"
      style={{
        padding: "2.5rem 8vw 3rem",
        backgroundColor: "#f0e7d8",
      }}
    >
      <h2
        style={{
          marginBottom: "0.5rem",
          color: "#111111",
        }}
      >
        Today&apos;s Salah Times
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "2 1 320px", minWidth: "280px" }}>
          {loading && (
            <p style={{ color: "#111111" }}>Loading prayer times…</p>
          )}

          {error && (
            <p style={{ color: "#8B0000", maxWidth: "30rem" }}>{error}</p>
          )}

          {!loading && !error && timings && (
            <>
              <p
                style={{
                  marginBottom: "1rem",
                  fontSize: "0.95rem",
                  color: "#111111",
                }}
              >
                {dateInfo?.readable} — {metaInfo?.timezone}
                <br />
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: "#111111",
                  }}
                >
                  Times provided by the AlAdhan prayer times API.
                </span>
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(130px, 1fr))",
                  gap: "0.75rem",
                  maxWidth: "640px",
                }}
              >
                {PRAYERS_TO_SHOW.map((name) => (
                  <Card
                    key={name}
                    className="shadow-sm prayer-card"
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "18px",
                      border: "1px solid #d0c4b4",
                    }}
                  >
                    <Card.Body
                      className="text-center"
                      style={{
                        padding: "0.85rem 0.5rem",
                        color: "#000000",
                      }}
                    >
                      <Card.Title
                        style={{
                          fontSize: "0.95rem",
                          marginBottom: "0.25rem",
                          fontWeight: 700,
                          color: "#000000",
                        }}
                      >
                        {name}
                      </Card.Title>
                      <Card.Text
                        style={{
                          marginBottom: 0,
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "#000000",
                        }}
                      >
                        {to12Hour(timings[name])}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>

        <div style={{ flex: "1 1 260px", minWidth: "220px" }}>
          <img
            src={prayerImage}
            alt="Person prostrating in prayer inside a mosque"
            style={{
              width: "100%",
              maxWidth: "360px",
              display: "block",
              borderRadius: "20px",
              objectFit: "cover",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
