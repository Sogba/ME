const swiper = new Swiper('.projectsCategories', {
  direction: 'vertical',
  loop: true,
  grabCursor: true,
  mousewheel: true, // allows scrolling with wheel
/* 
  autoplay: {
        delay: 10000,
        pauseOnMouseEnter: true,
        disableOnInteraction: true,
      },
*/
});

const subSwiperSoftware = new Swiper('.subSwiperSoftware', {
  direction: 'horizontal',
  loop: true,
  nested: true,
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 25,
  grid:{
    rows: 2,
  },
  /* 
  autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: true,
      },
      */
});

const subSwiperWeb = new Swiper('.subSwiperWeb', {
  direction: 'horizontal',
  loop: true,
  nested: true,
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 25,
  grid:{
    rows: 2,
  },
  /* 
  autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: true,
      },
      */
});

const subSwiperHardware = new Swiper('.subSwiperHardware', {
  direction: 'horizontal',
  loop: true,
  nested: true,
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 25,
  grid:{
    rows: 2,
  },
  /* 
  autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: true,
      },
      */
});


