// Privacy Modal functionality
window.addEventListener('load', function() {
  // Check if user has already seen the privacy modal
  if (!localStorage.getItem('privacyAccepted')) {
    const privacyModal = document.getElementById('privacyModal');
    if (privacyModal) {
      privacyModal.style.display = 'flex';
    }
  }
});

function closePrivacyModal() {
  const privacyModal = document.getElementById('privacyModal');
  privacyModal.style.display = 'none';
  // Store that user has accepted
  localStorage.setItem('privacyAccepted', 'true');
}

function switchTab(tabName) {
  const contents = document.querySelectorAll('.privacy-tab-content');
  contents.forEach(content => content.classList.add('hidden'));
  document.getElementById(tabName).classList.remove('hidden');
  const buttons = document.querySelectorAll('.privacy-tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

window.addEventListener('click', function(event) {
  const privacyModal = document.getElementById('privacyModal');
  if (event.target === privacyModal) {
    privacyModal.style.display = 'none';
    localStorage.setItem('privacyAccepted', 'true');
  }
});
