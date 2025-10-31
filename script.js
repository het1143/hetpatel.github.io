/* Photo popup + nav toggle + reveal-on-scroll + slider */
document.addEventListener("DOMContentLoaded", () => {
  // NAV toggle for small screens
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  }

  // Photo popup
  const photoWrap = document.querySelector(".hero-photo");
  setTimeout(() => {
    if (photoWrap) photoWrap.classList.add("pop");
    // small scale animation by adding class that triggers CSS (handled via .pop on .hero-photo)
    photoWrap && photoWrap.classList.add("pop");
    // also make img visible by adding .pop class effect
    const img = photoWrap && photoWrap.querySelector("img");
    if (img) img.style.transform = "scale(1)";
    if (img) img.style.opacity = "1";
  }, 220);

  // IntersectionObserver for reveals
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        // once visible, we can unobserve for performance
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Slider logic
  const track = document.getElementById("track");
  const slides = track ? track.children : [];
  let idx = 0;
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  function show(i){
    if (!track) return;
    idx = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
  }
  if (prev && next) {
    prev.addEventListener("click", () => show(idx - 1));
    next.addEventListener("click", () => show(idx + 1));
  }
  // auto play
  let auto = setInterval(() => show(idx + 1), 4500);
  [prev, next].forEach(btn => {
    if (!btn) return;
    btn.addEventListener("click", () => {
      clearInterval(auto);
      auto = setInterval(() => show(idx + 1), 4500);
    });
  });

  // Smooth in-page links offset for sticky nav
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click", (e)=>{
      e.preventDefault();
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
});
