export default function HeroSection() {
  return (
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
        Located next to the UW–Madison campus, the Islamic Center of Madison is
        a welcoming masjid for students, families, and visitors. Join us for
        daily prayers, Jumu‘ah, classes, and community programs.
      </p>
      <p style={{ marginTop: "0.5rem", fontWeight: 500 }}>
        Address: 21 N Orchard St, Madison, WI 53715
      </p>
    </section>
  );
}
