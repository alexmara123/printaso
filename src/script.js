// Add event listener for the "Join Now" button (optional if you have modals)
document.addEventListener('DOMContentLoaded', function () {
  const joinButton = document.getElementById('join-button');
  const joinModal = document.getElementById('join-modal');
  
  if (joinButton && joinModal) {
    // Open the modal when the join button is clicked
    joinButton.addEventListener('click', function () {
      joinModal.style.display = 'block';
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', function (event) {
      if (event.target === joinModal) {
        joinModal.style.display = 'none';
      }
    });
  }
});
