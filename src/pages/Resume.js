import React, { useState } from "react";
import "./Resume.css";

function Resume() {
    const [loading, setLoading] = useState(true);

    const resumeUrl = "https://drive.google.com/file/d/1FR7gX4XeMgIHZAQpabkd-yaMzk0k8hdG/view?usp=drive_link";

    return (
        <div style={{ position: "relative", height: "100vh" }}>

            {/* LOADER */}
            {loading && (
                <div className="loader-wrapper">
                    <div className="loader"></div>
                    <p>Loading Resume...</p>
                </div>
            )}

            {/* PDF Viewer */}
            <iframe
                src={resumeUrl}
                title="Resume"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    opacity: loading ? 0 : 1,
                    transition: "opacity 0.5s ease"
                }}
                onLoad={() => {
                    setTimeout(() => setLoading(false), 500); // small delay
                }}
            />

            {/* Download Button */}
            <a
                href="https://drive.google.com/file/d/1FR7gX4XeMgIHZAQpabkd-yaMzk0k8hdG/view?usp=drive_link"
                className="download-btn"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "12px 18px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "600"
                }}
            >
                Download Resume
            </a>

        </div>
    );
}

export default Resume;