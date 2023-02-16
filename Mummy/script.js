var sidemenu = document.getElementById("side-menu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
