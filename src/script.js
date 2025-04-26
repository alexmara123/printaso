// Modal logic
const joinButton = document.getElementById('join-button');
const joinModal = document.getElementById('join-modal');
const joinForm = document.getElementById('join-form');

// Open Modal
joinButton.addEventListener('click', () => {
  joinModal.style.display = 'block';
});

// Close Modal when clicking outside
window.addEventListener('click', (event) => {
  if (event.target == joinModal) {
    joinModal.style.display = 'none';
  }
});

// Handle Form Submission
joinForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email-input').value;
  alert(`Thanks for joining! We'll be in touch at ${email}`);
  joinModal.style.display = 'none';
});
// Handle "Join Now" button click and show modal
document.getElementById('join-button').onclick = function() {
  document.getElementById('join-modal').style.display = 'flex';
};

// Handle form submission (for demo purposes, just log the email)
document.getElementById('join-form').onsubmit = function(event) {
  event.preventDefault();
  const email = document.getElementById('email-input').value;
  alert('Thank you for joining! Email: ' + email);
  document.getElementById('join-modal').style.display = 'none';  // Close the modal
};

// If the user clicks outside the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById('join-modal')) {
    document.getElementById('join-modal').style.display = 'none';
  }
};
