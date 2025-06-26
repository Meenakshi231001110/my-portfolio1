import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "🎟️ Online Movie Ticket Booking",
      description:
        "Developed a robust ticket booking system using Java and NoSQL, featuring real-time seat selection and a user-friendly interface.",
    },
    {
      title: "❓ Online Quiz Platform",
      description:
        "Built a secure quiz application using Java and DBMS, including authentication, randomized questions, and leaderboard tracking.",
    },
    {
      title: "💡 Business Strategy Generator (AI/ML)",
      description:
        "Created an intelligent tool that uses NLP and ML to generate tailored business plans for startups and entrepreneurs.",
    },
    {
      title: "👩‍🎓 Student & Innovator",
      description:
        "Actively participating in hackathons, coding events, and exploring new tech trends in AI, ML, and full-stack development.",
    },
  ];

  return (
    <section
      id="experience"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "#fff",
        padding: "5rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Section Heading */}
      <h2
        style={{
          fontSize: "2.8rem",
          marginBottom: "3rem",
          textAlign: "center",
          color: "#00f2fe",
          textShadow: "0 0 12px rgba(0, 242, 254, 0.4)",
        }}
      >
        My Experience 🗂️
      </h2>

      {/* Experience Timeline */}
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {experiences.map((item, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              padding: "1.8rem",
              borderRadius: "16px",
              borderLeft: "6px solid #00f2fe",
              boxShadow: "0 0 12px rgba(0, 242, 254, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(0, 242, 254, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 12px rgba(0, 242, 254, 0.1)";
            }}
          >
            <h3
              style={{
                marginBottom: "0.8rem",
                fontSize: "1.5rem",
                color: "#61dafb",
              }}
            >
              {item.title}
            </h3>
            <p style={{ lineHeight: "1.7", color: "#ccc" }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
