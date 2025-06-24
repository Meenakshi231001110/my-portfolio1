// src/pages/Experience.jsx

import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "#fff",
        padding: "5rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          textShadow: "0 0 10px rgba(97, 218, 251, 0.6)",
          color: "#61dafb",
        }}
      >
        My Experience 🗂️
      </h2>

      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* ✅ Experience Item 1 */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "1.5rem",
            borderRadius: "12px",
            borderLeft: "5px solid #61dafb",
            textAlign: "left",
          }}
        >
          <h3>🎟️ Online Movie Ticket Booking</h3>
          <p>
            Developed a robust ticket booking system using Java and NoSQL, 
            with features like seat reservation and user-friendly interface.
          </p>
        </div>

        {/* ✅ Experience Item 2 */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "1.5rem",
            borderRadius: "12px",
            borderLeft: "5px solid #61dafb",
            textAlign: "left",
          }}
        >
          <h3>❓ Online Quiz Platform</h3>
          <p>
            Designed a secure quiz system in Java and DBMS, supporting authentication,
            random questions, and leaderboard tracking.
          </p>
        </div>

        {/* ✅ Experience Item 3 */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "1.5rem",
            borderRadius: "12px",
            borderLeft: "5px solid #61dafb",
            textAlign: "left",
          }}
        >
          <h3>💡 Business Strategy Generator (AI/ML)</h3>
          <p>
            Built an AI tool that automatically generates customized business strategies,
            using NLP and machine learning algorithms.
          </p>
        </div>

        {/* ✅ Experience Item 4 */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "1.5rem",
            borderRadius: "12px",
            borderLeft: "5px solid #61dafb",
            textAlign: "left",
          }}
        >
          <h3>👩‍🎓 Student & Innovator</h3>
          <p>
            Actively participating in hackathons, coding competitions, and tech communities.
            Exploring new trends in AI, ML, and creative development.
          </p>
        </div>
      </div>
    </section>
  );
}
