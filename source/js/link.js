'use strict';
(function() {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                Element.prototype.webkitMatchesSelector;
  }

  var containerSelector = ".js-purchase";
  var linkSelector = ".js-purchase__link";
  var nameSelector = ".js-purchase__name";
  var formWrapper = document.querySelector(".select-size");
  var form = document.querySelector(".select-size__form");

  function clickHandler(evt) {
    var parent = findAncestor(evt.target, containerSelector);
    var name = parent.querySelector(nameSelector).innerText;
    var nameInput = form.querySelector(".select-size__item");
    nameInput.value = name;

    showForm();
  }

  var links = document.querySelectorAll(linkSelector);
  for (var i = 0; i < links.length; ++i) {
    links[i].removeAttribute("href");
    links[i].addEventListener('click', clickHandler);
  }

  function veilClickHandler(evt) {
    if (evt.target === formWrapper) {
      hideForm();
    }
  }

  function showForm() {
    formWrapper.classList.add("select-size--revealed");
    formWrapper.addEventListener("click", veilClickHandler);
  }

  function hideForm() {
    formWrapper.classList.remove("select-size--revealed");
    formWrapper.removeEventListener("click", veilClickHandler);
  }

  function findAncestor(element, selector) {
    for (var parent = element.parentElement; parent; parent = parent.parentElement) {
      if (Element.prototype.matches.call(parent, selector)) {
        return parent;
      }
    }
  }
})();
