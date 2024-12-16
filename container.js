const container = document.querySelector('.container');
// seleciona o container no console

window.addEventListener('scroll', () => {
    // ativa com oevento de rolagem
  const scrollPosition = window.scrollY;

  const newWidth = Math.min(1200 + scrollPosition * 0.5, 1400);
  const newHeight = Math.min(336 + scrollPosition * 0.3, 500); 

  container.style.width = `${newWidth}px`;
  container.style.height = `${newHeight}px`;
});
// calculo position 0.5 width e 0.3 height maximo 1400px width e 500 height, valor mesclado