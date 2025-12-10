import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import icmExterior from "../assets/icm-exterior.jpg";
import icmInterior from "../assets/icm-interior.jpg";
import quranImg from "../assets/quran.jpg";
import diyaaImg from "../assets/brotherdiyaa.jpg";

const PRAYERS_TO_SHOW = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

const GALLERY_IMAGES = [
  {
    src: icmExterior,
    alt: "Exterior of the Islamic Center of Madison next to UW–Madison campus",
  },
  {
    src: icmInterior,
    alt: "Prayer hall inside the Islamic Center of Madison",
  },
  {
    src: quranImg,
    alt: "Open Qur'an on a stand during a study circle",
  },
  {
    src: diyaaImg,
    alt: "Community members gathered for a program at the Islamic Center of Madison",
  },
];

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
      {/* HERO / INTRO */}
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
          for daily prayers, Jumu‘ah, classes, and community programs.
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
                Times provided by the AlAdhan prayer times API.
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
              The Islamic Center of Madison is the oldest of the three mosques
              in Madison and has been a hub of activity for the local Muslim
              community for decades. It was originally established by
              university students who wanted a dedicated place for the five
              daily prayers near campus.
            </p>
            <p style={{ lineHeight: 1.6 }}>
              Today the masjid serves a diverse community of UW–Madison
              students, faculty, families, and long-time residents. Regular
              programs include daily salah, Jumu‘ah, Qur&apos;an and Arabic
              classes for children and adults, weekly Islamic school, and
              study circles throughout the week.
            </p>
            <p style={{ lineHeight: 1.6 }}>
              Beyond worship, the center runs a weekly food pantry in
              partnership with local organizations, hosts women&apos;s
              gatherings, and welcomes campus and interfaith groups who want
              to learn about Islam. Many of these efforts are supported by
              donations from local families, UW alumni, and friends of the
              community around the world.
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
              {GALLERY_IMAGES.map((img, idx) => (
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
                    src={img.src}
                    alt={img.alt}
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

      <section
        style={{
          padding: "2.5rem 8vw 3rem",
          backgroundColor: "#f0e7d8",
        }}
      >
        <h2>Our History & Community in Madison</h2>
        <p style={{ maxWidth: "52rem", lineHeight: 1.6 }}>
          When Muslim students first arrived at UW–Madison in larger numbers,
          they began praying together in borrowed classrooms and apartments.
          From that small group, the Islamic Center of Madison grew into a
          permanent masjid in the heart of downtown. Over the years, the
          community has included people from many parts of the Muslim world as
          well as Muslims who grew up in Wisconsin.
        </p>
        <p style={{ maxWidth: "52rem", lineHeight: 1.6 }}>
          The center maintains close ties with UW–Madison student
          organizations, such as the Muslim Students Association and other
          cultural groups who regularly hold events, iftars, and educational
          programs at the masjid. It is also an active partner in local
          interfaith efforts, hosting open houses, school visits, and dialogue
          events so neighbors can ask questions and get to know their Muslim
          community.
        </p>
      </section>

      <section style={{ padding: "2.5rem 8vw 4rem" }}>
        <h2>Programs & Activities</h2>
        <p style={{ maxWidth: "52rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
          Below are some of the regular activities that take place at the
          Islamic Center of Madison throughout the year.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Worship &amp; Learning</Card.Title>
              <ul style={{ paddingLeft: "1.25rem", marginBottom: 0, lineHeight: 1.6 }}>
                <li>Five daily prayers and Friday Jumu‘ah</li>
                <li>Weekly Islamic school for children</li>
                <li>Qur&apos;an and Arabic classes for youth and adults</li>
                <li>Evening study circles and guest lectures</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Community Support</Card.Title>
              <ul style={{ paddingLeft: "1.25rem", marginBottom: 0, lineHeight: 1.6 }}>
                <li>Wednesday food pantry in partnership with local charities</li>
                <li>Zakat and sadaqah collection and distribution</li>
                <li>Counseling, marital services, and funeral support</li>
                <li>Volunteers helping new students and families settle in Madison</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Ramadan &amp; Special Events</Card.Title>
              <ul style={{ paddingLeft: "1.25rem", marginBottom: 0, lineHeight: 1.6 }}>
                <li>Community iftars and nightly taraweeh prayers</li>
                <li>Daily iftars for students and individuals away from family</li>
                <li>Qur&apos;an competitions and youth programs</li>
                <li>Eid prayers and celebrations open to the wider community</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Global Connections</Card.Title>
              <ul style={{ paddingLeft: "1.25rem", marginBottom: 0, lineHeight: 1.6 }}>
                <li>Fundraising drives for relief efforts overseas</li>
                <li>Partnerships with national humanitarian organizations</li>
                <li>Alumni and former community members supporting the center</li>
                <li>Visitors from across the world stopping to pray and connect</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </section>
    </main>
  );
}

