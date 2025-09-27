/* ===== Animated Typing Effect ===== */
const subtitles = ["Python Developer", "Researcher", "Learner"];
let i = 0;
let j = 0;
let currentSubtitle = "";
let isDeleting = false;
const speed = 150; // typing speed

function typeEffect() {
  const subtitleElement = document.querySelector(".subtitles");
  
  if (!isDeleting && j <= subtitles[i].length) {
    currentSubtitle = subtitles[i].substring(0, j++);
    subtitleElement.textContent = currentSubtitle;
  } 
  if (isDeleting && j >= 0) {
    currentSubtitle = subtitles[i].substring(0, j--);
    subtitleElement.textContent = currentSubtitle;
  }

  if (j === subtitles[i].length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // wait 1 sec at end
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % subtitles.length; // move to next subtitle
  }

  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

/* ===== Scroll Effect: Hide Name on Scroll ===== */
window.addEventListener("scroll", () => {
  const headerText = document.querySelector(".header-text");
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    headerText.style.opacity = 0; // fade out name
    headerText.style.transition = "opacity 0.5s ease";
  } else {
    headerText.style.opacity = 1; // show name
  }
});

/* ===== Smooth Scroll for Buttons ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
