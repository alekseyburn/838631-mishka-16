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



  //слайдер
  let slideIndex = 1;
  showSlides(slideIndex);
  //следующий слайд
  function plusSlide() {
    showSlides(slideIndex += 1);
  }
  //предыдущий слайд
  function minusSlide() {
    showSlides(slideIndex -= 1);
  }
  //текущий слайд
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  //функция показа слайда
  function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".reviews__item");

    if (n > slides.length) {
      slideIndex = 1
    }

    if (n < 1) {
      slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }
  //назначение переключателей на кнопки
  var slideLeft = document.querySelector(".reviews__change-btn--prev");
  var slideRight = document.querySelector(".reviews__change-btn--next");

  slideLeft.addEventListener("click", function (event) {
    event.preventDefault();
    minusSlide();
  });

  slideRight.addEventListener("click", function (event) {
    event.preventDefault();
    plusSlide();
  });

})();
