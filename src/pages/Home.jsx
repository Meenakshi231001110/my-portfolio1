// src/pages/Home.jsx

import React from "react";
import bg from "../assets/image2.jpg"; // ✅ your static image

export default function Home() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      {/* ✅ Semi-transparent dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // darker overlay
          zIndex: 0,
        }}
      ></div>

      {/* ✅ Your main content */}
      <div style={{ position: "relative", zIndex: 1, color: "#fff" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "1rem",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          Hi, I'm Meenakshi 👋
        </h1>

        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "600px",
            margin: "0 auto",
            textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
          }}
        >
          Student at Rajalakshmi Engineering College (2023–2027).
          Passionate about coding, AI/ML and building creative solutions.
        </p>

        <a
          href="/Meenakshi_R_Resume.pdf"
          download
          style={{
            marginTop: "2rem",
            display: "inline-block",
            padding: "1rem 2rem",
            backgroundColor: "#61dafb",
            color: "#000",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            transition: "transform 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}
