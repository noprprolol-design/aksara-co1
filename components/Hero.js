// Hero.tsx
'use client'

import { useEffect, useState } from 'react'
import s from './Hero.module.css'

export default function Hero() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={s.hero} id="hero">
      <div className={s.gradient} />
      <div className={s.grain} />

      <span className={s.ghost} aria-hidden>A</span>

      <div className={`${s.body} ${ready ? s.in : ''}`}>
        <h1 className={s.headline}>
          <span>Aksara</span>
          <em>&amp; Co</em>
        </h1>

        <p className={s.sub}>
          We design strategic, measurable, and impactful communication —
          helping brands build sustainable public trust.
        </p>

        <div className={s.actions}>
          <a href="#contact" className={s.btnFill}>Free Consultation</a>
          <a href="#services" className={s.btnOutline}>View Services</a>
        </div>

        <div className={s.stats}>
          <div className={s.stat}><strong>6+</strong></div>
          <div className={s.stat}><strong>3</strong></div>
          <div className={s.stat}><strong>2026</strong></div>
        </div>
      </div>
    </section>
  )
}