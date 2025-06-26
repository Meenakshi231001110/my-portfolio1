import React from "react";
import "./App.css";

// ✅ Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates"; // ✅ Added
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      {/* ✅ Navigation Bar */}
      <nav
        style={{
          backgroundColor: "#0a0a0a",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          borderBottom: "1px solid #222",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <a href="#home" style={navStyle}>Home</a>
        <a href="#about" style={navStyle}>About</a>
        <a href="#projects" style={navStyle}>Projects</a>
        <a href="#certificates" style={navStyle}>Certificates</a> {/* ✅ Moved up */}
        <a href="#experience" style={navStyle}>Experience</a>
        <a href="#contact" style={navStyle}>Contact</a>
      </nav>

      {/* ✅ Sections in Order */}
      <Home />
      <About />
      <Projects />
      <Certificates /> {/* ✅ Shown before experience */}
      <Experience />
      <Contact />
    </div>
  );
}

const navStyle = {
  color: "#00f2fe",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1rem",
  transition: "color 0.3s ease",
};

export default App;
