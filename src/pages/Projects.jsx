// src/pages/Projects.jsx

import React from "react";
import image3 from "../assets/image3.jpg";   // Quiz App
import image4 from "../assets/image4.webp";  // Business Plan Generator
import image5 from "../assets/image5.png";   // BizPlan UI
import image6 from "../assets/image6.jpg";   // Movie Ticket Booking

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "#fff",
        padding: "5rem 2rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>My Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Project 1 */}
        <div>
          <img
            src={image3}
            alt="Quiz App"
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <h3>Online Quiz App</h3>
          <p>Java + DBMS based quiz platform with login & leaderboard features.</p>
        </div>

        {/* Project 2 */}
        <div>
          <img
            src={image4}
            alt="Business Strategy Generator"
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <h3>Business Strategy Generator</h3>
          <p>AI/ML-based system that generates startup strategies.</p>
        </div>

        {/* Project 3 */}
        <div>
          <img
            src={image5}
            alt="Business Plan Builder"
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <h3>AI Business Plan Tool</h3>
          <p>Interactive web-based business builder with analytics.</p>
        </div>

        {/* Project 4 */}
        <div>
          <img
            src={image6}
            alt="Movie Ticket App"
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <h3>Online Movie Ticket Booking</h3>
          <p>Java + NoSQL project for booking and managing movie tickets.</p>
        </div>
      </div>
    </section>
  );
}
