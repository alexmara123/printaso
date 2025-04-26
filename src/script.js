// Modal logic for Join Now button
const joinButton = document.getElementById('join-button');
const joinModal = document.getElementById('join-modal');
const joinForm = document.getElementById('join-form');

// Open Modal
joinButton.addEventListener('click', () => {
  joinModal.style.display = 'block';
});

// Close Modal when clicking outside
window.addEventListener('click', (event) => {
  if (event.target === joinModal) {
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
