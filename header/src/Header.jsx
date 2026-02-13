import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ background: "#333", color: "#fff", padding: "16px" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ margin: 0 }}>{process.env.APP_NAME}</h1>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0 }}>
          <li><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link></li>
          <li><Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link></li>
          <li><Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
