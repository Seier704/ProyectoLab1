import { useEffect, useState } from 'react'
import { useAuth } from '../useAuth'

function JavierCard() {
  const { user } = useAuth()
  const [likes, setLikes] = useState<number>(0)

  useEffect(() => {
    if (user) {
      localStorage.setItem(`perfil:${user.name}:ultimaVisita`, new Date().toISOString())
    }
  }, [user])

  return (
    <article className="profile-panel member-card" aria-labelledby="javier-card-title">
      <p className="eyebrow">03 / TARJETA PERSONAL</p>
      <h3 id="javier-card-title">Javier Carrasco</h3>
      <p>Estudiante de Ingeniería Civil en Computación e Informática.</p>
      <p>
        En el Laboratorio 1 trabajé en el portafolio de currículums del equipo,
        con perfiles, formación y experiencia en una misma página.
      </p>
      <p className="member-card-skills">Herramientas: Python, JavaScript y Java.</p>
      <p className="member-card-likes">Me gusta: {likes}</p>
      <button className="button button-quiet member-card-button" onClick={() => setLikes((current) => current + 1)} type="button">
        Dar me gusta
      </button>
    </article>
  )
}

export default JavierCard
