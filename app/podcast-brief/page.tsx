import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Podcast Guest Guide | Ainstein',
  description: 'Your guide to a casual, honest, opinionated conversation about tech, startups, and what you’re building next.',
  alternates: { canonical: 'https://www.ainsteinskool.com/podcast-brief' },
}

const sections = [
  { title: 'Tech Hot Takes', content: <><p>Come with <strong>2–3 hot takes</strong> about tech, startups, AI, or your industry.</p><p>You give the take → the host picks <strong>AGREE / DISAGREE</strong> → we debate it.</p><p><em>Strong opinions are encouraged.</em></p></> },
  { title: 'The Scoreboard', content: <><p>Every guest goes on the <strong>Tech Scoreboard</strong>. No skipping.</p><ul><li><strong>ARR</strong> — SaaS / recurring revenue</li><li><strong>Revenue</strong> — annual revenue</li><li><strong>Funding</strong> — total raised</li></ul><p>We’ll use a number that is <strong>already publicly known</strong> and see where you rank.</p><p>Examples: <strong>$5M ARR · $12M Revenue · $8M Raised</strong></p><p><strong>Note:</strong> Numbers like 20,000 downloads in 1 day is also applicable.</p></> },
  { title: 'The Idea', content: <><p>How did this start?</p><p><strong>Idea → first version → first users/customers → when you knew it was working</strong></p></> },
  { title: 'The Strategy', content: <><p>How did you actually grow it?</p><p>We may get into growth, distribution, product, marketing, sales, hiring, fundraising, and the biggest mistakes along the way.</p><p><strong>Key question:</strong> What was the one decision that changed everything?</p></> },
  { title: 'What Almost Killed It?', content: <p>One moment where things went badly — failed strategy, bad hire, wasted money, product mistake, or a time you thought the company might not make it.</p> },
  { title: 'The Future', content: <><p><strong>How do you 2X the company from here?</strong></p><p>What’s the next big growth move, market, product, or bet?</p></> },
  { title: 'Dream Collab', content: <><p>If you could work with any founder, company, creator, celebrity, or brand:</p><p><strong>Who would it be — and what would you build together?</strong></p></> },
  { title: 'The Crazy Idea', content: <><p>Give us <strong>one crazy idea you’d genuinely love to build</strong> — something you think could actually work.</p><p><strong>What is it, and why would it work?</strong></p></> },
  { title: 'Rapid Fire', content: <><p>Quick answers. Don’t overthink it.</p><p><strong>OpenAI or Anthropic? · Bootstrapped or VC? · Product or distribution? · Remote or office? · Most overrated tech? · Company you wish you built? · Founder you’d invest in? · What are you obsessed with right now?</strong></p></> },
]

export default function PodcastBrief() {
  return <main className={styles.page} id="top">
    <nav className={styles.nav} aria-label="Main navigation"><a href="/" aria-label="Ainstein home"><img src="/images/ainstein-word-logo-header.png" alt="Ainstein" /></a><span>PODCAST / GUEST GUIDE</span></nav>
    <header className={styles.header}><p className={styles.eyebrow}>BEFORE WE HIT RECORD</p><h1>Guest Guide<span>.</span></h1><p className={styles.intro}>A casual tech founder conversation about what you built, how you grew it, what went wrong, and what you want to build next. <strong>No corporate answers needed.</strong></p></header>
    <div className={styles.sections}>{sections.map((section, index) => <section className={styles.section} key={section.title}><span className={styles.number}>{String(index + 1).padStart(2, '0')}</span><div><h2>{section.title}</h2>{section.content}</div></section>)}</div>
    <section className={styles.vibe}><p className={styles.eyebrow}>THE VIBE</p><h2>Casual. Honest.<br /><span>Opinionated.</span></h2><p>We want the real story: what worked, what didn’t, what you believe, and what you’re building next.</p><p>Come ready to have fun, disagree with things, tell stories, and talk some shit about tech.</p></section>
    <footer className={styles.footer}><a href="/">← Ainstein</a><a href="#top">Back to top ↑</a></footer>
  </main>
}
