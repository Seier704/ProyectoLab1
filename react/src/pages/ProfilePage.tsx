import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import JavierCard from './JavierCard'

function ProfilePage() {
  const auth = useContext(AuthContext)
  const user = auth?.user
  const { username } = useParams<{ username: string }>()
  const [likes, setLikes] = useState<number>(0)

  if (!user) return null

  const matchesUrl = username?.trim().toLowerCase() === user.username
  const initials = user.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')

  return (
    <main className="profile-page">
      <div className="profile-heading">
        <div>
          <p className="eyebrow">ESPACIO PERSONAL / PERFIL</p>
          <h1>Tu recorrido, en contexto.</h1>
        </div>
      </div>

      <section className="profile-overview" aria-labelledby="profile-name">
        <div className="profile-avatar" aria-hidden="true">{initials || 'U'}</div>
        <div className="profile-identity">
          <p className="eyebrow">PERFIL ACTIVO</p>
          <h2 id="profile-name">{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <span className="profile-status"><span /> Sesión iniciada</span>
      </section>

      {!matchesUrl && (
        <p className="profile-url-warning" role="alert">
          El usuario de la URL no coincide con la sesión de {user.name}.
        </p>
      )}

      <div className="profile-columns">
        <section className="profile-panel" aria-labelledby="summary-title">
          <p className="eyebrow">01 / PRESENTACIÓN</p>
          <h3 id="summary-title">Resumen profesional</h3>
          <p className="placeholder-copy">Agrega aquí una presentación breve sobre tu experiencia, intereses y próximos objetivos.</p>
        </section>

        <section className="profile-panel" aria-labelledby="experience-title">
          <p className="eyebrow">02 / TRAYECTORIA</p>
          <h3 id="experience-title">Experiencia y formación</h3>
          <div className="empty-entry">
            <span className="entry-mark" aria-hidden="true">+</span>
            <p>Las experiencias de {user.name.split(' ')[0]} aparecerán aquí.</p>
          </div>
        </section>
      </div>
      {matchesUrl && (
        <article className="profile-panel member-card" aria-labelledby="fabian-card-title">
          <p className="eyebrow">03 / TARJETA PERSONAL</p>
          <h3 id="fabian-card-title">Fabián Silva</h3>
          <p>En el Laboratorio 1 trabajé en el portafolio colaborativo de currículums del equipo.</p>
          <p className="member-card-skills">Aporte: estructura del perfil, presentación de experiencia y datos personales.</p>
          <p className="member-card-skills">Tecnologías: React, TypeScript y CSS.</p>
          <p className="member-card-likes">Me gusta: {likes}</p>
          <button
            aria-label={`Me gusta: ${likes}`}
            aria-pressed={likes > 0}
            className="button button-quiet member-card-button"
            onClick={() => setLikes((currentLikes) => currentLikes + 1)}
            type="button"
          >
            Dar me gusta
          </button>
        </article>
      )}
      <JavierCard />
    </main>
  )
}

export default ProfilePage
