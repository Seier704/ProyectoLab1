import { Link } from 'react-router-dom'

function MatiasProfilePage() {
  return (
    <main className="matias-page">
      <section aria-labelledby="matias-name" className="matias-hero">
        <p className="eyebrow">PERFIL / PORTAFOLIO COLABORATIVO</p>
        <div className="matias-hero-content">
          <div className="matias-introduction">
            <h1 id="matias-name">Matías Olivares</h1>
            <p className="matias-field">Ingeniería Informática y Computación</p>
            <p className="matias-summary">
              Formación en la Universidad Central de Chile y experiencia en práctica profesional en Minera Codelco.
            </p>
            <Link className="button button-primary" to="/">
              Volver al directorio <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div aria-hidden="true" className="matias-monogram">MO</div>
        </div>
      </section>

      <section aria-labelledby="matias-experience" className="matias-experience">
        <div>
          <p className="eyebrow">01 / TRAYECTORIA</p>
          <h2 id="matias-experience">Formación y experiencia</h2>
        </div>
        <ul className="matias-experience-list">
          <li>
            <span className="matias-experience-index">01</span>
            <span>Ingeniería Informática y Computación</span>
          </li>
          <li>
            <span className="matias-experience-index">02</span>
            <span>Universidad Central de Chile</span>
          </li>
          <li>
            <span className="matias-experience-index">03</span>
            <span>Práctica profesional en Minera Codelco</span>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default MatiasProfilePage