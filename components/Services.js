import { useState } from 'react'
import useInView from './useInView'
import s from './Services.module.css'

const SERVICES = [
  {
    num: '01',
    title: 'Corporate Communications',
    desc: 'Building strong and trustworthy brand narratives in the eyes of the public and media.',
    items: ['Media relations', 'Press release & press conference', 'Company profile development', 'Corporate reputation management'],
    accent: 'var(--gold)',
  },
  {
    num: '02',
    title: 'Digital Public Relations',
    desc: 'Digital PR strategies that reach a wide audience through online channels.',
    items: ['Digital communication strategy', 'Influencer & KOL engagement', 'Online media coverage', 'Content strategy'],
    accent: '#b8956a',
  },
  {
    num: '03',
    title: 'Event & Brand Activation',
    desc: 'Professional event execution that strengthens brand presence in the public eye.',
    items: ['Product launching', 'Media gathering', 'Corporate event management', 'Brand activation campaign'],
    accent: '#d4b07a',
  },
]

// Sample project data - ganti dengan data real kamu
const PROJECTS = [
  {
    id: 1,
    title: 'Scent Your Story: Decor Your Scent Workshop',
    description: 'Increase brand awareness and engagement among Gen Z through storytelling driven fragrance experiences. Successfully conducted an interactive workshop involving participants in fragrance storytelling and creative activities while strengthening brand engagement',
    images: [
      '/images/team/work1.jpg',
      '/images/team/work2.jpg',
      '/images/team/work3.jpg',
    ],
  },
  {
    id: 2,
    title: 'Brand Launch: GreenEco',
    description: 'Digital PR strategy that generated 2M+ impressions across social media platforms',
    images: [
      '/images/projects/project2-1.jpg',
      '/images/projects/project2-2.jpg',
      '/images/projects/project2-3.jpg',
    ],
  },
  {
    id: 3,
    title: 'Luxury Fashion Week',
    description: 'Event management and brand activation for a premium fashion brand showcase',
    images: [
      '/images/projects/project3-1.jpg',
      '/images/projects/project3-2.jpg',
      '/images/projects/project3-3.jpg',
    ],
  },
]

export default function Services() {
  const [ref, inView] = useInView()
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const openProject = (project) => {
    setSelectedProject(project)
    setCurrentSlide(0)
    document.body.style.overflow = 'hidden'
  }

  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    )
  }

  return (
    <>
      <section id="services" className={`${s.section} ${inView ? s.in : ''}`} ref={ref}>
        <div className={s.top}>
          <div>
            <p className={s.label}><span />Our Services</p>
            <h2 className={s.title}>
              Services<br /><em>We Offer</em>
            </h2>
          </div>
        </div>

        <div className={s.grid}>
          {SERVICES.map((sv, i) => (
            <div key={sv.num} className={s.card} style={{ '--accent': sv.accent, '--delay': `${i * 0.15}s` }}>
              <div className={s.cardTop}>
                <span className={s.num}>{sv.num}</span>
                <div className={s.accentBar} />
              </div>
              <h3 className={s.cardTitle}>{sv.title}</h3>
              <p className={s.cardDesc}>{sv.desc}</p>
              <ul className={s.list}>
                {sv.items.map(item => (
                  <li key={item}>
                    <span className={s.bullet} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tombol See Our Project */}
        <div className={s.projectWrapper}>
          <button 
            className={s.projectTrigger}
            onClick={() => openProject(PROJECTS[0])} // default buka project pertama
          >
            See Our Project
          </button>
        </div>
      </section>

      {/* Modal Slider */}
      {selectedProject && (
        <div className={s.modal} onClick={closeProject}>
          <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={s.modalClose} onClick={closeProject}>×</button>
            
            {/* Slider Foto */}
            <div className={s.sliderContainer}>
              <button className={s.sliderBtn} onClick={prevSlide}>‹</button>
              
              <div className={s.sliderWrapper}>
                <div 
                  className={s.sliderTrack}
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {selectedProject.images.map((img, index) => (
                    <div key={index} className={s.slide}>
                      <img src={img} alt={`${selectedProject.title} - ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>

              <button className={s.sliderBtn} onClick={nextSlide}>›</button>
            </div>

            {/* Dots Indicator */}
            <div className={s.sliderDots}>
              {selectedProject.images.map((_, index) => (
                <span
                  key={index}
                  className={`${s.dot} ${index === currentSlide ? s.active : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            {/* Penjelasan */}
            <div className={s.projectInfo}>
              <h3 className={s.projectInfoTitle}>{selectedProject.title}</h3>
              <p className={s.projectInfoDesc}>{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}