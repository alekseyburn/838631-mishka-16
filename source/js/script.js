  var navMain = document.querySelector('.page-header');
  var navToggle = document.querySelector('.page-header__toggle');

  navMain.classList.remove('page-header--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('page-header--menu-closed')) {
      navMain.classList.remove('page-header--menu-closed');
      navMain.classList.add('page-header--menu-opened');
    } else {
      navMain.classList.add('page-header--menu-closed');
      navMain.classList.remove('page-header--menu-opened');
    }
  });
