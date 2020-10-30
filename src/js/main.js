const swiperIntro = new Swiper('.swiper-container--intro', {
  direction: 'horizontal',
  loop: true,
  speed: 700,
  autoplay: true,

  navigation: {
    nextEl: '.slider-btn-next--intro',
    prevEl: '.slider-btn-prev--intro',
  },
});

const swiperActivities = new Swiper('.swiper-container--activities', {
  direction: 'horizontal',
  loop: true,
  speed: 700,

  navigation: {
    nextEl: '.slider-btn-next--activities',
    prevEl: '.slider-btn-prev--activities',
  },
});

const swiperReviews = new Swiper('.swiper-container--reviews', {
  direction: 'horizontal',
  loop: true,
  speed: 700,
  slidesPerView: 2,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },

  navigation: {
    nextEl: '.slider-btn-next--reviews',
    prevEl: '.slider-btn-prev--reviews',
  },
});
