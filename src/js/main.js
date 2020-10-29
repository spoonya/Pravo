const swiperIntro = new Swiper('.swiper-container--intro', {
  direction: 'horizontal',
  loop: true,
  speed: 700,
  autoplay: true,

  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev',
  },
});

const swiperActivities = new Swiper('.swiper-container--activities', {
  direction: 'horizontal',
  loop: true,
  speed: 700,

  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev',
  },
});

const swiperReviews = new Swiper('.swiper-container--reviews', {
  direction: 'horizontal',
  loop: true,
  speed: 700,
  slidesPerView: 2,
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev',
  },
});
