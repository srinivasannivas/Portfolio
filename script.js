document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a[data-link]");

  // Toggle mobile menu
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Hide current section link
  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const current = entry.target.id;
          links.forEach(link => {
            if (link.dataset.link === current) {
              link.style.display = "none";
            } else {
              link.style.display = "inline-block";
            }
          });
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach(section => observer.observe(section));
});
