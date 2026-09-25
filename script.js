const botonModoOscuro = document.querySelector('#modo-oscuro');

botonModoOscuro.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
});
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