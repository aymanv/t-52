

//***********************************************************************************/
//**************************** HOME JUMBO SWIPER ****************************/
//***********************************************************************************/

var swiperJumboHome = new Swiper(".swiperJumboHome", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});


//***********************************************************************************/
//**************************** INVENTORY VEHICLES SWIPER ****************************/
//***********************************************************************************/
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



//***********************************************************************************/
//******************************* TESTIMONIALS SWIPER *******************************/
//***********************************************************************************/
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