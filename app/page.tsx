'use client'

import { useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'

const communityUrl = 'https://www.skool.com/ainsteinskool-9587/about'
const faqs = [
  ['WHERE CAN I WATCH IT?', 'Our streaming will be live on X and YouTube.'],
  ['IS IT FREE?', 'Yes, both the community and our virtual conference are 100% free.'],
  ['MISSED IT LIVE?', 'Recordings are for community members in Skool, but only live attendees on August 21st get to ask questions—that only happens once.'],
  ['HOW DO I JOIN AINSTEIN?', 'Join our Skool community.'],
]

function CommunityButton({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <a className={`button button--primary ${className}`} href={communityUrl} target="_blank" rel="noreferrer">{children}<ArrowRight size={15} /></a>
}

const stories = [
  {
    number: '01', title: 'Too much to do. Not enough time.', intro: 'You’re constantly busy, but never seem to get ahead.',
    headline: 'It’s Friday. Your to-do list still says Monday.',
    bullets: ['You check Instagram. A friend’s on a Tuesday hike. You’re on your third tab, still finishing tomorrow’s deck.', 'A client texts “did you see my message?” You didn’t.', 'You tell yourself next week will be different. It never is.'],
    caption: 'It’s 6 pm, and you’re at dinner deciding what to eat, not what’s due tomorrow. The invoices, the scheduling, the fifteen small things eating your day: all handled without you touching them.', visual: 'visual-time', image: '/images/problem-1-workflow.webp', reverse: false,
  },
  {
    number: '02', title: 'You know you should create, but you never start.', intro: 'Ideas pile up. Bookmarks grow. Nothing gets published.',
    headline: 'Your bookmark folder keeps growing. Your post count stays at zero.',
    bullets: ['You scroll Instagram, save one more idea. Feels productive. Nothing gets made.', 'A friend asks if you ever started that YouTube channel. You change the subject.', 'A year from now: the bookmark folder is bigger. Still nothing posted.'],
    caption: 'Your workflow does the research, writes the script, drafts the caption. You just hit record. Schedule it. Post it. Then you do it again tomorrow.', visual: 'visual-create', image: '/images/problem-2-social.webp', reverse: true,
  },
  {
    number: '03', title: 'More leads. Better customers. Higher conversions.', intro: 'You know your business can grow, you just need the right system to make it happen.',
    headline: 'Bigger clients are out there. You’re too busy with your current clients to go find them.',
    bullets: ['A client message left unread. “I’ll get to it after this call.” You never do.', 'Someone asks who your biggest client is. You give them the same name as last year.', 'Another year. Same clients. Same ceiling.'],
    caption: 'The systems that used to eat your whole week run themselves. You stop chasing bigger clients. They start finding you.', visual: 'visual-growth', image: '/images/problem-3-growth.webp', reverse: false,
  },
]

export default function Home() {
  const [caseStudyLogos, setCaseStudyLogos] = useState<string[]>(['/images/case-study-001-john-ku.png', '/images/case-study-001-roy-kek.png', '/images/case-study-001-max-coretv.png', '/images/case-study-001-bunsanxbt-okx.png', '/images/case-study-001-shuenrui-qwen.png', '/images/case-study-001-samurai.png'])

  const updateCaseStudyLogo = (index: number, file?: File) => {
    if (!file) return
    setCaseStudyLogos((logos) => logos.map((logo, logoIndex) => logoIndex === index ? URL.createObjectURL(file) : logo))
  }

  return <main>
    <div className="ambient ambient--top" /><div className="ambient ambient--bottom" /><div className="page-grid" />
    <nav className="nav shell" aria-label="Main navigation"><div className="nav-left"><a href="#top" className="ainstein-logo nav-portrait" aria-label="Ainstein home"><img src="/images/why-ainstein.png" alt="Ainstein hosts" /></a></div><a href="#top" className="word-logo" aria-label="Ainstein home"><img src="/images/ainstein-word-logo-header.png" alt="Ainstein" /></a><CommunityButton>JOIN AINSTEIN</CommunityButton></nav>

    <section className="hero shell" id="top">
      <div className="hero-title-row"><h1>Tech,<br /><em>shown live.</em></h1><span className="hero-rule" aria-hidden="true" /><img className="hero-live-image" src="/images/hero-live-show.png" alt="Ainstein hosts presenting a live technology show" fetchPriority="high" /></div>
      <p className="hero-copy">See how people actually use it.<CommunityButton className="hero-cta">JOIN AINSTEIN</CommunityButton></p>
      <section className="case-study-strip" aria-label="Case studies"><a href="https://www.ainsteinskool.com/casestudy001" className="case-study-link">CASE STUDY 001<ArrowRight size={22} aria-hidden="true" /></a><div className="case-study-logo-slots" aria-label="Case study logo uploads">{caseStudyLogos.map((logo, index) => <label className="case-study-logo-slot" key={index}>{logo ? <img src={logo} alt={`Selected logo ${index + 1}`} /> : <span>UPLOAD<br />LOGO {String(index + 1).padStart(2, '0')}</span>}<input type="file" accept="image/*" onChange={(event) => updateCaseStudyLogo(index, event.target.files?.[0])} /></label>)}</div><p>CASE STUDY 002 <span>(TBA)</span></p></section>
    </section>

    <section className="programme programme--access shell" aria-labelledby="programme-title">
      <p className="programme-index">WHAT’S AINSTEIN?</p>
      <h2 id="programme-title">Get closer to how great people think and work.</h2>
      <p className="programme-intro">Ainstein brings you closer to people worth learning from.</p>
      <div className="programme-grid">
        <article className="programme-card programme-card--life"><div className="programme-image"><img src="/images/programme-life.png" alt="Founder working at a laptop" loading="lazy" decoding="async" /><span>IMAGE / 01</span></div><div className="programme-card-copy"><span>01</span><h3>Find the signal.</h3><p>Learn from people genuinely worth paying attention to.</p></div></article>
        <article className="programme-card programme-card--content"><div className="programme-image"><img src="/images/programme-content.webp" alt="Social media apps on a phone" loading="lazy" decoding="async" /><span>IMAGE / 02</span></div><div className="programme-card-copy"><span>02</span><h3>See the work.</h3><p>Watch how they think, decide and make things live.</p></div></article>
        <article className="programme-card programme-card--growth"><div className="programme-image"><img src="/images/programme-growth.png" alt="Founder working across multiple screens" loading="lazy" decoding="async" /><span>IMAGE / 03</span></div><div className="programme-card-copy"><span>03</span><h3>Keep access open.</h3><p>Useful knowledge shouldn’t automatically sit behind a paywall.</p></div></article>
      </div>
      <p className="programme-outro">Take what’s useful and try it yourself.</p>
    </section>

    <section className="why-now shell" aria-labelledby="why-now-title">
      <p className="programme-index">WHY NOW</p>
      <h2 id="why-now-title">When intelligence becomes abundant, <em>judgment becomes the advantage.</em></h2>
      <div className="why-now-grid">
        <div><p>When anyone can:</p><ul><li>access answers</li><li>generate ideas</li><li>make more</li></ul></div>
        <div><p>The advantage shifts to knowing:</p><ul><li>what matters</li><li>what to choose</li><li>what’s worth making</li></ul></div>
      </div>
      <p className="why-now-outro">That’s the human part technology doesn’t decide for you.</p>
    </section>

    <section className="founders shell"><div className="section-heading"><h2>Who’s behind <em>Ainstein</em></h2></div><div className="founder-grid"><article className="founder-card"><img src="/images/amos.webp" alt="Amos, Ainstein founder" loading="lazy" decoding="async" /><div><h3>Amos</h3><p>Built one of Southeast Asia’s fastest-growing new media companies.</p></div></article><article className="founder-card"><img src="/images/maeve-speaker.webp" alt="Maeve speaking at an Ainstein event" loading="lazy" decoding="async" /><div><h3>Maeve</h3><p>Generated 500M+ impressions across AI and emerging tech.</p></div></article></div><p className="founders-together">Together, 1,000+ podcast episodes and interviews with founders and executives across tech.</p></section>

    <section className="community shell"><div><h2>Skool is where the people, questions and ideas around Ainstein keep going.</h2></div><div className="flag-list" aria-label="Community locations"><span title="Malaysia">🇲🇾</span><span title="Singapore">🇸🇬</span><span title="Vietnam">🇻🇳</span><span title="Thailand">🇹🇭</span><span title="India">🇮🇳</span><span title="Indonesia">🇮🇩</span><span title="Korea">🇰🇷</span></div><div className="community-gallery"><img src="/images/community/community-1.png" alt="AInstein community gathering" loading="lazy" decoding="async" /><img src="/images/community/community-2.png" alt="AInstein community session" loading="lazy" decoding="async" /><img src="/images/community/community-3.png" alt="AInstein community event" loading="lazy" decoding="async" /><img src="/images/community/community-4.png" alt="AInstein community members" loading="lazy" decoding="async" /></div><div className="community-action"><CommunityButton>JOIN AINSTEIN</CommunityButton></div></section>

    <section className="faq shell"><div className="section-heading"><h2>FAQ</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

    <section className="closing shell"><div><h2>TBC // LIVE<br />ONLINE // FREE</h2></div><CommunityButton>JOIN AINSTEIN</CommunityButton></section>
    <footer className="footer shell"><div className="footer-socials" aria-label="Ainstein social links"><a className="button" href="https://www.youtube.com/@AinsteinSkools" target="_blank" rel="noreferrer">YOUTUBE<ArrowRight size={13} /></a><a className="button" href="https://www.instagram.com/ainsteinskool/" target="_blank" rel="noreferrer">INSTAGRAM<ArrowRight size={13} /></a><a className="button" href="https://luma.com/ainstein" target="_blank" rel="noreferrer">EVENT CALENDAR<ArrowRight size={13} /></a></div><span>© 2026 Ainstein Community</span><a href="#top">Back to top ↑</a></footer>
  </main>
}
