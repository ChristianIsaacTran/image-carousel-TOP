import "./style/style.css";
import slideShift from "./modules/SlideShift.js";

const slideContainer = document.querySelector(".wide-slide");

const imageSlider = slideShift(slideContainer);

imageSlider.resetToFirst();

imageSlider.nextSlide();
imageSlider.prevSlide();