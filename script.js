// Function to close the welcome menu
function helloworld() {
  const mainaa = 0
}

function closeWelcomeMenu() {
  const welcomeMenu = document.getElementById('welcome-menu');
  welcomeMenu.style.display = 'none';
}

// Function to show account forms
function showAccountForms() {
  const accountForms = document.getElementById('account-forms');
  accountForms.style.display = 'block';
}

// Function to handle user registration
function registerUser(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Implement registration logic (e.g., validate inputs, create user account)
  alert(`User ${username} registered! (This is a placeholder function)`);
}

// Function to handle user login
function loginUser(event) {
  event.preventDefault();

  const loginUsername = document.getElementById('login-username').value;
  const loginPassword = document.getElementById('login-password').value;

  // Implement login logic (e.g., validate credentials, set user session)
  alert(`User ${loginUsername} logged in! (This is a placeholder function)`);
}

// Function to check if the user is already logged in
function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (!isLoggedIn) {
    showAccountForms();
  }
}

// Render products, check welcome status, and login status when the page loads
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  checkWelcomeStatus();
  checkLoginStatus();
});
