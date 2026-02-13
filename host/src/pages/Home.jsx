import React from "react";

const Home = ({ inputValue, setInputValue }) => {
  return (
    <section style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "24px" }}>Welcome to Our Website</h1>

      <div style={{ marginBottom: "30px", padding: "20px", background: "#f5f5f5", borderRadius: "8px" }}>
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
          Enter your message (shared across pages):
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
        />
      </div>

      <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>About Our Services</h2>
      <p style={{ lineHeight: "1.6", marginBottom: "20px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>Our Mission</h2>
      <p style={{ lineHeight: "1.6", marginBottom: "20px" }}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>Why Choose Us</h2>
      <p style={{ lineHeight: "1.6", marginBottom: "20px" }}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
    </section>
  );
};

export default Home;
