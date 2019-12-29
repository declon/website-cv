function showMenu() {
  document.getElementById("menu").style.visibility = "visible";
  document.getElementById("close-button").style.visibility = "visible";
  document.getElementById("menu").style.opacity = "1";
  document.getElementById("close-button").style.opacity = "1";
}

function closeMenu() {
  document.getElementById("menu").style.opacity = "0"
  document.getElementById("close-button").style.opacity = "0"
  document.getElementById("menu").style.visibility = "hidden";
  document.getElementById("close-button").style.visibility = "hidden";
}
