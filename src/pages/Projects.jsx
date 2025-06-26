import React from "react";
import image3 from "../assets/image3.jpg";   // Quiz App
import image5 from "../assets/image5.png";   // BizPlan UI
import image6 from "../assets/image6.jpg";   // Movie Ticket Booking

const projects = [
  {
    image: image6,
    title: "Online Quiz App",
    description:
      "A secure quiz platform built with Java and DBMS. Features include login authentication, dynamic quiz generation, and a real-time leaderboard.",
    tech: "Java, SQL, JDBC",
  },
  {
    image: image5,
    title: "AI Business Plan Tool",
    description:
      "A responsive, interactive UI to guide startups through step-by-step business plan creation. Integrates charts and analytics.",
    tech: "React, Chart.js",
  },
  {
    image: image3,
    title: "Movie Ticket Booking System",
    description:
      "A NoSQL-based platform to book and manage movie tickets online. Includes seat selection, payment simulation, and ticket history.",
    tech: "Java, MongoDB",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0d0d0d",
        color: "#fff",
        padding: "5rem 2rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          marginBottom: "3rem",
          textAlign: "center",
          color: "#00f2fe",
          textShadow: "0 0 10px rgba(0, 242, 254, 0.4)",
        }}
      >
        My Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1a1a1a",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0, 242, 254, 0.15)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 12px 36px rgba(0, 242, 254, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(0, 242, 254, 0.15)";
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.5rem", color: "#4facfe" }}>
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  color: "#ccc",
                  margin: "0.8rem 0 1rem",
                }}
              >
                {project.description}
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontStyle: "italic",
                  color: "#a0a0a0",
                  marginBottom: "0",
                }}
              >
                Tech Stack: {project.tech}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
