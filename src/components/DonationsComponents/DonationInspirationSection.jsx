import React from "react";
import { Card } from "react-bootstrap";

export default function DonationInspirationSection() {
    return (
        <div
            className="p-4 shadow-sm text-center"
            style={{
                borderRadius: "18px",
                background: "linear-gradient(to top left, #F8F3EB, #E2D7CC)",
                border: "1px solid #e5e7eb",
                margin: "2rem 0", // clean spacing above & below
            }}
        >
            {/* HEADER */}
            <h3
                className="mb-4"
                style={{
                    fontWeight: 800,
                    fontSize: "1.9rem",
                }}
            >
                Inspire Your Giving
            </h3>

            {/* QUOTES SECTION */}
            <div
                className="mb-3"
                style={{
                    maxWidth: "700px",
                    margin: "0 auto",
                }}
            >
                {/* QURAN QUOTE */}
                <blockquote
                    style={{
                        padding: "1.25rem 1.5rem",
                        background: "var(--bg-card)",
                        borderRadius: "12px",
                        marginBottom: "1.75rem",
                        borderLeft: `6px solid var(--accent)`,
                        lineHeight: "1.6",
                        color: "var(--text-main)",
                    }}
                >
                    <div
                        style={{
                            marginBottom: "0.8rem",
                            fontSize: "1.4rem",
                            fontFamily: "'Scheherazade New', serif",
                            lineHeight: "2.5rem",
                            direction: "rtl",
                            textAlign: "center",
                        }}
                    >
                        مَّثَلُ  ٱلَّذِينَ  يُنفِقُونَ  أَمْوَٰلَهُمْ  فِى  سَبِيلِ  ٱللَّهِ  كَمَثَلِ  حَبَّةٍ  أَنۢبَتَتْ  سَبْعَ  سَنَابِلَ  فِى  كُلِّ سُنۢبُلَةٍۢ  مِّا۟ئَةُ  حَبَّةٍۢ ۗ  وَٱللَّهُ  يُضَـٰعِفُ  لِمَن  يَشَآءُ ۗ  وَٱللَّهُ  وَٰسِعٌ  عَلِيمٌ
                    </div>

                    <div>
                        “The example of those who spend their wealth in the way of Allāh
                        is like a seed [of grain] which grows seven spikes; in each spike is a hundred grains.
                        And Allāh multiplies [His reward] for whom He wills. And Allāh is all-Encompassing and Knowing.”
                    </div>

                    <span
                        style={{ fontWeight: 700 }}
                        className="d-block mt-2"
                    >
                        — Surah Al-Baqarah (2:261)
                    </span>
                </blockquote>
            </div>

            {/* VIDEO SECTION */}
            <div
                className="mt-3"
                style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                }}
            >
                <h5
                    className="mb-3"
                    style={{ fontWeight: 700 }}
                >
                    Watch the Project Overview
                </h5>

                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        paddingBottom: "56.25%", // 16:9 aspect ratio
                        borderRadius: "16px",
                        overflow: "hidden",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                        background: "#000",
                    }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/AKYDnVE7AYo?si=BwbrvkaKkJuY-3wI"
                        title="Project Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: "none",
                        }}
                    ></iframe>

                </div>
            </div>
        </div>
    );
}
