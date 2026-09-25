const botonModoOscuro = document.querySelector('#modo-oscuro');

botonModoOscuro.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
});

const botonDetalles = document.querySelector('#btn-detalles-tuNombre');
const infoExtra = document.querySelector('#info-extra-tuNombre');

botonDetalles.addEventListener('click', () => {
  if (infoExtra.style.display === 'none') {
    infoExtra.style.display = 'block';
    botonDetalles.textContent = 'Ver menos detalles';
  } else {
    infoExtra.style.display = 'none';
    botonDetalles.textContent = 'Ver más detalles';
  }
});