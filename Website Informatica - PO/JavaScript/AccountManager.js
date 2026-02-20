// Account Manager - Handles registration, login, and user data
// Uses localStorage for persistence (no external database needed)

function switchAuthTab(tab) {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const loginTab = document.getElementById('loginTab');
  const registerTab = document.getElementById('registerTab');

  if (tab === 'login') {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
  } else {
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleRegister(event) {
  event.preventDefault();
  console.log('Register form submitted');

  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('registerConfirm').value;
  const errorDiv = document.getElementById('registerError');

  console.log('Name:', name, 'Email:', email, 'Password:', password);

  // Clear previous errors
  if (errorDiv) {
    errorDiv.textContent = '';
  }

  // Validation
  if (!validateEmail(email)) {
    const msg = 'Voer een geldig email adres in!';
    console.log('Email validation failed:', msg);
    if (errorDiv) errorDiv.textContent = msg;
    return;
  }

  if (password !== confirmPassword) {
    const msg = 'Wachtwoorden komen niet overeen!';
    console.log('Password mismatch:', msg);
    if (errorDiv) errorDiv.textContent = msg;
    return;
  }

  if (password.length < 6) {
    const msg = 'Wachtwoord moet minimaal 6 karakters zijn!';
    console.log('Password too short:', msg);
    if (errorDiv) errorDiv.textContent = msg;
    return;
  }

  // Check if user already exists
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  console.log('Existing users:', users);
  
  if (users.some(u => u.email === email)) {
    const msg = 'Dit email adres is al geregistreerd!';
    console.log('Email already registered:', msg);
    if (errorDiv) errorDiv.textContent = msg;
    return;
  }

  // Create new user
  const newUser = {
    id: Date.now(),
    name: name,
    email: email,
    password: password,
    joined: new Date().toISOString()
  };

  console.log('Creating new user:', newUser);

  // Save to localStorage
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('currentUser', JSON.stringify(newUser));

  console.log('User registered successfully');

  // Redirect to profile
  alert('Registratie succesvol! Welkom ' + name + '!');
  window.location.href = './profiel.html';
}

function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const errorDiv = document.getElementById('loginError');

  errorDiv.textContent = '';

  // Get users from localStorage
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    errorDiv.textContent = 'Email of wachtwoord onjuist!';
    return;
  }

  // Save current user session
  localStorage.setItem('currentUser', JSON.stringify(user));

  // Redirect to profile
  alert('Welkom terug ' + user.name + '!');
  window.location.href = './profiel.html';
}

function isUserLoggedIn() {
  return localStorage.getItem('currentUser') !== null;
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser'));
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = './login.html';
}
