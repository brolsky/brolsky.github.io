const navbarToggleBtn = document.getElementById('navbar-toggle-btn');
const navbarLinks = document.getElementById('navbar-links');

navbarToggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('show');
});

var navbar = document.querySelector(".navbar");
var sections = document.querySelectorAll("section");

function scrollToSection(section) {
  window.scrollTo({
    top: section.offsetTop,
    left: 0,
    behavior: "smooth"
  });
}

sections.forEach(function(section) {
  var sectionId = section.getAttribute("id");
  var navLink = document.querySelector('a[href="#' + sectionId + '"]');
  navLink.addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection(section);
  });
});