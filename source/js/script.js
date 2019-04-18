"use strict";

(function () {
  let navMain = document.querySelector(".page-header");
  let navToggle = document.querySelector(".page-header__toggle");

  //удаляем класс nojs, если js доступен
  navMain.classList.remove("page-header--nojs");

  navToggle.addEventListener("click", function() {
    //открываем/закрываем меню при нажатии на бургер/крестик
    navMain.classList.toggle("page-header--menu-opened");
  });

  let link = document.querySelector(".weekly-good__button");
  let popup = document.querySelector(".cart");
  let overlay = document.querySelector(".overlay");

  //функция открытия модального окна и оверлея
  let modalShow = function () {
    popup.classList.add("cart--show");
    overlay.classList.add("overlay--show");
  };

  //функция закрытия модального окна и оверлея
  let modalClose = function () {
    popup.classList.remove("cart--show");
    overlay.classList.remove("overlay--show");
  };

  //открываем модалку при нажатии на кнопку "заказать"
  link.addEventListener("click", function (event) {
    event.preventDefault();
    modalShow();
  });

  //закрываем модалку при нажатии на оверлей
  overlay.addEventListener("click", function (event) {
    event.preventDefault();
    modalClose();
  });

  //закрываем модалку при нажатии на esc
  document.addEventListener("keyup", function (event) {
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
