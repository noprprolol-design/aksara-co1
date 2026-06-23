import s from './Ticker.module.css'

const ITEMS = [
  'Corporate Communications','Digital Public Relations','Event & Brand Activation',
  'Media Relations','Reputation Management','Influencer & KOL Engagement',
  'Press Release','Crisis Management','Company Profile Development',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className={s.wrap}>
      <div className={s.track}>
        {doubled.map((item, i) => (
          <span key={i} className={s.item}>
            {item} <span className={s.dot}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
