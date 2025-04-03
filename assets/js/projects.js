function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    const navLinks = document.getElementById("nav-links");
    const menuToggle = document.querySelector(".menu-toggle");

    if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove("active");
    }
});
