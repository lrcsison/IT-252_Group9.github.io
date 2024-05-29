document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Simulate account lockout condition
        const isAccountLocked = true; // This should be determined by your actual login logic

        if (isAccountLocked) {
            alert("Your account has been locked. Please visit the following page for help: LUA.html");
        } else {
            // Handle successful login
            alert("Login successful");
        }
    });

    document.getElementById('forgotPassword').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        alert("Your account has been locked. Please visit the following page for help: LUA.html");
    });
});
