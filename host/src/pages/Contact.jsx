import React from "react";

const Contact = ({ inputValue }) => {
  return (
    <section style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "24px" }}>Contact Us</h1>

      {inputValue && (
        <div style={{ padding: "16px", background: "#e0f2fe", borderRadius: "8px", marginBottom: "20px" }}>
          <strong>Message from Home:</strong> {inputValue}
        </div>
      )}

      <p style={{ lineHeight: "1.6", marginBottom: "20px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. We would love to hear
        from you. Please reach out using the information below.
      </p>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>Get In Touch</h2>
        <p style={{ lineHeight: "1.6" }}>Email: contact@example.com</p>
        <p style={{ lineHeight: "1.6" }}>Phone: (555) 123-4567</p>
        <p style={{ lineHeight: "1.6" }}>Address: 123 Main Street, City, Country</p>
      </div>
    </section>
  );
};

export default Contact;
