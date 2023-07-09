let sliderContainer = document.querySelector('.slider-container');
let innerSlider = document.querySelector('.inner-slider');

let pressed = false;
let startX;
let x;

const checkBoundary = () => {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 180) {
        innerSlider.style.left = "180px";
    }

    if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
};

sliderContainer.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
})
sliderContainer.addEventListener("mouseenter", () => {
    sliderContainer.style.cursor = "grab";
})
sliderContainer.addEventListener("mouseup", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
})
sliderContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;
    innerSlider.style.left = `${x - startX}px`;
    checkBoundary();
})
