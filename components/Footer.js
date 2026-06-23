import s from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.top}>
          <div className={s.brand}>
            <p className={s.logo}>Aksara <em>&amp;</em> Co</p>
            <p className={s.tagline}>Strategic communication that makes an impact.</p>
          </div>
          <div className={s.linksGroup}>
            <div className={s.links}>
              <p className={s.linksTitle}>Navigation</p>
              {[['About','#about'],['Services','#services'],['Team','#team'],['Contact','#contact']].map(([l,h]) => (
                <a key={l} href={h} className={s.link}>{l}</a>
              ))}
            </div>
            <div className={s.links}>
              <p className={s.linksTitle}>Services</p>
              {['Corporate Communications','Digital PR','Event & Brand Activation'].map(l => (
                <a key={l} href="#services" className={s.link}>{l}</a>
              ))}
            </div>
            <div className={s.links}>
              <p className={s.linksTitle}>Social Media</p>
              <a href="https://instagram.com/aksaraandco" target="_blank" rel="noreferrer" className={s.link}>Instagram</a>
              <a href="mailto:aksarandco@gmail.com" className={s.link}>Email</a>
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <p>@aksaraandco</p>
        </div>
      </div>
    </footer>
  )
}