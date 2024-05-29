document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const modal = document.getElementById('myModal');
    const modalMessage = document.getElementById('modalMessage');
    const closeBtn = document.querySelector('.close');

    // Open modal function
    function openModal(message, link) {
        modalMessage.innerHTML = message; // Set the modal message content
        const linkElement = document.createElement('a'); // Create a new anchor element
        linkElement.href = link; // Set the link URL
        linkElement.textContent = "LUA.html"; // Set the anchor text
        linkElement.style.color = "blue"; // Set the text color to blue
        linkElement.style.textDecoration = "underline"; // Add underline effect to the text
        modalMessage.appendChild(linkElement); // Append the anchor element to the modal message
        modal.style.display = 'block'; // Display the modal
    }

    // Close modal function
    function closeModal() {
        modal.style.display = 'none'; // Hide the modal
    }

    // Add event listener to close button
    closeBtn.addEventListener('click', closeModal);

    // Prevent the default form submission behavior and show the modal after clicking the login button
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Simulate account lockout condition
        const isAccountLocked = true; // This should be determined by your actual login logic

        if (isAccountLocked) {
            openModal("Your account has been locked. Please visit the following page for help: ", "LUA.html");
        } else {
            // Handle successful login
            alert("Login successful");
        }
    });
});
