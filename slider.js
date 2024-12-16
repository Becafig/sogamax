const slider = document.getElementById('imageSlider'); // imageslider
const slides = Array.from(slider.children);
let animationPaused = false;  // pause anima
let sliderPosition = 0; 

slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
});

const slideWidth = slides[0].offsetWidth + 30; // aumento

function moveSlider() {
    if (!animationPaused) {
        sliderPosition -= 1; 

        if (Math.abs(sliderPosition) >= slideWidth * slides.length) {
            sliderPosition = 0;
        }

        slider.style.transform = `translateX(${sliderPosition}px)`;
    }

    requestAnimationFrame(moveSlider); 
}

moveSlider();
// mouse por cima função
slider.addEventListener('mouseover', () => {
    animationPaused = true; 
});

slider.addEventListener('mouseout', () => {
    animationPaused = false;
});
