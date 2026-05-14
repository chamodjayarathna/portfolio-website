/*
Javascript File for Portfolio
*/
document.addEventListener("DOMContentLoaded", function () {
  // Scroll function
  window.onscroll = function () {
    var skills = document.getElementById("skills");
    var opacityValue = window.scrollY < 150 ? "0" : "1";
    if (skills) skills.style.opacity = opacityValue;
    if (about) about.style.opacity = opacityValue;
  };

  // Basic menu toggle for mobile users
  var burger = document.querySelector(".hamburger");
  var nav = document.querySelector(".nav-links");
  if (burger) {
    burger.onclick = function () {
      nav.classList.toggle("active");
    };
  }
});
