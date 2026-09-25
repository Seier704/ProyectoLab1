const botonModoOscuro = document.querySelector('#modo-oscuro');

botonModoOscuro.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
});

const botonJavier = document.querySelector('#javier-toggle');
const extraJavier = document.querySelector('#javier-extra');

botonJavier.addEventListener('click', () => {
  console.log('clic detectado');
});

botonJavier.addEventListener('click', () => {
  extraJavier.classList.toggle('oculto');
});

botonJavier.addEventListener('click', () => {
  extraJavier.classList.toggle('oculto');
  botonJavier.textContent = extraJavier.classList.contains('oculto') ? 'Ver más' : 'Ver menos';
});