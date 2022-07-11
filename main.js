const slider = document.querySelector(".slider");
const sliderLine = document.querySelector(".slidr__line");
const images = document.querySelectorAll(".slide img");
const prevBtn = document.querySelector("slider__prevBtn");
const nextBtn = document.querySelector("slider__nextBtn");

let orderImg = 0;
let width;

function initWidthLine() {
  width = slider.offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((img) => {
    img.style.width = width + "px";
    img.style.height = height + "px";
  });
}

window.addEventListener("resize", initWidthLine);

initWidthLine();

nextBtn.addEventListener("click", function () {
  orderImg++;
  scrollSlider();
});

function scrollSlider() {
  sliderLine.style.transform = "translate(- " + orderImg * width + "px)";
}
