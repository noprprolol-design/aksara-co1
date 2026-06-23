import { useState, useEffect } from 'react'
import s from './Navbar.module.css'

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
      <a href="#" className={s.logo}>
        Aksara <em>&amp;</em> Co
      </a>

      <button 
        className={`${s.burger} ${open ? s.burgerOpen : ''}`} 
        onClick={() => setOpen(!open)} 
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>

      <div className={`${s.overlay} ${open ? s.overlayOpen : ''}`} onClick={() => setOpen(false)} />

      <nav className={`${s.nav} ${open ? s.navOpen : ''}`}>
        <div className={s.navHeader}>
          <span className={s.navLogo}>Aksara & Co</span>
          <button className={s.closeBtn} onClick={() => setOpen(false)}>✕</button>
        </div>
        <div className={s.navLinks}>
          {NAV.map(n => (
            <a key={n.label} href={n.href} className={s.link} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="#contact" className={s.ctaMobile} onClick={() => setOpen(false)}>
            Free Consultation
          </a>
        </div>
      </nav>

      <a href="#contact" className={s.cta}>Free Consultation</a>
    </header>
  )
}