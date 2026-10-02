const botonModoOscuro = document.querySelector('#modo-oscuro');

botonModoOscuro.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
});

const botonJavier = document.querySelector('#javier-toggle');
const extraJavier = document.querySelector('#javier-extra');

botonJavier.addEventListener('click', () => {
  extraJavier.classList.toggle('oculto');
  const abierto = !extraJavier.classList.contains('oculto');
  botonJavier.textContent = abierto ? '🔼 Ver menos' : '🔽 Ver más';
  botonJavier.setAttribute('aria-expanded', String(abierto));
});

const botonDestacar = document.querySelector('#javier-destacar');
const tarjetaJavier = document.querySelector('#javier');

botonDestacar.addEventListener('click', () => {
  tarjetaJavier.classList.toggle('destacado');
});

const botonDetalles = document.querySelector('#btn-detalles-tuNombre');
const infoExtra = document.querySelector('#info-extra-tuNombre');

botonDetalles.addEventListener('click', () => {
  infoExtra.hidden = !infoExtra.hidden;
  const abierto = !infoExtra.hidden;
  botonDetalles.textContent = abierto ? 'Ver menos detalles' : 'Ver más detalles';
  botonDetalles.setAttribute('aria-expanded', String(abierto));
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

const actualizarFondo = () => {
  const recorrido = document.documentElement.scrollHeight - window.innerHeight;
  const progreso = recorrido > 0 ? Math.min(window.scrollY / recorrido, 1) : 0;
  document.documentElement.style.setProperty('--scroll-progress', `${progreso * 100}%`);
};

window.addEventListener('scroll', actualizarFondo, { passive: true });
window.addEventListener('resize', actualizarFondo);
actualizarFondo();