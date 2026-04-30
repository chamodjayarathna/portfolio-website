/*
Javascript File for Portfolio
*/

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded Successfully!");

  // --- Smooth Scrolling for Navigation Links ---
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // --- Hamburger Menu Toggle ---

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // --- Page Fade In on Load ---

  var mainContent = document.querySelector("main") || document.body;
  mainContent.style.opacity = "0";
  mainContent.style.transition = "opacity 1s ease";

  window.onload = function () {
    mainContent.style.opacity = "1";
  };
});
