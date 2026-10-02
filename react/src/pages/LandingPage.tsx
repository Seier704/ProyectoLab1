import { Link } from 'react-router-dom'

const profiles = [
  {
    initials: 'FS',
    name: 'Fabián Silva',
    field: 'Experiencia en terreno',
    note: 'Prácticas en minería y soporte técnico.',
    tone: 'moss',
  },
  {
    initials: 'JC',
    name: 'Javier Carrasco',
    field: 'Ingeniería informática',
    note: 'Python, JavaScript y Java.',
    tone: 'clay',
  },
  {
    initials: 'MO',
    name: 'Matías Olivares',
    field: 'Computación e informática',
    note: 'Formación en Universidad Central de Chile.',
    tone: 'blue',
  },
]

function LandingPage() {
  return (
    <>
      <section className="landing-intro">
        <div className="intro-copy">
          <p className="eyebrow">PORTAFOLIO COLABORATIVO / 2026</p>
          <h1>
            Las personas
            <br />
            detrás del <em>trabajo.</em>
          </h1>
          <p className="intro-description">
            Un espacio para conocer al equipo, su formación y lo que está construyendo.
          </p>
          <Link className="button button-primary" to="/login">
            Entrar al equipo <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="intro-note" aria-label="Tres perfiles del equipo">
          <span className="note-rule" />
          <strong>03</strong>
          <span>perfiles<br />en este espacio</span>
        </div>
      </section>

      <section className="directory-section" aria-labelledby="directory-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EL EQUIPO</p>
            <h2 id="directory-title">Trayectorias distintas. Un mismo impulso.</h2>
          </div>
          <span className="section-count">01 — 03</span>
        </div>

        <div className="profile-grid">
          {profiles.map((profile, index) => (
            <article className={`profile-preview profile-preview--${profile.tone}`} key={profile.initials}>
              <div className="preview-topline">
                <span>PERFIL / 0{index + 1}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <div className="preview-monogram" aria-hidden="true">{profile.initials}</div>
              <div className="preview-copy">
                <p className="preview-field">{profile.field}</p>
                <h3>{profile.name}</h3>
                <p>{profile.note}</p>
              </div>
              <span className="preview-index">0{index + 1}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default LandingPage