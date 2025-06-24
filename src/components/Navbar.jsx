import React from "react";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <a href="#home" style={styles.link}>Home</a>
      <a href="#about" style={styles.link}>About</a>
      <a href="#projects" style={styles.link}>Projects</a>
      <a href="#experience" style={styles.link}>Experience</a>
      <a href="#contact" style={styles.link}>Contact</a>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    padding: "1rem 0",
    zIndex: 1000,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
};
