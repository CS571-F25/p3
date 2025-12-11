// src/components/HomeComponents/ProgramsCategoryCard.jsx
import { Card } from "react-bootstrap";

export default function ProgramsCategoryCard({ title, items }) {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ul
          style={{
            paddingLeft: "1.25rem",
            marginBottom: 0,
            lineHeight: 1.6,
          }}
        >
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}
