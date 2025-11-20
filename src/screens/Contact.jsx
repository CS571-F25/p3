import { Container, Card, Row, Col } from "react-bootstrap";

export default function Contact() {
    return (
        <main
            style={{
                backgroundColor: "#f5efe4",
                minHeight: "calc(100vh - 96px)",
                padding: "3rem 8vw",
            }}
        >
            <Container>
                <Card className="p-4 shadow-sm">
                    <h1 style={{ marginBottom: "1rem" }}>Contact Us</h1>

                    <p style={{ maxWidth: "40rem", lineHeight: 1.6 }}>
                        We’re here to help. Whether you have questions about
                        prayer times, programs, events, or general inquiries,
                        feel free to reach out using the information below.
                    </p>

                    <Row className="mt-4">
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

                        <Col md={6}>
                            <div
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                                }}
                            >
                                <iframe
                                    title="Islamic Center of Madison Location"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.440289037046!2d-89.408933784521!3d43.07419637914551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8807accf30d1bd7b%3A0x6264072d855268d!2sIslamic%20Center%20of%20Madison!5e0!3m2!1sen!2sus!4v1697660000000!5m2!1sen!2sus"
                                />
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </main>
    );
}
