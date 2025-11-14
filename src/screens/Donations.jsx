import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import MosqueDisplay from "../components/DonationsComponents/MosqueDisplay";
import DonationsDashboard from "../components/DonationsComponents/DonationsDashboard";

export default function Donations() {
    return (
        <Container className="py-4">
            <Card className="p-4">
                <MosqueDisplay />
                <DonationsDashboard />
            </Card>
        </Container>
    );
}


// TODO (Notes for Anas)
// Make sure bar is smooth (check when it is empty, midway, full)
// Make donate button actually works (by having a modal where you can actually donate (hypothetically))
// Update bar based on donations (session storage or local someething like that)

// Some Notes sujestions to be done later
// Adjust header (logo, make it clear that this page is selected)