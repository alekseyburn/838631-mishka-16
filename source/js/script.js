  var navMain = document.querySelector(".page-header");
  var navToggle = document.querySelector(".page-header__toggle");

  navMain.classList.remove("page-header--nojs");

  navToggle.addEventListener("click", function() {
    navMain.classList.toggle("page-header--menu-opened");
  });

  var link = document.querySelector(".weekly-good__button");
  var popup = document.querySelector(".cart");
  var overlay = document.querySelector(".overlay");

  link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("cart--show");
  overlay.classList.add("overlay--show");
});

  overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("cart--show");
  overlay.classList.remove("overlay--show");
});

  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("cart--show")) {
      popup.classList.remove("cart--show");
      overlay.classList.remove("overlay--show");
    }
  }
})
