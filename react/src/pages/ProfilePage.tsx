import type { AuthUser } from '../AuthContext'

interface ProfilePageProps {
  user: AuthUser
}

function ProfilePage({ user }: ProfilePageProps) {
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
    </main>
  )
}

export default ProfilePage