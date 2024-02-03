//////////////// Mobile Navigation //////////////////////
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});



//////////////////////////Smooth scrolling ///////////////
const section = document.getElementById("pricing");
document.querySelector(".hero-link").addEventListener("click", function (e) {
    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
});
