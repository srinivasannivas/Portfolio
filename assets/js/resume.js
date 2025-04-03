document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".navbar ul");

    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("active");
    }); // ✅ Corrected closing bracket and semicolon
});
