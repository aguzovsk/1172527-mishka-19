'use strict';
(function() {
  var nonMobileWidth = "768px";
  var menuToggleButton = document.querySelector(".main-nav__dropbtn");
  var menuToggleItems = document.querySelectorAll(".main-nav__group--toggle");
  var isChecked = true;

  function toggle() {
    isChecked = !isChecked;
    var display = isChecked ? "initial" : "none";
    var imagePath = isChecked ? "./img/icon-menu-close.svg" : "./img/icon-menu-open.svg";
    menuToggleButton.src = imagePath;

    for (var i = 0; i < menuToggleItems.length; ++i) {
      menuToggleItems[i].style.display = display;
    }
  }

  function changeEventHandler() {
    toggle();
  }

  var mql = window.matchMedia("(min-width: " + nonMobileWidth + ")");
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
})();
