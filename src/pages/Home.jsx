import React from "react";
import bg from "../assets/image2.jpg"; // Your background image

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
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          zIndex: 0,
        }}
      ></div>

      {/* Main content card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "rgba(0,0,0,0.6)",
          border: "1px solid rgba(0, 242, 254, 0.2)",
          borderRadius: "20px",
          padding: "2.5rem",
          maxWidth: "750px",
          width: "100%",
          color: "#ffffff",
          boxShadow: "0 12px 28px rgba(0, 242, 254, 0.15)",
          animation: "float 5s ease-in-out infinite",
        }}
      >
        <h1
          style={{
            fontSize: "3.8rem",
            fontWeight: "900",
            background: "linear-gradient(90deg, #00f2fe, #4facfe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1rem",
          }}
        >
          Hi, I'm Meenakshi{" "}
          <span style={{ color: "#FFD93B", WebkitTextFillColor: "#FFD93B" }}>
            👋
          </span>
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            maxWidth: "600px",
            margin: "0 auto 2rem",
            color: "#e0e0e0",
            lineHeight: "1.7",
          }}
        >
          IT student at <strong>Rajalakshmi Engineering College</strong>{" "}
          (2023–2027). I’m driven by curiosity, passionate about{" "}
          <span style={{ color: "#4facfe" }}>AI/ML</span>, and love building
          impactful software projects.
        </p>

        <a
          href="/Meenakshi_R_Resume.pdf"
          download
          style={{
            padding: "0.9rem 2.2rem",
            background: "linear-gradient(to right, #00f2fe, #4facfe)",
            color: "#000",
            fontWeight: "600",
            fontSize: "1rem",
            borderRadius: "50px",
            textDecoration: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 6px 18px rgba(0, 242, 254, 0.3)",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 8px 24px rgba(0, 242, 254, 0.4)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 6px 18px rgba(0, 242, 254, 0.3)";
          }}
        >
          📄 Download Resume
        </a>
      </div>

      {/* Scroll Down hint */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "1.2rem",
          color: "#00f2fe",
          opacity: 0.8,
          animation: "bounce 2s infinite",
        }}
      >
        ⬇ Scroll Down
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
    </section>
  );
}
