// Theme Toggle functionality
const themeToggleBtn = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Load saved theme from localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);
  updateToggleIcon(savedTheme);
}

// Update toggle button icon
function updateToggleIcon(theme) {
  if (themeToggleBtn) {
    if (theme === 'dark') {
      themeToggleBtn.innerHTML = '☀️';
      themeToggleBtn.title = 'Schakel naar licht thema';
    } else {
      themeToggleBtn.innerHTML = '🌙';
      themeToggleBtn.title = 'Schakel naar donker thema';
    }
  }
}

// Toggle theme
function toggleTheme() {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateToggleIcon(newTheme);
}

// Add event listener when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
  loadTheme();
});

// Also load theme immediately if script runs before DOM load
if (document.readyState === 'loading') {
  loadTheme();
}
