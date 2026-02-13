import React from "react";

const Banner = () => {
  return (
    <section style={{ background: "#6366f1", color: "#fff", padding: "60px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.5rem", margin: "0 0 16px 0" }}>Welcome to Our Platform</h2>
      <p style={{ fontSize: "1.2rem", margin: "0 0 24px 0" }}>Build amazing micro-frontends with Module Federation</p>
      <button style={{
        background: "#fff",
        color: "#6366f1",
        border: "none",
        padding: "12px 24px",
        fontSize: "1rem",
        cursor: "pointer",
        borderRadius: "4px"
      }}>
        Get Started
      </button>
    </section>
  );
};

export default Banner;
