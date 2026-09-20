'use client'

import { useState } from 'react'
import './podcast.css'

const guests = [
  {
    number: '01',
    name: 'Firuz Alimov',
    company: 'Aether Builders',
    episode: 'He Optimizes 60+ Businesses as a Side Hobby with AI Automation',
    image: '/images/podcast/firuz-alimov.png',
    position: 'right bottom',
    href: 'https://x.com/pukerrainbrow/status/2100948456454111738?s=20',
  },
  {
    number: '02',
    name: 'Kiko Zang',
    company: 'Chomp.fyi',
    episode: 'She Raised $3.6M to Find Out What You Really Think',
    image: '/images/podcast/kiko-zang.png',
    position: 'right bottom',
  },
  {
    number: '03',
    name: 'Christine',
    company: 'Axis Robotics',
    episode: 'This $12M Robotics Startup Pays You to Train Robots',
    image: '/images/podcast/christine.png',
    position: 'right bottom',
  },
]

export default function PodcastPage() {
  const [activeGuest, setActiveGuest] = useState(0)
  const active = guests[activeGuest]

  return (
    <main className="podcast-page">
      <div className="podcast-backdrops" aria-hidden="true">
        {guests.map((guest, index) => (
          <img
            key={guest.number}
            className={index === activeGuest ? 'podcast-backdrop is-active' : 'podcast-backdrop'}
            src={guest.image}
            alt=""
            style={{ objectPosition: guest.position }}
          />
        ))}
      </div>
      <div className="podcast-shade" aria-hidden="true" />

      <h1 className="podcast-show-title">THE AINSTEIN SHOW</h1>

      <section className="podcast-content" aria-label="Podcast guests">
        <p className="podcast-kicker">Conversations on ideas, strategy, and scale with the founders building tomorrow&apos;s biggest companies.</p>
        <div className="podcast-list">
          {guests.map((guest, index) => {
            const content = <><span className="podcast-number">{guest.number}</span><span className="podcast-name">{guest.name}</span><span className="podcast-episode">{guest.episode}</span></>
            const className = index === activeGuest ? 'podcast-guest is-active' : 'podcast-guest'

            return guest.href ? (
              <a key={guest.number} className={className} href={guest.href} target="_blank" rel="noreferrer" onMouseEnter={() => setActiveGuest(index)} onFocus={() => setActiveGuest(index)}>
                {content}
              </a>
            ) : (
              <button key={guest.number} type="button" className={className} onMouseEnter={() => setActiveGuest(index)} onFocus={() => setActiveGuest(index)} onClick={() => setActiveGuest(index)} aria-pressed={index === activeGuest}>
                {content}
              </button>
            )
          })}
        </div>
      </section>

      <span className="podcast-company-overlay">{active.company}</span>

      <footer className="podcast-footer">
        <span>NOW SHOWING / {active.name.toUpperCase()}</span>
        <span className="podcast-scroll">SCROLL ↓</span>
      </footer>
    </main>
  )
}
