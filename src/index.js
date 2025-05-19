import "./style/style.css";
import slideShift from "./modules/SlideShift.js";

const slideContainer = document.querySelector(".wide-slide");

const imageSlider = slideShift(slideContainer);

// initial right position set
imageSlider.resetToFirst();



