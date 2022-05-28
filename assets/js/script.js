// var swiper = new Swiper(".testimonial-slider", {
//   grabCursor: true,
//   centeredSlides: true,
//   spaceBetween: 20,
//   loop: true,
//   autoplay: {
//     delay: 9500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 1,
//     },
//     1024: {
//       slidesPerView: 1,
//     },
//   },
// });

var swiper = new Swiper(".testimonial-slider", {
  grabCursor: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
