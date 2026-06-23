import { useState } from 'react'
import useInView from './useInView'
import s from './Contact.module.css'

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', company: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleWA = e => {
    e.preventDefault()
    const text = `Hello Aksara & Co! 👋\n\nName: ${form.name}\nCompany: ${form.company}\nService: ${form.service}\nMessage: ${form.message}`
    const url = `https://wa.me/6281584883722?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setSent(true)
  }

  const SERVICES = ['Corporate Communications', 'Digital Public Relations', 'Event & Brand Activation', 'Others']

  return (
    <section id="contact" className={`${s.section} ${inView ? s.in : ''}`} ref={ref}>
      <div className={s.inner}>
        <div className={s.left}>
          <p className={s.label}><span />Contact Us</p>
          <h2 className={s.title}>
            Ready to Build<br /><em>Your Reputation?</em>
          </h2>
          <p className={s.desc}>
            Consult your business communication needs with the professional team at Aksara & Co.
            We are ready to design the right strategy for your brand.
          </p>

          <div className={s.contacts}>
            <a href="https://instagram.com/aksaraandco" target="_blank" rel="noreferrer" className={s.contactRow}>
              <span className={s.contactIcon}>◈</span>
              <div>
                <p className={s.contactLabel}>Instagram</p>
                <p className={s.contactVal}>@aksaraandco</p>
              </div>
            </a>
            <a href="mailto:aksarandco@gmail.com" className={s.contactRow}>
              <span className={s.contactIcon}>◇</span>
              <div>
                <p className={s.contactLabel}>Email</p>
                <p className={s.contactVal}>aksarandco@gmail.com</p>
              </div>
            </a>
            <div className={s.contactRow}>
              <span className={s.contactIcon}>◉</span>
              <div>
                <p className={s.contactLabel}>Target Clients</p>
                <p className={s.contactVal}>Private Companies, Startups & SMEs, Consumer Brands</p>
              </div>
            </div>
          </div>
        </div>

        <div className={s.right}>
          {sent ? (
            <div className={s.thanks}>
              <span className={s.thanksIcon}>✦</span>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out to Aksara & Co. We will get back to you shortly.</p>
              <button className={s.reset} onClick={() => { setSent(false); setForm({ name: '', company: '', service: '', message: '' }) }}>
                Send Another
              </button>
            </div>
          ) : (
            <form className={s.form} onSubmit={handleWA}>
              <div className={s.row}>
                <div className={s.field}>
                  <label>Full Name *</label>
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                </div>
                <div className={s.field}>
                  <label>Company</label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Company name" />
                </div>
              </div>
              <div className={s.field}>
                <label>Service Needed</label>
                <select name="service" value={form.service} onChange={handleChange}>
                  <option value="">— Select service —</option>
                  {SERVICES.map(sv => <option key={sv}>{sv}</option>)}
                </select>
              </div>
              <div className={s.field}>
                <label>Message *</label>
                <textarea required name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your communication needs..." />
              </div>
              <button type="submit" className={s.submit}>
                <span>Send via WhatsApp</span>
                <span className={s.arrow}>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}