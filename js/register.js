document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');

    function register() {
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        if (username && email && password) {
            alert('Registration successful! Please log in.');
            window.location.href = 'login.html';
        } else {
            alert('Please fill in all fields.');
        }
    }

    window.register = register;
});
