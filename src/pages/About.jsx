import React, { useEffect, useState } from "react";
import profile from "../assets/image7.jpg";

// SkillBar with animated fill
const SkillBar = ({ name, level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setWidth(level), 300);
    return () => clearTimeout(timeout);
  }, [level]);

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.4rem",
          fontWeight: "600",
          color: "#00f2fe",
          fontSize: "1rem",
        }}
      >
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div
        style={{
          background: "#2d2d2d",
          height: "14px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${width}%`,
            height: "100%",
            background: "linear-gradient(90deg, #00f2fe, #4facfe)",
            borderRadius: "10px",
            transition: "width 1.2s ease-in-out",
            boxShadow: "0 0 10px rgba(0, 242, 254, 0.4)",
          }}
        />
      </div>
    </div>
  );
};

export default function About() {
  const skills = [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "HTML/CSS", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 60 },
    { name: "SQL", level: 95 },
    { name: "MongoDB", level: 90 },
    { name: "Machine Learning", level: 60 },
    { name: "Git & GitHub", level: 90 },
  ];

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top left, #111 0%, #1b1b1b 100%)",
        color: "#f5f5f5",
        padding: "5rem 2rem",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "3.5rem",
          fontWeight: "800",
          marginBottom: "3rem",
          color: "#00f2fe",
          textShadow: "0 0 18px rgba(0, 242, 254, 0.5)",
        }}
      >
        About Me ✨
      </h2>

      {/* Profile Card */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "2.5rem",
          background: "linear-gradient(135deg, #1e1e1e, #2a2a2a)",
          borderRadius: "20px",
          padding: "2.5rem",
          maxWidth: "1000px",
          width: "100%",
          marginBottom: "3.5rem",
          boxShadow: "0 0 30px rgba(0, 242, 254, 0.2)",
          justifyContent: "center",
        }}
      >
        <div style={{ flex: "0 0 180px", textAlign: "center" }}>
          <img
            src={profile}
            alt="Meenakshi"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #00f2fe",
              boxShadow: "0 0 20px rgba(0, 242, 254, 0.5)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <p
            style={{
              marginTop: "1rem",
              color: "#4facfe",
              fontWeight: "600",
              fontSize: "1.15rem",
              letterSpacing: "0.03em",
            }}
          >
            Meenakshi R
          </p>
        </div>

        <div style={{ flex: "1", maxWidth: "600px" }}>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#ddd",
              textAlign: "justify",
            }}
          >
            Hello! I’m <strong style={{ color: "#00f2fe" }}>Meenakshi</strong>, an enthusiastic
            IT undergraduate at Rajalakshmi Engineering College (Batch 2023–2027).
            <br />
            I’m passionate about creating real-world software solutions using Java, databases, and
            emerging technologies in AI/ML. I'm a problem-solver who enjoys hackathons, exploring
            new stacks, and building useful tools that make a difference.
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e1e1e, #292929)",
          padding: "3rem",
          borderRadius: "20px",
          maxWidth: "1000px",
          width: "100%",
          boxShadow: "0 0 30px rgba(0, 242, 254, 0.25)",
        }}
      >
        <h3
          style={{
            fontSize: "2.5rem",
            marginBottom: "2rem",
            color: "#00f2fe",
            textAlign: "center",
            textShadow: "0 0 12px rgba(0, 242, 254, 0.3)",
          }}
        >
          Technical Skills
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.8rem",
          }}
        >
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
}
