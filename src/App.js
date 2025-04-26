import React from 'react';
import './style.css';  // Import the CSS file

function App() {
  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="navbar">
          <h1>Printaso</h1>
          <nav>
            <a href="index.html" className="nav-link">Home</a>
            <a href="about.html" className="nav-link">About</a>
            <a href="token.html" className="nav-link">Our Token</a>
            <a href="revolution.html" className="nav-link">The Revolution</a>
            <a href="services.html" className="nav-link">Services</a>
            <a href="contact.html" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Empowering the Future of Creation</h2>
        <p>Printaso is redefining digital ownership with Web3 and blockchain innovation. Built for creators, by creators.</p>
        <button className="button">Join the Movement</button>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p>We saw a broken system where artists, designers, and innovators got paid last. Middlemen took the glory and the profits. Printaso was founded to flip the system on its head — putting creators in full control, powered by Web3 technology and our PTO Token.</p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Mission</h2>
        <div className="feature-item">
          <h3>Decentralized Ownership</h3>
          <p>Every creation belongs to its creator — secured by blockchain, free from centralized control.</p>
          <button className="button">Learn More</button>
        </div>
        <div className="feature-item">
          <h3>Empowered Communities</h3>
          <p>We reward users who create, collaborate, and grow the ecosystem. Community is everything.</p>
          <button className="button">Get Involved</button>
        </div>
        <div className="feature-item">
          <h3>True Creator Economy</h3>
          <p>Sell, stake, and monetize art with real autonomy. No gatekeepers. No compromises.</p>
          <button className="button">Explore the Platform</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2025 Printaso. All Rights Reserved.</p>
        <div>
          <a href="https://twitter.com/printaso" target="_blank">Twitter</a> |
          <a href="https://discord.gg/printaso" target="_blank">Discord</a> |
          <a href="https://telegram.me/printaso" target="_blank">Telegram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
