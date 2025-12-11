import ProgramsCategoryCard from "./ProgramsCategoryCard";

export default function ProgramsSection() {
  return (
    <section style={{ padding: "2.5rem 8vw 4rem" }}>
      <h2>Programs &amp; Activities</h2>
      <p
        style={{
          maxWidth: "52rem",
          lineHeight: 1.6,
          marginBottom: "1.5rem",
        }}
      >
        Below are some of the regular activities that take place at the Islamic
        Center of Madison throughout the year.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem",
        }}
      >
        <ProgramsCategoryCard
          title="Worship & Learning"
          items={[
            "Five daily prayers and Friday Jumu‘ah",
            "Weekly Islamic school for children",
            "Qur'an and Arabic classes for youth and adults",
            "Evening study circles and guest lectures",
          ]}
        />

        <ProgramsCategoryCard
          title="Community Support"
          items={[
            "Wednesday food pantry in partnership with local charities",
            "Zakat and sadaqah collection and distribution",
            "Counseling, marital services, and funeral support",
            "Volunteers helping new students and families settle in Madison",
          ]}
        />

        <ProgramsCategoryCard
          title="Ramadan & Special Events"
          items={[
            "Community iftars and nightly taraweeh prayers",
            "Daily iftars for students and individuals away from family",
            "Qur'an competitions and youth programs",
            "Eid prayers and celebrations open to the wider community",
          ]}
        />

        <ProgramsCategoryCard
          title="Global Connections"
          items={[
            "Fundraising drives for relief efforts overseas",
            "Partnerships with national humanitarian organizations",
            "Alumni and former community members supporting the center",
            "Visitors from across the world stopping to pray and connect",
          ]}
        />
      </div>
    </section>
  );
}
