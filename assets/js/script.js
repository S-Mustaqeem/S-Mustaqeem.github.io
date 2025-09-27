// script.js

document.addEventListener("DOMContentLoaded", function () {
  const roles = [
    "Python Developer",
    "Researcher",
    "Learner"
  ];

  let index = 0;       // which role
  let charIndex = 0;   // which character in that role
  let currentRole = "";
  let isDeleting = false;
  const typingElement = document.getElementById("typing");

  function type() {
    const fullRole = roles[index];

    if (isDeleting) {
      // remove characters
      currentRole = fullRole.substring(0, charIndex--);
    } else {
      // add characters
      currentRole = fullRole.substring(0, charIndex++);
    }

    typingElement.textContent = currentRole;

    if (!isDeleting && charIndex === fullRole.length) {
      // wait before deleting
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    } else if (isDeleting && charIndex === 0) {
      // move to next word
      isDeleting = false;
      index = (index + 1) % roles.length;
    }

    setTimeout(type, isDeleting ? 100 : 150);
  }

  type();
});
