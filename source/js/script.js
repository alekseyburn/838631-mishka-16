let deleteJsClass = function() {
  let navMain = document.querySelector(".page-header");

  if (!navMain) return;

  navMain.classList.remove("page-header--nojs");
};

deleteJsClass();

let menuToggle = function() {
  let navMain = document.querySelector(".page-header");
  let navToggle = document.querySelector(".page-header__toggle");

  if (!navMain || !navToggle) return;

  navToggle.addEventListener("click", function() {
    navMain.classList.toggle("page-header--menu-opened");
  });
};

menuToggle();

let modalInitiate = function () {
  let link = document.querySelectorAll(".button--modal");
  let popup = document.querySelector(".cart");
  let overlay = document.querySelector(".overlay");
  let lastFocus;

  if (!link || !popup || !overlay) return;

  let modalShow = function () {
    popup.classList.add("cart--show");
    overlay.classList.add("overlay--show");
    lastFocus = document.activeElement;
    popup.setAttribute('tabindex', '0');
    popup.focus();
  };

  let modalClose = function () {
    popup.classList.remove("cart--show");
    overlay.classList.remove("overlay--show");
    lastFocus.focus();
  };

  Array.prototype.forEach.call(link, function(link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      modalShow();
    });
  });

  overlay.addEventListener("click", function (event) {
    event.preventDefault();
    modalClose();
  });

  document.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
      return;
    }

    var key = event.keyCode;

    if (key === 'Escape' || key === 'Esc' || key === 27) {
      event.preventDefault();
      if (popup.classList.contains("cart--show")) {
        modalClose();
      };
    };
  });
};

modalInitiate();

let sliderInitiate = function () {
  let slides = document.querySelectorAll(".reviews__item");
  let prevSlideBtn = document.querySelector(".reviews__change-btn--prev");
  let nextSlideBtn = document.querySelector(".reviews__change-btn--next");
  let slideIndex = 1;

  if (!slides || !prevSlideBtn || !nextSlideBtn) return;

  let showSlide = function (currentSlide) {
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
  };

  showSlide(slideIndex);

  let nextSlide = function () {
    showSlide(slideIndex += 1);
  };

  let prevSlide = function () {
    showSlide(slideIndex -= 1);
  };

  prevSlideBtn.addEventListener("click", function (event) {
    event.preventDefault();
    prevSlide();
  });

  nextSlideBtn.addEventListener("click", function (event) {
    event.preventDefault();
    nextSlide();
  });
};

sliderInitiate();
