import { Col } from "react-bootstrap";

export default function ContactDetails() {
    return (
        <Col md={6} className="mb-4">
            <h4>Islamic Center of Madison</h4>
            <p style={{ lineHeight: 1.6 }}>
                21 N Orchard St<br />
                Madison, WI 53715<br />
                United States
            </p>

            <h5 className="mt-3">General Email</h5>
            <p>contact@icm-madison.org</p>

            <h5 className="mt-3">Phone</h5>
            <p>(608) 555-1234</p>

            <h5 className="mt-3">Imam / Leadership</h5>
            <p>imam@icm-madison.org</p>
        </Col>
    );
}
