'use client'

import { ArrowRight, Play, Sparkles } from 'lucide-react'

const communityUrl = 'https://www.skool.com/ainsteinskool-9587/about'
const faqs = [
  ['WHEN IS 001?', 'August 21st, 8pm GMT+8.'],
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
  return <main>
    <div className="ambient ambient--top" /><div className="ambient ambient--bottom" /><div className="page-grid" />
    <nav className="nav shell" aria-label="Main navigation"><a href="#top" className="ainstein-logo nav-portrait" aria-label="Ainstein home"><img src="/images/why-ainstein.png" alt="Ainstein hosts" /></a><a href="#top" className="word-logo" aria-label="Ainstein home"><img src="/images/ainstein-word-logo-header.png" alt="Ainstein" /></a><CommunityButton>JOIN AINSTEIN</CommunityButton></nav>

    <section className="hero shell" id="top">
      <div className="hero-title-row"><h1>Tech,<br /><em>shown live.</em></h1><span className="hero-rule" aria-hidden="true" /><img className="hero-live-image" src="/images/hero-live-show.png" alt="Ainstein hosts presenting a live technology show" fetchPriority="high" /></div>
      <p className="hero-copy">See how people actually use it.<br /><br /><b>001 // ONE-PERSON COMPANY<br />21 AUG // LIVE ONLINE // FREE</b><CommunityButton className="hero-cta">JOIN AINSTEIN</CommunityButton></p>
      <section className="speaker-strip" aria-label="Speakers from leading companies"><p>SPEAKERS FROM</p><div className="speaker-logos"><img src="/images/partners/animoca-brands-new.png" alt="Animoca Brands" /><img src="/images/partners/og-new.png" alt="OG" /><img src="/images/partners/qwen-new.png" alt="Qwen" /><img src="/images/partners/ai-collective-new.png" alt="The AI Collective" /></div></section>
    </section>

    <section className="programme shell" aria-labelledby="programme-title">
      <p className="programme-index">001 // ONE-PERSON COMPANY</p>
      <h2 id="programme-title">How to build a<br />one-person company with AI</h2>
      <p className="programme-intro">Real AI workflows, <em>shown live.</em></p>
      <div className="programme-grid">
        <article className="programme-card programme-card--life"><div className="programme-image"><img src="/images/programme-life.png" alt="Founder working at a laptop" loading="lazy" decoding="async" /><span>IMAGE / 01</span></div><div className="programme-card-copy"><span>01 // LIFE</span><h3>Get organised.<br />Do more.</h3></div></article>
        <article className="programme-card programme-card--content"><div className="programme-image"><img src="/images/programme-content.webp" alt="Social media apps on a phone" loading="lazy" decoding="async" /><span>IMAGE / 02</span></div><div className="programme-card-copy"><span>02 // CONTENT</span><h3>Make things<br />people notice.</h3></div></article>
        <article className="programme-card programme-card--growth"><div className="programme-image"><img src="/images/programme-growth.png" alt="Founder working across multiple screens" loading="lazy" decoding="async" /><span>IMAGE / 03</span></div><div className="programme-card-copy"><span>03 // GROWTH</span><h3>Make it<br />grow.</h3></div></article>
      </div>
    </section>

    <section className="why shell" aria-labelledby="why-ainstein-title"><div className="section-glow section-glow--why" aria-hidden="true" /><div className="why-lead"><span className="eyebrow"><Sparkles size={13} /> WHY AINSTEIN?</span><h2 id="why-ainstein-title">It started with<br /><em>three questions</em></h2></div><div className="why-questions"><article><span>01</span><h3>Why does the good stuff cost you?</h3><p>It shouldn’t.</p></article><article><span>02</span><h3>Why do you always feel stuck?</h3><p>Because no one showed you.</p></article><article><span>03</span><h3>Why does learning feel lonely?</h3><p>You haven’t found your people yet.</p></article></div><CommunityButton className="why-cta">JOIN AINSTEIN</CommunityButton></section>

    <section className="founders shell"><div className="section-heading"><h2>Who’s behind <em>Ainstein</em></h2></div><div className="founder-grid"><article className="founder-card"><img src="/images/amos.webp" alt="Amos, Ainstein founder" loading="lazy" decoding="async" /><div><h3>Amos</h3><p>Built one of Southeast Asia’s fastest-growing new media companies.</p></div></article><article className="founder-card"><img src="/images/maeve-speaker.webp" alt="Maeve speaking at an Ainstein event" loading="lazy" decoding="async" /><div><h3>Maeve</h3><p>Generated 500M+ impressions across AI and emerging tech.</p></div></article></div><p className="founders-together">Together, 1,000+ podcast episodes and interviews with founders and executives across tech.</p></section>

    <section className="community shell"><div><h2>001 ends.<span className="community-heading-line">The conversation doesn’t.</span></h2><p>Skool is where the people, questions and ideas around Ainstein keep going — before, during and after 001.</p></div><div className="flag-list" aria-label="Community locations"><span title="Malaysia">🇲🇾</span><span title="Singapore">🇸🇬</span><span title="Vietnam">🇻🇳</span><span title="Thailand">🇹🇭</span><span title="India">🇮🇳</span><span title="Indonesia">🇮🇩</span><span title="Korea">🇰🇷</span></div><div className="community-gallery"><img src="/images/community/community-1.png" alt="AInstein community gathering" loading="lazy" decoding="async" /><img src="/images/community/community-2.png" alt="AInstein community session" loading="lazy" decoding="async" /><img src="/images/community/community-3.png" alt="AInstein community event" loading="lazy" decoding="async" /><img src="/images/community/community-4.png" alt="AInstein community members" loading="lazy" decoding="async" /></div><div className="community-action"><CommunityButton>JOIN AINSTEIN</CommunityButton></div></section>

    <section className="faq shell"><div className="section-heading"><h2>FAQ</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

    <section className="closing shell"><div><h2>21 AUG // LIVE<br />ONLINE // FREE</h2></div><CommunityButton>JOIN AINSTEIN</CommunityButton></section>
    <footer className="footer shell"><span aria-hidden="true" /><span>© 2026 Ainstein Community</span><a href="#top">Back to top ↑</a></footer>
  </main>
}
