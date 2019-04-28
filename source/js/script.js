  let deleteJs = function() {
    let navMain = document.querySelector(".page-header");

    if (!navMain) return;

    navMain.classList.remove("page-header--nojs");
  };

  deleteJs();

  let menuToggle = function() {
    let navMain = document.querySelector(".page-header");
    let navToggle = document.querySelector(".page-header__toggle");

    if (!navMain || !navToggle) return;

    navToggle.addEventListener("click", function() {
    navMain.classList.toggle("page-header--menu-opened");
    });
  };

  menuToggle();

  let modal = function () {
    let link = document.querySelector(".weekly-good__button");
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

    let openSizeMenu = function() {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        modalShow();
      });
    };

    openSizeMenu();

    let closeSizeMenu = function() {
      overlay.addEventListener("click", function (event) {
        event.preventDefault();
        modalClose();
      });
    };

    closeSizeMenu();

    let closeEsc = function() {
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
    }

    closeEsc();
  }

  modal();

  let slider = function () {
    let slides = document.querySelectorAll(".reviews__item");
    let prevSlideBtn = document.querySelector(".reviews__change-btn--prev");
    let nextSlideBtn = document.querySelector(".reviews__change-btn--next");
    let slideIndex = 1;

    if (!slides || !prevSlideBtn || !nextSlideBtn) return;

    function showSlide(currentSlide) {
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

    showSlide(slideIndex);

    function nextSlide() {
      showSlide(slideIndex += 1);
    };

    function prevSlide() {
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
  }

  slider();
