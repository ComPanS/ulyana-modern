import { NavLink, Outlet } from 'react-router-dom'
import { site } from '../content/site'

const navigation = [
  { to: '#about', label: 'О нас', end: false },
  { to: '#services', label: 'Услуги', end: false },
  { to: '#reviews', label: 'Отзывы', end: false },
  { to: '#contacts', label: 'Контакты', end: false },
]

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="На главную страницу"><img src={`${import.meta.env.BASE_URL}media/logo.png`} alt="Ульяна" /></NavLink>
        <nav aria-label="Main navigation">
          {navigation.map(({ to, label, end = false }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => isActive ? 'active' : undefined}>
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <p>{site.name} · Тула, улица Сойфера, 39</p>
        <a href={`tel:${site.contact.phone.replace(/[^+\d]/g, '')}`}>{site.contact.phone}</a>
      </footer>
    </div>
  )
}
