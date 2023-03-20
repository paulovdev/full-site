//BarMenu
const menuToggle = document.querySelector(".menu-toggle");
const menuIcon = document.querySelector(".menu-toggle i");
const menuDrop = document.querySelector(".menu-drop");

menuToggle.onclick = function () {
  menuDrop.classList.toggle("open");

  const iconOpen = menuDrop.classList.contains("open");
  menuIcon.classList = iconOpen ? "fa fa-close" : "fa fa-bars";
};

//

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var wHeight = window.innerHeight;
    var rTop = reveals[i].getBoundingClientRect().top;
    var rPoint = 150;

    if (rTop < wHeight - rPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


