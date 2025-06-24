// src/pages/About.jsx

import React from "react";
import profile from "../assets/image1.jpg"; // ✅ Make sure image1.jpg is in src/assets/

export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "#fff",
        padding: "5rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* ✅ Heading */}
      <h2
        style={{
          fontSize: "2.8rem",
          marginBottom: "1rem",
        }}
      >
        About Me
      </h2>

      {/* ✅ Profile Image */}
      <img
        src={profile}
        alt="Meenakshi"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "1.5rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        }}
      />

      {/* ✅ Short Bio */}
      <p
        style={{
          maxWidth: "750px",
          margin: "0 auto 2rem",
          fontSize: "1.2rem",
          lineHeight: "1.7",
        }}
      >
        Hi! I’m <strong>Meenakshi</strong> — a Information Technology student at Rajalakshmi Engineering College (Batch 2023–2027). I’m passionate about creating
        practical, user-friendly applications using Java, databases, and AI/ML. I love solving problems, exploring new tech, and building projects
        that make a difference!
      </p>

      {/* ✅ Quick Details */}
      <div
        style={{
          maxWidth: "800px",
          textAlign: "left",
        }}
      ></div>

        
    </section>
  );
}
