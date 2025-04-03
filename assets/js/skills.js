document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".navbar ul");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navList.classList.toggle("active");
        });
    }

    // Scroll animation for skill boxes
    const skillBoxes = document.querySelectorAll(".skill-box");

    function fadeInSkills() {
        skillBoxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (boxTop < windowHeight - 50) {
                box.classList.add("visible");
            }
        });
    }

    // Run fade-in animation on scroll
    window.addEventListener("scroll", fadeInSkills);
    fadeInSkills();
});
