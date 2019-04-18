  "use strict";

  (function () {
    let navMain = document.querySelector(".page-header");
    let navToggle = document.querySelector(".page-header__toggle");

  navMain.classList.remove("page-header--nojs"); //удаляем класс nojs, если js доступен

  navToggle.addEventListener("click", function() {
    navMain.classList.toggle("page-header--menu-opened"); //открываем/закрываем меню при нажатии на бургер/крестик
  });

  let link = document.querySelector(".weekly-good__button");
  let popup = document.querySelector(".cart");
  let overlay = document.querySelector(".overlay");

  let modalShow = function () { //функция открытия модального окна и оверлея
    popup.classList.add("cart--show");
    overlay.classList.add("overlay--show");
  };

  let modalClose = function () { //функция закрытия модального окна и оверлея
    popup.classList.remove("cart--show");
    overlay.classList.remove("overlay--show");
  };

  link.addEventListener("click", function (event) { //открываем модалку при нажатии на кнопку "заказать"
    event.preventDefault();
    modalShow();
  });

  overlay.addEventListener("click", function (event) { //закрываем модалку при нажатии на оверлей
    event.preventDefault();
    modalClose();
  });

  document.addEventListener("keyup", function (event) { //закрываем модалку при нажатии на esc
    if (event.defaultPrevented) {
      return;
    }

    let key = event.key || event.keyCode;

    if (key === 'Escape' || key === 'Esc' || key === 27) {} {
      event.preventDefault();
      if (popup.classList.contains("cart--show")) {
        modalClose();
      }
    }
  });

})();
