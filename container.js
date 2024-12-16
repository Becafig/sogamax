const container = document.querySelector('.container');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Calcula o novo tamanho baseado na rolagem
  const newWidth = Math.min(1200 + scrollPosition * 0.5, 1400); // Limita a largura a 1300px
  const newHeight = Math.min(336 + scrollPosition * 0.3, 500);  // Limita a altura a 500px

  // Aplica os novos tamanhos ao elemento
  container.style.width = `${newWidth}px`;
  container.style.height = `${newHeight}px`;
});
