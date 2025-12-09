import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";

export default function DonationRow({ title, description, image, onDonate }) {
    return (
        <Card className="mb-4 shadow-sm p-4 border-0 rounded-4">
            <Row className="align-items-center g-4">

                {/* LEFT — IMAGE */}
                <Col md={4} className="d-flex justify-content-center">
                    <img
                        src={image}
                        alt={`Visual representation related to ${title}`}
                        className="img-fluid rounded-3"
                        style={{
                            maxHeight: "220px",
                            objectFit: "cover",
                            width: "100%"
                        }}
                    />
                </Col>

                {/* RIGHT — TEXT + BUTTON */}
                <Col md={8}>

                    <div className="d-flex flex-column h-100 justify-content-between">

                        <div>
                            <h3 className="fw-bold mb-2">{title}</h3>
                            <p className="text-muted mb-4" style={{ fontSize: "1.05rem" }}>
                                {description}
                            </p>
                        </div>

                        <div
                            style={{
                                alignContent: "right",
                            }}
                        >
                            <Button
                                variant="none"
                                style={{ backgroundColor: "#8A6F55", borderColor: "#8A6F55" }}
                                className="text-white px-4 py-2 rounded-3 fw-semibold mt-2"
                                size="lg"
                                onClick={onDonate}
                            >
                                Donate
                            </Button>
                        </div>

                    </div>

                </Col>

            </Row>
        </Card>
    );
}
