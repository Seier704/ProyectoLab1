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
  const abierto = !extraJavier.classList.contains('oculto');
  botonJavier.textContent = abierto ? '🔼 Ver menos' : '🔽 Ver más';
});

const botonDestacar = document.querySelector('#javier-destacar');
const tarjetaJavier = document.querySelector('#javier');

botonDestacar.addEventListener('click', () => {
  tarjetaJavier.classList.toggle('destacado');
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