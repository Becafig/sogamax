const slider = document.getElementById('imageSlider'); // O contêiner do slider
const slides = Array.from(slider.children); // Array dos slides originais
let animationPaused = false; // Flag para pausar a animação
let sliderPosition = 0; // Posição inicial do slider

// DUPLICA os slides para criar o efeito de rotação infinita
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
});

// Calcula a largura total de um slide
const slideWidth = slides[0].offsetWidth + 30; // Inclui o padding entre imagens

// Função de movimento do slider
function moveSlider() {
    if (!animationPaused) {
        sliderPosition -= 1; // Move 1px por ciclo

        // Quando o slider ultrapassar a largura total, reinicia suavemente
        if (Math.abs(sliderPosition) >= slideWidth * slides.length) {
            sliderPosition = 0; // Reinicia sem voltar abruptamente
        }

        // Aplica o movimento com transform
        slider.style.transform = `translateX(${sliderPosition}px)`;
    }

    requestAnimationFrame(moveSlider); // Requisita o próximo ciclo de animação
}

// Inicia a animação do slider
moveSlider();

// Pausar e retomar animação ao passar o mouse
slider.addEventListener('mouseover', () => {
    animationPaused = true;
});

slider.addEventListener('mouseout', () => {
    animationPaused = false;
});
