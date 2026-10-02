import { Link } from 'react-router-dom'

function FabianProfilePage() {
  return (
    <main className="fabian-page">
      <section aria-labelledby="fabian-name" className="fabian-hero">
        <p className="eyebrow">PERFIL / PORTAFOLIO COLABORATIVO</p>
        <div className="fabian-hero-content">
          <div className="fabian-introduction">
            <h1 id="fabian-name">Fabián Silva</h1>
            <p className="fabian-field">Experiencia en terreno</p>
            <p className="fabian-summary">
              Prácticas en minería y soporte técnico.
            </p>
            <Link className="button button-primary" to="/">
              Volver al directorio <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div aria-hidden="true" className="fabian-monogram">FS</div>
        </div>
      </section>

      <section aria-labelledby="fabian-experience" className="fabian-experience">
        <div>
          <p className="eyebrow">01 / TRAYECTORIA</p>
          <h2 id="fabian-experience">Experiencia y áreas de trabajo</h2>
        </div>
        <ul className="fabian-experience-list">
          <li>
            <span className="fabian-experience-index">01</span>
            <span>Prácticas en minería</span>
          </li>
          <li>
            <span className="fabian-experience-index">02</span>
            <span>Soporte técnico</span>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default FabianProfilePage
