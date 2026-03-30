document.addEventListener("DOMContentLoaded", function () {
  // --- 1. TYPING EFFECT (Anak Design Vibe) ---
  // Pastikan di HTML ada <span id="typing-effect"></span>
  const typingTarget = document.getElementById("typing-effect");
  if (typingTarget) {
    const typewriter = new Typewriter(typingTarget, {
      loop: true,
      delay: 60,
      deleteSpeed: 40,
    });

    typewriter
      .typeString("Graphic Designer")
      .pauseFor(2500)
      .deleteAll()
      .typeString("UI/UX Designer")
      .pauseFor(2500)
      .deleteAll()
      .typeString("Informatics Student")
      .pauseFor(2500)
      .start();
  }

  // --- 2. FUNGSI ANIMASI ANGKA (Counter) ---
  const startCounter = (counter) => {
    if (counter.classList.contains("done")) return;
    const target = parseInt(counter.getAttribute("data-target") || 0);
    const duration = 2000;
    const stepTime = 30;
    let current = 0;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.innerText = target + "+";
        counter.classList.add("done");
        clearInterval(timer);
      } else {
        counter.innerText = Math.floor(current);
      }
    }, stepTime);
  };

  // --- 3. OBSERVER UNTUK COUNTER ---
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".counter").forEach(startCounter);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 },
    );
    observer.observe(aboutSection);
  }
});

// --- 4. CUSTOM CURSOR (Smooth & Anti-Stuck Version) ---
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

if (cursorDot && cursorOutline) {
  // Sembunyikan kursor bawaan sistem (opsional tapi disarankan)
  document.body.style.cursor = "none";

  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Pastikan kursor muncul saat bergerak di dalam area
    cursorDot.style.opacity = "1";
    cursorOutline.style.opacity = "1";

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate(
      { left: `${posX}px`, top: `${posY}px` },
      { duration: 150, fill: "forwards" },
    );
  });

  // Efek hilang saat mouse keluar dari jendela browser
  document.addEventListener("mouseleave", () => {
    cursorDot.style.opacity = "0";
    cursorOutline.style.opacity = "0";
  });

  // Muncul kembali saat masuk
  document.addEventListener("mouseenter", () => {
    cursorDot.style.opacity = "1";
    cursorOutline.style.opacity = "1";
  });
}
