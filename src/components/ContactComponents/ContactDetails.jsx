import { Col } from "react-bootstrap";

export default function ContactDetails() {
    return (
        <Col md={6} className="mb-4">
            <h2>Islamic Center of Madison</h2>
            <p style={{ lineHeight: 1.6 }}>
                21 N Orchard St<br />
                Madison, WI 53715<br />
                United States
            </p>

            <h3 className="mt-3">General Email</h3>
            <p>contact@icm-madison.org</p>

            <h3 className="mt-3">Phone</h3>
            <p>(608) 555-1234</p>

            <h3 className="mt-3">Imam / Leadership</h3>
            <p>imam@icm-madison.org</p>
        </Col>
    );
}
