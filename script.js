const botonModoOscuro = document.querySelector('#modo-oscuro');

botonModoOscuro.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
});

const botonDetalles = document.querySelector('#btn-detalles-tuNombre');
const infoExtra = document.querySelector('#info-extra-tuNombre');