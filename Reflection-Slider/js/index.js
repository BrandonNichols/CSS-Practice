$(document).ready(function () {
  const swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: -100,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  });
});
