"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import {
  burger,
  calendar,
  dynamicAdaptive,
  mobileCheck,
  modals,
  SlideCount,
} from "./functions/";

// Components
import { gallerySlider } from "./components";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  burger();
  gallerySlider();
  SlideCount();
  calendar();
  modals();
  dynamicAdaptive();

  let fsLightboxLoaded = false;

  document.querySelectorAll(".gallery__link").forEach((link) => {
    link.addEventListener("click", async (event) => {
      if (!fsLightboxLoaded) {
        event.preventDefault();
        await import("fslightbox");
        fsLightboxLoaded = true;
        link.click();
      }
    });
  });

  document.querySelectorAll(".gallery__link-swiper").forEach((link) => {
    link.addEventListener("click", async (event) => {
      if (!fsLightboxLoaded) {
        event.preventDefault();
        await import("fslightbox");
        fsLightboxLoaded = true;
        link.click();
      }
    });
  });
});
