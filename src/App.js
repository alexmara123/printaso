import React, { useState } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage(`Thanks for joining! We'll be in touch at ${email}`);
      setModalOpen(false);
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '2rem', textAlign: 'center' }}>
      <h1>Printaso</h1>
      <p>Empowering the Creator Economy with Web3. PTO is the utility token for digital creators — own your work, earn your worth.</p>
      <button 
        style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1rem' }} 
        onClick={handleModalToggle}
      >
        Join the Movement
      </button>

      {/* Modal */}
      {modalOpen && (
        <div style={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }}>
          <div style={{
            backgroundColor: '#fff', 
            padding: '2rem', 
            borderRadius: '8px', 
            width: '300px', 
            textAlign: 'center'
          }}>
            <h2>Join the Movement</h2>
            <form id="join-form" onSubmit={handleSubmit}>
              <input
                type="email"
                id="email-input"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                style={{ padding: '0.5rem', margin: '0.5rem 0', width: '100%' }}
                required
              />
              <button
                type="submit"
                style={{ padding: '0.5rem 2rem', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}
              >
                Submit
              </button>
            </form>
            {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
            <button 
              onClick={handleModalToggle} 
              style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#ccc' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <footer style={{ marginTop: '4rem', fontSize: '0.8rem', color: '#aaa' }}>
        © 2025 Printaso. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
