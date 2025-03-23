export const gallerySlider = () => {
  let gallerySlider = new Swiper(".gallery__slider", {
    spaceBetween: 10,
    freeMode: true,
    thumbs: {
      swiper: {
        spaceBetween: 4,
        slidesPerView: 5,
        el: ".gallery__slider-thumbs",
      },
    },
  });
};
