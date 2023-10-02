document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Extract user input
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Perform input validation
        if (username.length < 4) {
            showError('usernameError', 'Username must be at least 4 characters.');
            return;
        }
        if (!validateEmail(email)) {
            showError('emailError', 'Please enter a valid email address.');
            return;
        }
        if (password.length < 8) {
            showError('passwordError', 'Password must be at least 8 characters.');
            return;
        }
        if (password !== confirmPassword) {
            showError('confirmPasswordError', 'Passwords do not match.');
            return;
        }

        // Registration is successful, redirect to a success page
        window.location.href = 'success.html';
    });

    // Helper function to display error messages
    function showError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
    }

    // Helper function to validate email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
