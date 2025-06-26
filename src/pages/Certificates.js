import React from "react";

export default function Certificates() {
  const internships = [
    {
      title: "Internship in AIML",
      issuer: "Altruisty • Jan–Feb 2025",
      link: "/certificates/meenakshi-internship.pdf",
      image: "/certificates/images/aiml.png",
    },
  ];

  const linkedinCerts = [
    {
      title: "Learning Java 11",
      issuer: "LinkedIn Learning • Aug 08, 2024",
      link: "/certificates/learning-java11.pdf",
      image: "/certificates/images/java11.png",
    },
    {
      title: "Java Object-Oriented Programming",
      issuer: "LinkedIn Learning • Sep 04, 2024",
      link: "/certificates/java-oop.pdf",
      image: "/certificates/images/java-oop.png",
    },
  ];

  const renderCards = (certArray) => (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
        marginBottom: "2rem",
        padding: "0 1rem",
      }}
    >
      {certArray.map((cert, index) => (
        <div
          key={index}
          style={{
            background: "linear-gradient(145deg, #1a1a1a, #121212)",
            borderRadius: "16px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            overflow: "hidden",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,242,254,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
          }}
        >
          <img
            src={cert.image}
            alt={cert.title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
              backgroundColor: "#111",
              padding: "1rem",
              borderBottom: "1px solid #222",
            }}
          />
          <div style={{ padding: "1.2rem" }}>
            <h3 style={{ color: "#00f2fe", margin: "0 0 0.5rem" }}>{cert.title}</h3>
            <p style={{ color: "#ccc", fontSize: "0.95rem", marginBottom: "1rem" }}>
              {cert.issuer}
            </p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.6rem 1rem",
                background: "#00f2fe",
                color: "#0a0a0a",
                textDecoration: "none",
                fontWeight: "bold",
                borderRadius: "8px",
                boxShadow: "0 0 8px rgba(0,242,254,0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.boxShadow = "0 0 16px #00f2fe")}
              onMouseLeave={(e) => (e.target.style.boxShadow = "0 0 8px rgba(0,242,254,0.4)")}
            >
              View Certificate
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="certificates"
      style={{
        backgroundColor: "#0a0a0a",
        color: "#fff",
        padding: "5rem 1rem",
        fontFamily: "'Segoe UI', sans-serif",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.8rem",
          color: "#00f2fe",
          marginBottom: "1rem",
          textShadow: "0 0 12px rgba(0, 242, 254, 0.4)",
        }}
      >
        My Certificates 📜
      </h2>
      <p style={{ color: "#aaa", fontSize: "1.1rem", marginBottom: "3rem" }}>
        Verified credentials from internships and certifications
      </p>

      <h3 style={{ color: "#61dafb", fontSize: "1.6rem", marginBottom: "1rem" }}>
        🛠️ Internship
      </h3>
      {renderCards(internships)}

      <h3 style={{ color: "#61dafb", fontSize: "1.6rem", marginBottom: "1rem" }}>
        💼 LinkedIn Learning
      </h3>
      {renderCards(linkedinCerts)}
    </section>
  );
}
