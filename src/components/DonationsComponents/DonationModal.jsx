import React, { useState } from "react";
import { Modal, Button, Form, Toast, ToastContainer } from "react-bootstrap";

export default function DonationModal({ show, onClose, onDonate, donationType }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send amount back to parent
        // Only trigger donate callback for Masjid Project
        if (donationType === "Masjid Project") {
            onDonate(Number(amount));
        }

        // Close modal
        onClose();

        // Show toast
        setShowToast(true);

        // Reset fields
        setName("");
        setEmail("");
        setAmount("");
    };

    return (
        <>
            {/* DONATION FORM MODAL */}
            <Modal show={show} onHide={onClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Donate — {donationType}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Donation Amount ($)</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter amount"
                                min="1"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button type="submit" variant="primary" className="w-100">
                            Submit Donation
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* SUCCESS TOAST */}
            <ToastContainer className="toast-center">
                <Toast
                    onClose={() => setShowToast(false)}
                    show={showToast}
                    delay={4000}
                    autohide
                    bg="success"
                    style={{
                        minWidth: "420px",
                        padding: "15px",
                        borderRadius: "15px",
                        boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                        textAlign: "center",
                    }}
                >
                    <Toast.Header
                        closeButton={true}
                        style={{
                            background: "transparent",
                            borderBottom: "none",
                            justifyContent: "center",
                        }}
                    >
                        <strong className="text-white fs-5">
                            Donation Successful
                        </strong>
                    </Toast.Header>

                    <Toast.Body className="text-white fs-6">
                        <div>Thank you for your {donationType} donation!</div>
                        <div className="mt-2 fw-semibold">
                            May Allah reward you greatly 🤲
                        </div>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}
