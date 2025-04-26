import React from "react";
import "./style.css"; // Import the CSS file

function App() {
  return (
    <div>
      {/* Header Section */}
      <header className="navbar">
        <div className="logo">
          <h1>Printaso</h1>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#token">Our Token</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Empowering Creators in the Web3 Era</h2>
        <p>Own your creations, earn your worth. Join the movement today!</p>
        <button className="cta-button">Join the Revolution</button>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>Our Story</h2>
        <p>
          We saw a broken system where creators were overlooked, with middlemen
          taking the credit and profits. Printaso flips the script by empowering
          creators with full control, powered by Web3 technology and our PTO
          Token.
        </p>
      </section>

      {/* Features Section */}
      <section className="features" id="services">
        <h2>Our Mission</h2>
        <div className="feature-item">
          <h3>Decentralized Ownership</h3>
          <p>Every creation belongs to its creator — powered by blockchain.</p>
        </div>
        <div className="feature-item">
          <h3>Empowered Communities</h3>
          <p>Rewarding creators who collaborate and grow the ecosystem.</p>
        </div>
        <div className="feature-item">
          <h3>True Creator Economy</h3>
          <p>Sell, stake, and monetize your art with no gatekeepers.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer" id="contact">
        <p>&copy; 2025 Printaso. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://twitter.com/printaso" target="_blank">Twitter</a>
          <a href="https://discord.gg/printaso" target="_blank">Discord</a>
          <a href="https://telegram.me/printaso" target="_blank">Telegram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
