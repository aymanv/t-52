

//**** SIDEBAR MENU CONTROLS */
const menu__overlay = document.querySelector('#menu__overlay');
const menu__list = document.querySelector('#menu__list');
const header__menuBtn = document.querySelector('#header__menuBtn');

[header__menuBtn /*, menu__overlay*/].forEach(elem => {
  elem.addEventListener('click', () => {
    if (menu__overlay.classList.contains('fixed')) {
      menu__overlay.classList.add('fade-out-anim');
      menu__list.classList.add('slide-out-menu');
      setTimeout(() => {
        menu__overlay.classList.add('hidden');
        menu__overlay.classList.remove('fixed');
        menu__overlay.classList.remove('fade-out-anim');
        menu__list.classList.remove('slide-out-menu');
      }, 300);
    } else {
      menu__overlay.classList.remove('hidden');
      menu__overlay.classList.add(...['fixed', 'fade-in-anim']);
      menu__list.classList.add('slide-in-menu');
      setTimeout(() => {
        menu__list.classList.remove('slide-in-menu');
        menu__overlay.classList.remove('fade-in-anim')
      }, 300);
    }
  });
});


//**** SIDEBAR MENU CONTROLS */
const favorite__overlay = document.querySelector('#favorite__overlay');
const favorite__list = document.querySelector('#favorite__list');
const header__favoriteBtn = document.querySelector('#header__favoriteBtn');

[header__favoriteBtn /*, favorite__overlay*/].forEach(elem => {
  elem.addEventListener('click', () => {
    if (favorite__overlay.classList.contains('fixed')) {
      favorite__list.classList.remove('slide-in-favorite');
      favorite__list.classList.add('slide-out-favorite');
      setTimeout(() => {
        favorite__overlay.classList.add('hidden');
        favorite__overlay.classList.remove('fixed');
      }, 300);
    } else {
      favorite__overlay.classList.remove('hidden');
      favorite__overlay.classList.add('fixed');
      favorite__list.classList.add('slide-in-favorite');
      favorite__list.classList.remove('slide-out-favorite');
    }
  });
});

//**** SUBMENU CONTROLS */
const menuListItems = Array.from(document.querySelectorAll('.menu-item'));
console.log('menuListItems', menuListItems);

menuListItems.forEach((item, idx) => {
  console.log('item', item);
  // let menuItemSelector = item.className.split(" ").slice(0, 1).join("");
  let submenu = document.querySelector(`.menu-item:nth-child(${(idx+1)}) > .submenu-list`) || null;
  let menuItemLink = document.querySelector(`.menu-item:nth-child(${(idx+1)}) > .menu-item-link`) || null;
  console.log('submenu', submenu);
  console.log('menuItemLink', menuItemLink);

  item.addEventListener('click', () => {
    if (menuItemLink) {
      if (!menuItemLink.classList.contains('active')) {
        menuItemLink.classList.add('active');
      } else {
        menuItemLink.classList.remove('active');
        menuItemLink.setAttribute('disabled', true);
      }
    }
    if (submenu) {
      if (!submenu.classList.contains('active')) {
        submenu.classList.add(...['active', 'slide-in-submenu']);
        setTimeout(() => {
          submenu.classList.remove('slide-in-submenu');
        }, 200);
      } else {
        submenu.classList.add('slide-out-submenu');
        setTimeout(() => {
          submenu.classList.remove('active');
          submenu.classList.remove('slide-out-submenu');
          menuItemLink.removeAttribute('disabled')
        }, 200);
      }
    }
  });
  
});




//**** INVENTORY VEHICLES SWIPER */
var swiperInventoryVehicles = new Swiper(".swiperInventoryVehicles", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: ".swiper-button-left",
    nextEl: ".swiper-button-right",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// reviews swiper
var swiperTestimonials = new Swiper(".swiperTestimonials", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});