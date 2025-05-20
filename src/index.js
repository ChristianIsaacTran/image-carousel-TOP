import "./style/style.css";
import slideShift from "./modules/SlideShift.js";

const slideContainer = document.querySelector(".wide-slide");
const prevNavButton = document.querySelector(".nav-button.prev");
const nextNavButton = document.querySelector(".nav-button.next");

const imageSlider = slideShift(slideContainer);

// initial right position set
imageSlider.resetToFirst();

// add event handlers to nav buttons for prev and next
prevNavButton.addEventListener("click", imageSlider.prevSlide);

nextNavButton.addEventListener("click", imageSlider.nextSlide);
