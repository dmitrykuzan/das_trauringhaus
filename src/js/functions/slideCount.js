export const SlideCount = () => {
  document.querySelectorAll(".gallery__item").forEach((card) => {
    const galleryName = card
      .querySelector("[data-fslightbox]")
      ?.getAttribute("data-fslightbox");

    if (galleryName) {
      const slideCount = document.querySelectorAll(
        `[data-fslightbox="${galleryName}"]`
      ).length;

      const countElement = card.querySelector(".gallery__item-count");
      if (countElement) {
        countElement.textContent = `+${slideCount}`;
      }
    }
  });
};
