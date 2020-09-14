var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var siteList = document.querySelector('.site-list');

      navMain.classList.remove('main-nav--nojs');

      siteList.classList.add('site-list--js');

      navToggle.classList.add('main-nav__toggle--js');

      navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('main-nav--closed')) {
          navMain.classList.remove('main-nav--closed');
          navMain.classList.add('main-nav--opened');
        } else {
          navMain.classList.add('main-nav--closed');
          navMain.classList.remove('main-nav--opened');
        }
      });
