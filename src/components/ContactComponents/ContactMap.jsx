import { Col } from "react-bootstrap";

export default function ContactMap() {
    return (
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
    );
}
