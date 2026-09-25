const botonModoOscuro = document.querySelector('#modo-oscuro');

botonModoOscuro.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
});