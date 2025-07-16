document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    function login() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        if (username && password) {
            alert('Login successful! Welcome ' + username);
            window.location.href = 'index.html';
        } else {
            alert('Please fill in all fields.');
        }
    }

    window.login = login;
});
