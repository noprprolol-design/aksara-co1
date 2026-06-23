import useInView from './useInView'
import s from './About.module.css'

const VALUES = [
  { key: 'Integrity', desc: 'Honesty, transparency, and ethics in every communication.' },
  { key: 'Creativity', desc: 'Innovative communication ideas to make your brand more compelling.' },
  { key: 'Collaboration', desc: 'Strong partnerships with clients, media, and stakeholders.' },
  { key: 'Impact', desc: 'Communication programs that deliver real results for your reputation.' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className={`${s.section} ${inView ? s.in : ''}`} ref={ref}>
      <div className={s.inner}>
        <div className={s.left}>
          <p className={s.label}><span />About Us</p>
          <h2 className={s.title}>
            The Right Words,<br /><em>Real Impact</em>
          </h2>
          <p className={s.body}>
            Aksara & Co is an independent PR agency specializing in communication strategy,
            reputation management, and corporate image building.
          </p>
          <p className={s.body}>
            The name <strong>"Aksara"</strong> represents the power of words, meaning, and message.
            We believe every message delivered to the public must be strategically designed,
            measurable, and impactful.
          </p>
          <p className={s.body}>
            Aksara exists as a communication partner for companies and brands in building
            public trust and maintaining reputation sustainably.
          </p>
        </div>

        <div className={s.right}>
          <div className={s.card}>
            <div className={s.cardLogo}>
              A<em>&amp;</em>Co
            </div>
            <div className={s.divider} />
            <p className={s.cardQuote}>
              "We craft messages that<br />leave a lasting impression."
            </p>
          </div>

          <div className={s.values}>
            {VALUES.map(v => (
              <div key={v.key} className={s.valueRow}>
                <span className={s.valueKey}>{v.key}</span>
                <span className={s.valueDash}>—</span>
                <span className={s.valueDesc}>{v.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}