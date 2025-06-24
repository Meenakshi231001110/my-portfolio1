// src/pages/Contact.jsx

import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0e0e0e",
        color: "#fff",
        padding: "5rem 2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "3rem",
          flexWrap: "wrap",
          maxWidth: "1100px",
          width: "100%",
          background: "rgba(255,255,255,0.05)",
          padding: "2rem",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
        }}
      >
        {/* ✅ Left: Info Panel */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <h2
            style={{
              fontSize: "2.2rem",
              marginBottom: "1rem",
              color: "#61dafb",
              textShadow: "0 0 10px rgba(97, 218, 251, 0.6)",
            }}
          >
            Let’s Connect 💌
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "1.5rem",
              lineHeight: "1.6",
            }}
          >
            Reach out if you'd like to collaborate, have a question, or just want to connect!
          </p>

          <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem" }}>
            <li>
              📧 <strong>Email:</strong> meena13shi@gmail.com
            </li>
            <li>
              🔗 <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/meenakshi-r-2166052a2"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#61dafb", textDecoration: "none" }}
              >
                Meenakshi R
              </a>
            </li>
            <li>
              📍 <strong>Location:</strong> Chennai, India
            </li>
          </ul>

          <a
            href="/Meenakshi_R_Resume.pdf"
            download
            style={{
              display: "inline-block",
              marginTop: "2rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#61dafb",
              color: "#000",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            📄 Download Resume
          </a>
        </div>

        {/* ✅ Right: Live Formspree Form */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <form
            action="https://formspree.io/f/xvgrwelp" // ✅ YOUR real Formspree link
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              style={inputStyle}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              style={inputStyle}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              style={inputStyle}
              required
            />
            <button
              type="submit"
              style={{
                padding: "0.8rem",
                backgroundColor: "#61dafb",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              📩 Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ✅ Shared input style
const inputStyle = {
  padding: "0.75rem",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  fontSize: "1rem",
  backgroundColor: "#1c1c1c",
  color: "#fff",
  resize: "none",
};
