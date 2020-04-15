// var menuToggleButton = document.querySelector(".main-nav__dropbtn-checkbox");
var menuToggleButton = document.querySelector(".main-nav__dropbtn");
var menuToggleLabel = document.querySelector(".main-nav__dropbtn-label");
var menuToggleItems = document.querySelectorAll(".main-nav__item--toggle");
var isChecked = true;

function toggle() {
  isChecked = !isChecked;
  // menuToggleButton.checked = isChecked;
  var display = isChecked ? "initial" : "none";
  var imagePath = isChecked ? "./img/icon-menu-close.svg" : "./img/icon-menu-open.svg";
  // menuToggleLabel.style.backgroundImage = "url(" + imagePath + ")";
  menuToggleButton.src = imagePath;

  for (var i = 0; i < menuToggleItems.length; ++i) {
    menuToggleItems[i].style.display = display;
  }
}

function changeEventHandler() {
  toggle();
}

menuToggleButton.addEventListener("click", changeEventHandler);

toggle();
