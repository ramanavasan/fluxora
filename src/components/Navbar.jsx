import { useEffect, useState } from 'react'
import { Chevron, Close, Logo, Menu } from './icons.jsx'
import './Navbar.css'

const links = [
  { label: 'Features',     href: '#features',  hasMenu: true },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About',        href: '#about' },
  { label: 'Product',      href: '#product' },
  { label: 'Blogs',        href: '#blogs' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="nav">
      <a className="nav__brand" href="/" aria-label="Fluxora — home">
        <Logo className="nav__logo" />
        <span>Fluxora</span>
      </a>

      <nav className="nav__pill" aria-label="Primary navigation">
        <ul role="list">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href}>
                {link.label}
                {link.hasMenu && <Chevron className="nav__chev" />}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav__actions">
        <a className="btn btn--light nav__cta" href="#features">Get Started</a>
        <button
          className="nav__burger"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-sheet"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="nav__sheet" id="nav-sheet" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <ul role="list">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn--flame nav__sheet-cta" href="#features" onClick={() => setOpen(false)}>
            Get Started
          </a>
        </div>
      )}
    </header>
  )
}
