document.addEventListener("DOMContentLoaded", function () {
    // ✅ Toggle the menu
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        document.querySelector(".navbar ul").classList.toggle("active");
    });

    // ✅ Close menu when clicking outside
    document.addEventListener("click", function (event) {
        const navLinks = document.querySelector(".navbar ul");
        const menuToggle = document.querySelector(".menu-toggle");

        if (!event.target.closest(".menu-toggle") && !event.target.closest(".navbar ul")) {
            navLinks.classList.remove("active");
        }
    });

    // ✅ Contact Form Validation (No Mailto)
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        let errorMessage = document.getElementById("error-message");

        // Create error message element if it doesn't exist
        if (!errorMessage) {
            errorMessage = document.createElement("p");
            errorMessage.id = "error-message";
            errorMessage.style.color = "red";
            document.getElementById("contact-form").prepend(errorMessage);
        }

        // Email validation regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation checks
        if (!name || !email || !message) {
            errorMessage.innerText = "Please fill in all fields.";
            return;
        }
        if (!emailPattern.test(email)) {
            errorMessage.innerText = "Please enter a valid email address.";
            return;
        }

        // Reset error message
        errorMessage.innerText = "";

        // ✅ Form is valid
        alert("Form validated successfully! Sending... (placeholder)");
        event.target.submit();
    });
});