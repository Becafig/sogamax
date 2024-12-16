const container = document.querySelector('.container');
// seleciona o container no console

window.addEventListener('scroll', () => {
    // ativa com o evento de rolagem
    const scrollPosition = window.scrollY;

    const newWidth = Math.min(1200 + scrollPosition * 0.5, 1400);
    const newHeight = Math.min(336 + scrollPosition * 0.3, 500);

    container.style.width = `${newWidth}px`;
    container.style.height = `${newHeight}px`;
});
// calculo position 0.5 width e 0.3 height maximo 1400px width e 500 height, valor mesclado

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

document.addEventListener('DOMContentLoaded', function () {
    const placeholders = document.querySelectorAll('.youtube-placeholder');

    placeholders.forEach(placeholder => {
        placeholder.addEventListener('click', function () {
            const videoId = placeholder.getAttribute('data-video-id');
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', true);
            iframe.style.width = '100%';
            iframe.style.height = '100%';

            placeholder.innerHTML = '';
            placeholder.appendChild(iframe);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const emailUser = "contato";
    const emailDomain = "sogamax.com.br";
    const emailDisplay = document.getElementById('email-display');

    emailDisplay.innerHTML = `<a href="mailto:${emailUser}@${emailDomain}">${emailUser}@${emailDomain}</a>`;
});