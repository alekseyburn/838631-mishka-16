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
  let lastFocus;

  if (!link) {
    return;
  } else {
    //функция открытия модального окна и оверлея
    let modalShow = function () {
      popup.classList.add("cart--show");
      overlay.classList.add("overlay--show");
      lastFocus = document.activeElement;
      popup.setAttribute('tabindex', '0');
      popup.focus();
    };

    //функция закрытия модального окна и оверлея
    let modalClose = function () {
      popup.classList.remove("cart--show");
      overlay.classList.remove("overlay--show");
      lastFocus.focus();
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

      var key = event.keyCode;

      if (key === 'Escape' || key === 'Esc' || key === 27) {
        event.preventDefault();
        if (popup.classList.contains("cart--show")) {
          modalClose();
        }
      }
    });

    //слайдер
    let slideIndex = 1;
    showSlide(slideIndex);
    //следующий слайд
    function nextSlide() {
      showSlide(slideIndex += 1);
    }
    //предыдущий слайд
    function prevSlide() {
      showSlide(slideIndex -= 1);
    }

    //функция показа слайда
    function showSlide(currentSlide) {
      let slides = document.querySelectorAll(".reviews__item");

      if (currentSlide > slides.length) {
        slideIndex = 1;
      }

      if (currentSlide < 1) {
        slideIndex = slides.length;
      }

      Array.prototype.forEach.call(slides, function(slideIndex, i) {
        slides[i].style.display = "none";
      });

      slides[slideIndex - 1].style.display = "block";
    }
    //назначение переключателей на кнопки
    let prevSlideBtn = document.querySelector(".reviews__change-btn--prev");
    let nextSlideBtn = document.querySelector(".reviews__change-btn--next");

    prevSlideBtn.addEventListener("click", function (event) {
      event.preventDefault();
      prevSlide();
    });

    nextSlideBtn.addEventListener("click", function (event) {
      event.preventDefault();
      nextSlide();
    });
  }
})();
