// Toggle mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll animations using ScrollReveal
ScrollReveal().reveal(".hero-content", { duration: 1000, origin: "bottom", distance: "50px" });
ScrollReveal().reveal(".section h2", { duration: 800, origin: "bottom", distance: "30px" });
ScrollReveal().reveal(".skills-grid, .project-grid, .contact", { duration: 1000, origin: "bottom", distance: "40px" });
