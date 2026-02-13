import React from "react";

const About = ({ sharedMessage }) => {
  return (
    <section style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>About Us</h2>

      {sharedMessage && (
        <div style={{ padding: "16px", background: "#e0f2fe", borderRadius: "8px", marginBottom: "20px" }}>
          <strong>Message from Home:</strong> {sharedMessage}
        </div>
      )}

      <p style={{ lineHeight: "1.6", marginBottom: "16px" }}>
        We are a team of developers passionate about building scalable and maintainable
        web applications using modern micro-frontend architecture.
      </p>
      <p style={{ lineHeight: "1.6" }}>
        Module Federation allows us to build independent applications that can be
        composed together at runtime, enabling teams to work autonomously while
        sharing code seamlessly.
      </p>
    </section>
  );
};

export default About;
