import { Container, Card, Row } from "react-bootstrap";
import ContactHeader from "../components/ContactComponents/ContactHeader";
import ContactDetails from "../components/ContactComponents/ContactDetails";
import ContactMap from "../components/ContactComponents/ContactMap";
import ContactMSA from "../components/ContactComponents/ContactMSA";

export default function ContactPage() {
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
                    <ContactHeader />

                    <Row className="mt-4">
                        <ContactDetails />
                        <ContactMap />
                    </Row>
                </Card>

                <ContactMSA />
            </Container>
        </main>
    );
}
