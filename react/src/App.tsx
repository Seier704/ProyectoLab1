import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useAuth } from './useAuth'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import './App.css'

function SiteHeader() {
  const { user, signOut } = useAuth()

  function handleSignOut() {
    signOut()
  }

  return (
    <header className="site-header">
      <Link aria-label="Folio, inicio" className="wordmark" to="/">
        <span className="wordmark-icon" aria-hidden="true">f.</span>
        <span>folio <small>/ equipo</small></span>
      </Link>
      <nav aria-label="Navegación principal" className="site-nav">
        <Link to="/">Directorio</Link>
        {user ? (
          <>
            <Link to={`/perfil/${encodeURIComponent(user.name)}`}>Mi perfil</Link>
            <button className="nav-action" onClick={handleSignOut} type="button">Salir</button>
          </>
        ) : (
          <Link className="nav-login" to="/login">Acceso <span aria-hidden="true">↗</span></Link>
        )}
      </nav>
    </header>
  )
}

function ProtectedProfile() {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    return <Navigate replace state={{ from: location.pathname }} to="/login" />
  }

  if (location.pathname === '/perfil') {
    return <Navigate replace to={`/perfil/${encodeURIComponent(user.name)}`} />
  }

  return <ProfilePage />
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>FOLIO / EQUIPO</span>
      <span>Trayectorias en construcción · 2026</span>
    </footer>
  )
}

function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<ProtectedProfile />} path="/perfil" />
        <Route element={<ProtectedProfile />} path="/perfil/:usuario" />
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
      <SiteFooter />
    </div>
  )
}

export default App
