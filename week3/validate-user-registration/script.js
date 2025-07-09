document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const message = document.getElementById('formMessage');

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Fixed regex

  const validatePassword = (password) =>
  /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password);


  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!name || !email || !password || !confirmPassword) {
      message.textContent = 'Please fill in all fields.';
      return;
    }

    if (!validateEmail(email)) {
      message.textContent = 'Invalid email format.';
      return;
    }

    if (!validatePassword(password)) {
      message.textContent = 'Password must be at least 6 characters and contain letters & numbers.';
      return;
    }

    if (password !== confirmPassword) {
      message.textContent = 'Passwords do not match.';
      return;
    }

    message.style.color = 'green';
    message.textContent = 'Registration successful!';
    form.reset();
  });
});
