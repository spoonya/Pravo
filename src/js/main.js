const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  speed: 700,

  navigation: {
    nextEl: '.intro__btn-next',
    prevEl: '.intro__btn-prev',
  },
});
