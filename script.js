const alternarDetalle = (boton, detalle, textoAbierto, textoCerrado) => {
  boton.addEventListener('click', () => {
    detalle.hidden = !detalle.hidden;
    boton.textContent = detalle.hidden ? textoCerrado : textoAbierto;
    boton.setAttribute('aria-expanded', String(!detalle.hidden));
  });
};

document.querySelector('#modo-oscuro').addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
});

alternarDetalle(
  document.querySelector('#javier-toggle'),
  document.querySelector('#javier-extra'),
  'Ver menos',
  'Ver más',
);

document.querySelector('#javier-destacar').addEventListener('click', () => {
  document.querySelector('#javier').classList.toggle('destacado');
});

alternarDetalle(
  document.querySelector('#btn-detalles-tuNombre'),
  document.querySelector('#info-extra-tuNombre'),
  'Ver menos detalles',
  'Ver más detalles',
);

const frasesSorpresa = [
  '¡Wena wena, watón Mysterion! 🚀',
  '¡Chípalo, Alexítico!',
  'No sé qué más poner como mensaje.',
];

document.querySelector('#boton-sorpresa').addEventListener('click', () => {
  const indice = Math.floor(Math.random() * frasesSorpresa.length);
  document.querySelector('#mensaje-sorpresa').textContent = frasesSorpresa[indice];
});
