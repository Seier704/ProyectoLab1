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
const botonSorpresa = document.querySelector('#boton-sorpresa');
const mensajeSorpresa = document.querySelector('#mensaje-sorpresa');

const frases = [
  "Wena wena waton mysterion! 🚀",
  "Ch!palo alexitico ",
  "Nose que mas poner como mensaje",
  

];

botonSorpresa.addEventListener('click', () => {
  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  mensajeSorpresa.textContent = frases[indiceAleatorio];
});