document.addEventListener('DOMContentLoaded', function() {
  const openModalLink = document.getElementById('open-modal-link');
  const modal = document.getElementById('privacy-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  openModalLink.addEventListener('click', function(event) {
      event.preventDefault();
      modal.classList.remove('hidden');
  });

  closeModalBtn.addEventListener('click', function() {
      modal.classList.add('hidden');
  });

  modal.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.classList.add('hidden');
      }
  });
});