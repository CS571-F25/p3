import { Card } from "react-bootstrap";

export default function ContactMSA() {
    return (
        <Card
            className="p-4 shadow-sm mt-4"
            style={{
                borderRadius: "12px",
            }}
        >
            <h2 className="mb-3">UW–Madison Muslim Students Association (MSA)</h2>

            <p style={{ maxWidth: "45rem", lineHeight: 1.6 }}>
                The UW–Madison MSA is a student-led organization dedicated to
                building community, supporting Muslim students on campus, and
                promoting education, service, and spiritual growth through regular
                events, study circles, and social activities.
            </p>

            <h3 className="mt-3">Website</h3>
            <a
                href="https://win.wisc.edu/organization/msa"
                target="_blank"
                rel="noopener noreferrer"
            >
                UW MSA on WIN (Wisconsin Involvement Network)
            </a>

            <h3 className="mt-3">Email</h3>
            <p style={{ margin: 0 }}>msa@union.wisc.edu</p>

            <h3 className="mt-3">Instagram</h3>
            <a
                href="https://instagram.com/msauwmadison"
                target="_blank"
                rel="noopener noreferrer"
            >
                @msauwmadison
            </a>
        </Card>
    );
}
