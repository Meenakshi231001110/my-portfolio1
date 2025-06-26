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
          gap: "2rem",
          flexWrap: "wrap",
          maxWidth: "1100px",
          width: "100%",
          background: "linear-gradient(145deg, #111, #1a1a1a)",
          padding: "2.5rem",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0, 242, 254, 0.15)",
        }}
      >
        {/* ✅ Left Panel */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <h2
            style={{
              fontSize: "2.4rem",
              marginBottom: "1rem",
              color: "#00f2fe",
              textShadow: "0 0 12px rgba(0, 242, 254, 0.5)",
            }}
          >
            Let’s Connect 💌
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "1.8rem", lineHeight: "1.6" }}>
            Feel free to reach out if you'd like to collaborate, have a question, or just say hi!
          </p>

          <ul style={{ listStyle: "none", padding: 0, fontSize: "1.05rem", lineHeight: "1.8" }}>
            <li>
              📧 <strong>Email:</strong> meena13shi@gmail.com
            </li>
            <li>
              🔗 <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/meenakshi-r-2166052a2"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#00f2fe",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
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
              padding: "0.8rem 1.6rem",
              backgroundColor: "#00f2fe",
              color: "#000",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
              boxShadow: "0 0 12px rgba(0, 242, 254, 0.4)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            📄 Download Resume
          </a>
        </div>

        {/* ✅ Right Form */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <form
            action="https://formspree.io/f/xvgrwelp"
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
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
                padding: "0.9rem",
                backgroundColor: "#00f2fe",
                color: "#0a0a0a",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                boxShadow: "0 0 10px rgba(0, 242, 254, 0.3)",
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

// Shared input styling
const inputStyle = {
  padding: "0.75rem",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  fontSize: "1rem",
  backgroundColor: "#1c1c1c",
  color: "#fff",
  resize: "none",
  boxShadow: "inset 0 0 4px rgba(0, 242, 254, 0.1)",
};
