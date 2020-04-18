// var menuToggleButton = document.querySelector(".main-nav__dropbtn-checkbox");
var nonMobileWidth = "768px";
var menuToggleButton = document.querySelector(".main-nav__dropbtn");
var menuToggleLabel = document.querySelector(".main-nav__dropbtn-label");
var menuToggleItems = document.querySelectorAll(".main-nav__group--toggle");
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

var mql = window.matchMedia("(min-width: " + nonMobileWidth + ")");
// mql.addEventListener("change", mediaQueryChangeHandler);
mql.addListener(mediaQueryChangeHandler);

function mediaQueryChangeHandler(event) {
  for (var i = 0; i < menuToggleItems.length; ++i) {
    menuToggleItems[i].removeAttribute("style");
  }

  if (event.matches) {
    menuToggleButton.removeEventListener("click", changeEventHandler);
  } else {
    menuToggleButton.addEventListener("click", changeEventHandler);
    isChecked = !isChecked;
    toggle();
  }
}


if (!mql.matches) {
  menuToggleButton.addEventListener("click", changeEventHandler);
  toggle();
}

