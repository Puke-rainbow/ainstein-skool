'use client'

import { ArrowRight, Play, Sparkles } from 'lucide-react'

const communityUrl = 'https://www.skool.com/ainsteinskool-9587/about'
const faqs = [
  ['Is this actually free?', 'Yes, both the community and our virtual conference are 100% free.'],
  ['Will I get pitched something afterward?', 'No. No upsells, no pitching during or after. Nothing to buy.'],
  ['Do I need an audience or an existing business to join?', 'No. This is built for beginners just as much as for founders and managers already running teams, big or small.'],
  ["What if I can't make it live?", 'Recordings are for community members, but only live attendees on August 21st get to ask questions—that only happens once.'],
  ['What time is this, and in what timezone?', 'August 21st, 8pm GMT+8.'],
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
    <nav className="nav shell" aria-label="Main navigation"><a href="#top" className="ainstein-logo" aria-label="Ainstein home"><img src="/images/ainstein-logo.png" alt="Ainstein" /></a><a href="#top" className="word-logo" aria-label="Ainstein home"><img src="/images/ainstein-word-logo-header.png" alt="Ainstein" /></a><CommunityButton>Join The Community</CommunityButton></nav>

    <section className="hero shell" id="top">
      <div className="eyebrow"><Sparkles size={13} /> Build a one-person company with AI</div>
      <h1>Master How to Build a <em>One-Person Company</em> with AI</h1>
      <p className="hero-copy">Watch 7, 8 &amp; 9-figure founders and execs reveal the exact AI workflows they use to build, automate, and scale.<br /><br /><b>Join the world’s largest free OPC community.</b></p>
      <CommunityButton className="hero-cta">Join free — limited to 1 day</CommunityButton>
      <a className="video-card" href="#top" aria-label="Ainstein introduction video placeholder"><img src="/images/video-segment.webp" alt="Ainstein community video call" fetchPriority="high" /><div className="video-noise" /><span className="play-button"><Play size={20} fill="currentColor" /></span><span>Watch the Ainstein story</span><small>Video coming soon</small></a>
    </section>

    <section className="proof shell"><p>Trusted by the companies building the future</p><div className="partner-logos"><img src="/images/partners/animoca-brands.svg" alt="Animoca Brands" loading="lazy" decoding="async" /><img src="/images/partners/uniswap.webp" alt="Uniswap" loading="lazy" decoding="async" /><img src="/images/partners/og.png" alt="OG" loading="lazy" decoding="async" /><img className="partner-logo--one" src="/images/partners/partner-logo-1.png" alt="OKX" loading="lazy" decoding="async" /><img className="partner-logo--two" src="/images/partners/partner-logo-2.png" alt="Partner logo" loading="lazy" decoding="async" /><img src="/images/partners/qwen-logo-cropped.png" alt="Qwen" loading="lazy" decoding="async" /></div></section>

    <section className="why shell"><div className="section-glow section-glow--why" aria-hidden="true" /><img className="why-image" src="/images/why-ainstein.png" alt="Ainstein chalkboard artwork" loading="lazy" decoding="async" /><div className="why-lead"><span className="eyebrow"><Sparkles size={13} /> Built from the field</span><h2>Why Learn With <em>Ainstein?</em></h2></div><div className="why-copy"><p>We have interviewed 1,000+ founders, operators, and industry leaders; partnered with some of the world’s leading technology companies; and built Asia’s largest innovation communities.</p><p>Now we’re bringing that experience together to help anyone build a One-Person Company with AI.</p></div></section>

    <section className="founders shell"><div className="section-heading"><span className="eyebrow"><Sparkles size={13} /> The team</span><h2><em>Who’s</em> behind this</h2></div><div className="founder-grid"><article className="founder-card"><img src="/images/amos.webp" alt="Amos, Ainstein founder" loading="lazy" decoding="async" /><div><span>Founder</span><h3>Amos</h3><p>Built one of Southeast Asia’s fastest-growing new media companies.</p></div></article><article className="founder-card"><img src="/images/maeve-speaker.webp" alt="Maeve speaking at an Ainstein event" loading="lazy" decoding="async" /><div><span>Co-founder</span><h3>Maeve</h3><p>Generated over half a billion impressions across AI, web3 &amp; emerging technology.</p></div></article></div></section>

    <section className="struggles shell"><div className="section-glow section-glow--struggles" aria-hidden="true" /><div className="section-heading"><span className="eyebrow"><Sparkles size={13} /> The founder bottleneck</span><h2>3 struggles <em>holding back</em> every founder.</h2></div><div className="story-list">{stories.map(story => <article className={`story ${story.reverse ? 'story--reverse' : ''}`} key={story.number}><div className={`story-visual ${story.visual} ${story.image ? 'story-visual--photo' : ''}`}>{story.image && <img src={story.image} alt="Founder working late at a laptop" loading="lazy" decoding="async" />}<span>{story.number}</span><div className="visual-orb" /><p>{story.title}</p></div><div className="story-copy"><span className="story-kicker">THE PROBLEM / {story.number}</span><h3>{story.headline}</h3><ul>{story.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul><div className="story-caption"><span>THE SHIFT</span>{story.caption}</div>{story.number === '03' && <CommunityButton className="event-cta story-cta">Reserve your seat — free, limited to live attendees</CommunityButton>}</div></article>)}</div></section>

    <section className="event shell"><div className="event-lead"><span className="eyebrow"><Sparkles size={13} /> Live, one time only</span><h2>You don’t need another AI tutorial. You need <em>proven systems.</em></h2><p>That’s why we built Ainstein to give you front-row access to the workflows successful founders already use every day.</p><img className="event-workflow" src="/images/ai-content-workflow-white.webp" alt="AI content-creation workflow connecting creation tasks to business outcomes" loading="lazy" decoding="async" /></div><div className="event-detail"><p className="event-date">August 21st, 8pm GMT+8, 4 hours. Live. Free.</p><p>We’re bringing 6 masters running real, high-pressure, high-value companies to show you exactly how they use AI to build a One-Person Company.</p><p>Laptops open. Real workflows. Real questions answered — live.</p><p>This isn’t a course, a podcast, or a replay. It’s one live session, one time only.</p><div className="scarcity"><span>LIVE ATTENDEES ONLY</span><p>Recordings are for watching only. Live attendees are the only ones who get to ask questions—and that only happens once, on August 21st.</p></div><p>What happens after August 21st? You’ll find out live, with everyone else.</p></div></section>

    <section className="community shell"><div><span className="eyebrow"><Sparkles size={13} /> One room, many perspectives</span><h2>Community around the <em>world.</em></h2><p>Founders, operators and builders learning together across Asia and beyond.</p></div><div className="flag-list" aria-label="Community locations"><span title="Malaysia">🇲🇾</span><span title="Singapore">🇸🇬</span><span title="Vietnam">🇻🇳</span><span title="Thailand">🇹🇭</span><span title="India">🇮🇳</span><span title="Indonesia">🇮🇩</span><span title="Korea">🇰🇷</span></div><div className="community-gallery"><img src="/images/community/community-1.png" alt="AInstein community gathering" loading="lazy" decoding="async" /><img src="/images/community/community-2.png" alt="AInstein community session" loading="lazy" decoding="async" /><img src="/images/community/community-3.png" alt="AInstein community event" loading="lazy" decoding="async" /><img src="/images/community/community-4.png" alt="AInstein community members" loading="lazy" decoding="async" /></div><div className="community-action"><CommunityButton>Reserve your seat — free, limited to live attendees</CommunityButton></div></section>

    <section className="faq shell"><div className="section-heading"><span className="eyebrow"><Sparkles size={13} /> Answers, up front</span><h2>FAQ</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

    <section className="closing shell"><div><span className="eyebrow"><Sparkles size={13} /> One day left to join free</span><h2>See how it works.</h2><p>Build your One-Person Company with systems that give you your time back.</p></div><CommunityButton>See how it works — Join free</CommunityButton></section>
    <footer className="footer shell"><a href="#top" className="ainstein-logo"><img src="/images/ainstein-logo.png" alt="Ainstein" /></a><span>© 2026 Ainstein Community</span><a href="#top">Back to top ↑</a></footer>
  </main>
}
