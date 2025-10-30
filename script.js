// --- Popup animation on load for profile image ---
document.addEventListener("DOMContentLoaded", () => {
  const pWrap = document.getElementById("profilePopup");
  // add class to trigger CSS animation
  setTimeout(() => pWrap.classList.add("popup"), 260);

  // small hover bounce on profile
  pWrap.addEventListener("mouseenter", () => pWrap.style.transform = "scale(1.03)");
  pWrap.addEventListener("mouseleave", () => pWrap.style.transform = "");
});

// --- ScrollReveal configuration ---
if (window.ScrollReveal) {
  const sr = ScrollReveal({
    distance: "30px",
    duration: 700,
    easing: "cubic-bezier(.2,.9,.3,1)",
    origin: "bottom",
    scale: 1,
    viewFactor: 0.12,
    reset: false
  });

  sr.reveal(".hero-inner", { origin: "left", distance: "40px", duration: 900 });
  sr.reveal(".section-title", { delay: 80, origin: "bottom" });
  sr.reveal("[data-sr]", { interval: 120 });
  sr.reveal(".project-slider", { origin: "right", distance: "40px" });
  sr.reveal(".pub-card", { origin: "bottom" });
}

// --- Simple slider for the project-output sliding window ---
(function () {
  const track = document.getElementById("sliderTrack");
  if (!track) return;
  const slides = track.children;
  let idx = 0;

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function show(index){
    idx = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
  }

  prevBtn.addEventListener("click", () => show(idx - 1));
  nextBtn.addEventListener("click", () => show(idx + 1));

  // auto-advance every 4.5s
  let auto = setInterval(() => show(idx + 1), 4500);
  [prevBtn, nextBtn].forEach(btn => {
    btn.addEventListener("click", () => {
      clearInterval(auto);
      auto = setInterval(() => show(idx + 1), 4500);
    });
  });
})();
