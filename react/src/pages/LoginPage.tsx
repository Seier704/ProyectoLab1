import { useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../useAuth'

function LoginPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const { signIn } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const returnTo = (location.state as { from?: string } | null)?.from

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const cleanName = name.trim()
    signIn(cleanName, email.trim())
    navigate(returnTo ?? `/perfil/${encodeURIComponent(cleanName)}`, { replace: true })
  }

  return (
    <main className="login-layout">
      <section className="login-aside">
        <p className="eyebrow">ACCESO / EQUIPO</p>
        <h1>Tu próximo paso empieza aquí.</h1>
        <p>Entra a tu espacio personal y mantén tu perfil al día.</p>
        <span className="aside-index">FOLIO <span>—</span> 01</span>
      </section>

      <section className="login-content" aria-labelledby="login-title">
        <p className="eyebrow">MODO PLANTILLA</p>
        <h2 id="login-title">Iniciar sesión</h2>
        <p className="form-intro">La sesión es local por ahora; conecta este formulario a tu servicio de autenticación.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="login-name">Nombre</label>
          <input
            autoComplete="name"
            id="login-name"
            name="name"
            onChange={(event) => setName(event.target.value)}
            placeholder="Tu nombre"
            required
            value={name}
          />

          <label htmlFor="login-email">Correo electrónico</label>
          <input
            autoComplete="email"
            id="login-email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="nombre@correo.com"
            required
            type="email"
            value={email}
          />

          <button className="button button-primary" type="submit">
            Continuar <span aria-hidden="true">↗</span>
          </button>
        </form>

        <Link className="back-link" to="/">← Volver al inicio</Link>
      </section>
    </main>
  )
}

export default LoginPage
