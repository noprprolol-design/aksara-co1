import useInView from './useInView'
import s from './Team.module.css'

const TEAM = [
  { 
    name: "Aulia Ni'matussadiyah", 
    role: 'Founder', 
    init: 'AN', 
    color: ['#4a2810','#8a5c3a'],
    photo: '/images/team/aulia.jpg'
  },
  { 
    name: 'Hary Darmawan',         
    role: 'Co-Founder', 
    init: 'HD', 
    color: ['#3a2010','#7a5230'],
    photo: '/images/team/hary.jpg'
  },
  { 
    name: 'Princessa Danish M.S',  
    role: 'Brand Activation Executive', 
    init: 'PD', 
    color: ['#2c1a0e','#6a3e1e'],
    photo: '/images/team/princessa.jpg'
  },
  { 
    name: 'Yasfin Herlambang',     
    role: 'Graphic Designer', 
    init: 'YH', 
    color: ['#3d2208','#8a6540'],
    photo: '/images/team/yasfin.jpg'
  },
  { 
    name: 'Muhammad Zulfadhli',    
    role: 'Event Executive', 
    init: 'MZ', 
    color: ['#1a3520','#3a6a48'],
    photo: '/images/team/zulfadhli.jpg'
  },
  { 
    name: 'Muhammad Dhavy F.',     
    role: 'Social Media Specialist & Copywriter', 
    init: 'MD', 
    color: ['#1a1a38','#3a3a72'],
    photo: '/images/team/dhavy.jpg'
  },
]

export default function Team() {
  const [ref, inView] = useInView()

  return (
    <section id="team" className={`${s.section} ${inView ? s.in : ''}`} ref={ref}>
      <div className={s.header}>
        <div>
          <p className={s.label}><span />Our Team</p>
          <h2 className={s.title}>The <em>Team</em></h2>
        </div>
      </div>

      <div className={s.grid}>
        {TEAM.map((m, i) => (
          <div
            key={m.name}
            className={s.card}
            style={{ '--delay': `${i * 0.1}s` }}
          >
            <div className={s.avatar}>
              <img src={m.photo} alt={m.name} className={s.photo} />
              <div 
                className={s.initials}
                style={{ background: `linear-gradient(135deg, ${m.color[0]}, ${m.color[1]})` }}
              >
                {m.init}
              </div>
            </div>
            <div className={s.info}>
              <p className={s.name}>{m.name}</p>
              <p className={s.role}>{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}