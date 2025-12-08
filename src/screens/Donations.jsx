import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";

import MosqueDisplay from "../components/DonationsComponents/MosqueDisplay";
import DonationsDashboard from "../components/DonationsComponents/DonationsDashboard";
import DonationRow from "../components/DonationsComponents/DonationRow";
import DonationInspirationSection from "../components/DonationsComponents/DonationInspirationSection";
import DonationModal from "../components/DonationsComponents/DonationModal";

import zakatImg from "../assets/zakatImg.jpg";
import generalImg from "../assets/general.jpg";
import quranImg from "../assets/quranSchool.png";

export default function Donations() {
    const [showModal, setShowModal] = useState(false);
    const [selectedType, setSelectedType] = useState("");

    // Load saved total OR start at 0
    const [current, setCurrent] = useState(() => {
        const saved = localStorage.getItem("donationTotal");
        return saved ? Number(saved) : 0;
    });

    // Add donation and persist
    const handleAddDonation = (amount) => {
        const updated = current + Number(amount);

        setCurrent(updated);
        localStorage.setItem("donationTotal", updated);
    };

    const openDonationForm = (type) => {
        setSelectedType(type);
        setShowModal(true);
    };

    return (
        <Container className="py-4">
            <Card className="p-4" style={{ marginBottom: "20px" }}>
                <MosqueDisplay />

                <hr
                    style={{
                        border: "none",
                        height: "1px",
                        background: "rgba(0, 0, 0, 0.5)",
                    }}
                />

                <DonationsDashboard
                    current={current}
                    goal={25000}
                    onDonate={() => openDonationForm("Masjid Project")}
                />
            </Card>

            <DonationInspirationSection />

            <DonationRow
                title="Zakat"
                description="Fulfill your obligation by giving Zakat. Your contribution supports those most in need within our community."
                image={zakatImg}
                onDonate={() => openDonationForm("Zakat")}
            />

            <DonationRow
                title="General Donation"
                description="Support the masjid's daily operations, utilities, maintenance, and community programs."
                image={generalImg}
                onDonate={() => openDonationForm("General Donation")}
            />

            <DonationRow
                title="Quran School"
                description="Help fund Quran classes, supplies, and teacher support for the next generation of students."
                image={quranImg}
                onDonate={() => openDonationForm("Quran School")}
            />

            <DonationModal
                show={showModal}
                donationType={selectedType}
                onClose={() => setShowModal(false)}
                onDonate={handleAddDonation}
            />
        </Container>
    );
}
