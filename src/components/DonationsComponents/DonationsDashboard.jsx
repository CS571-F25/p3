import React from "react";
import { Button } from "react-bootstrap";

function DonationsDashboard({ current = 3500, goal = 10000 }) {
    const percentage = Math.min((current / goal) * 100, 100);

    return (
        <div style={{ width: "100%", position: "relative", marginTop: 15 }}>
            {/* Progress Bar */}
            <div
                style={{
                    width: "100%",
                    height: 45,
                    borderRadius: 25,
                    backgroundColor: "#e4eeef",
                    boxShadow: "inset 0 2px 6px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                {/* Filled Portion */}
                <div
                    style={{
                        width: `${percentage}%`,
                        height: "100%",
                        borderRadius: 25,
                        background: "linear-gradient(90deg, #FFD580 0%, #D9A066 100%)",
                        transition: "width 0.5s ease",

                        // Enhancements
                        border: "1.5px solid rgba(255,255,255,0.7)",
                        boxShadow: `inset 0 1px 4px rgba(0,0,0,0.25), inset 0 1px 10px rgba(255,255,255,0.3)`,
                    }}
                />

                {/* Amount Label */}
                <span
                    style={{
                        position: "absolute",
                        left: 20,
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontWeight: 600,
                        fontSize: 18,
                        color: "#3B3A36",
                    }}
                >
                    {`${current.toLocaleString()} / ${goal.toLocaleString()} USD`}
                </span>
            </div>

            {/* Donate Button */}
            <Button
                variant="none"
                style={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontWeight: 600,
                    fontSize: 18,
                    width: 150,
                    height: 45,
                    borderRadius: 25,
                    padding: 0,

                    // ✨ Background and color
                    background: "linear-gradient(180deg, #0CA2AD, #098F9B)",
                    color: "white",

                    // ✨ Matching inset effects like the bar
                    border: "1.5px solid rgba(255,255,255,0.6)",
                    boxShadow: `
                        inset 0 1px 4px rgba(0,0,0,0.25),
                        inset 0 1px 10px rgba(255,255,255,0.25),
                        0 4px 10px rgba(0,0,0,0.25)   /* outer soft shadow */
                    `,

                    transition: "all 0.2s ease",
                    cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(180deg, #11B7C3, #0AA6B4)";
                    e.currentTarget.style.border = "1.5px solid rgba(255,255,255,0.85)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(180deg, #0CA2AD, #098F9B)";
                    e.currentTarget.style.border = "1.5px solid rgba(255,255,255,0.6)";
                    e.currentTarget.style.transform = "translateY(-50%)";
                }}
                onMouseDown={(e) => {
                    e.currentTarget.style.transform = "translateY(-50%) scale(0.96)"; // small natural press
                }}
                onMouseUp={(e) => {
                    e.currentTarget.style.transform = "translateY(-50%)";
                }}
            >
                Donate
            </Button>



        </div>
    );
}

export default DonationsDashboard;
