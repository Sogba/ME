const categorySwiper = new Swiper('.project-categories', {
  grabCursor: true,
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


document.querySelectorAll('.subSwiper').forEach(sub => {
  new Swiper(sub, {
    direction: 'vertical',
    grabCursor: true,
    slidesPerView: 4,
    spaceBetween: 30,
    mousewheel: true,
    grid: {
      columnns: 3,
    },
  });
});
