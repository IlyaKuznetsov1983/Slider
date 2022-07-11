const slider = document.querySelector(".slider");
const sliderLine = document.querySelector(".slidr__line");
const images = document.querySelectorAll(".slide img");


let orderImg = 0
let width


function initWidthLine() {
    width = slider.offsetWidth
    console.log(width);
}

initWidthLine()