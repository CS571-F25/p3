import { Card } from "react-bootstrap";

import icmExterior from "../../assets/icm-exterior.jpg";
import icmInterior from "../../assets/icm-interior.jpg";
import quranImg from "../../assets/quran.jpg";
import diyaaImg from "../../assets/brotherdiyaa.jpg";

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

export default function AboutAndGallerySection() {
  return (
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
            The Islamic Center of Madison is the oldest of the three mosques in
            Madison and has been a hub of activity for the local Muslim
            community for decades. It was originally established by university
            students who wanted a dedicated place for the five daily prayers
            near campus.
          </p>
          <p style={{ lineHeight: 1.6 }}>
            Today the masjid serves a diverse community of UW–Madison students,
            faculty, families, and long-time residents. Regular programs include
            daily salah, Jumu‘ah, Qur&apos;an and Arabic classes for children
            and adults, weekly Islamic school, and study circles throughout the
            week.
          </p>
          <p style={{ lineHeight: 1.6 }}>
            Beyond worship, the center runs a weekly food pantry in partnership
            with local organizations, hosts women&apos;s gatherings, and
            welcomes campus and interfaith groups who want to learn about Islam.
            Many of these efforts are supported by donations from local
            families, UW alumni, and friends of the community around the world.
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
  );
}
