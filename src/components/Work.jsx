import React, { useState, useEffect, useRef } from 'react';
import { games } from '../data';
import GameCard from './GameCard';

const filters = ['All', 'Shipped', 'In Development'];

export default function Work({ onVideoClick }) {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filterKey, setFilterKey] = useState(0);

  // Re-observe all .reveal elements whenever filterKey changes
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Small delay so the new DOM nodes from remount are painted
    const timer = setTimeout(() => {
      const elements = section.querySelectorAll('.reveal:not(.visible)');
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [filterKey]);

  const handleFilter = (f) => {
    // Strip 'visible' from all cards so they can re-animate
    const section = sectionRef.current;
    if (section) {
      section.querySelectorAll('.reveal.visible').forEach(el => el.classList.remove('visible'));
    }
    setActiveFilter(f);
    setFilterKey(k => k + 1);
  };

  const filtered = games.filter(g => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Shipped') return !g.wip;
    if (activeFilter === 'In Development') return g.wip;
    return true;
  });

  const gamesWithCallback = filtered.map(g => ({
    ...g,
    onVideoClick: g.hasVideo ? onVideoClick : undefined,
  }));

  return (
    <section id="work" ref={sectionRef} style={{
      width: '100%',
      padding: `var(--section-gap) clamp(1.5rem, 5vw, 4rem)`,
      background: 'var(--paper-warm)',
      borderTop: '1px solid var(--rule)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient */}
      <div style={{
        position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(240,176,60,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', width: '100%', position: 'relative' }}>

        {/* Section label */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
            02 / Work
          </span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(240,176,60,0.4), var(--rule))' }} />
        </div>

        {/* Heading + filters */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--ink)',
          }}>
            Games I've<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic', textShadow: '0 0 40px rgba(240,176,60,0.3)' }}>
              designed & shipped.
            </em>
          </h2>

          <div className="reveal" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button key={f} onClick={() => handleFilter(f)} style={{
                background: activeFilter === f ? 'var(--accent)' : 'transparent',
                color: activeFilter === f ? '#08080e' : 'var(--ink-muted)',
                border: `1px solid ${activeFilter === f ? 'var(--accent)' : 'var(--rule-hi)'}`,
                padding: '0.42rem 1.1rem', borderRadius: '3px',
                fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 600,
                transition: 'all 0.2s',
                boxShadow: activeFilter === f ? '0 0 16px rgba(240,176,60,0.25)' : 'none',
              }}
                onMouseEnter={e => { if (activeFilter !== f) { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; } }}
                onMouseLeave={e => { if (activeFilter !== f) { e.currentTarget.style.borderColor = 'var(--rule-hi)'; e.currentTarget.style.color = 'var(--ink-muted)'; } }}
              >{f}</button>
            ))}
          </div>
        </div>

        {/* Designer credit */}
        <div className="reveal" style={{
          marginBottom: '2rem', padding: '0.85rem 1.4rem',
          background: 'rgba(240,176,60,0.05)', border: '1px solid rgba(240,176,60,0.15)',
          borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '1rem',
          fontSize: '0.82rem', color: 'var(--ink-muted)',
        }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '50%',
            background: 'rgba(240,176,60,0.12)', border: '1px solid rgba(240,176,60,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <span style={{ lineHeight: 1.6 }}>
            I was the <strong style={{ color: 'var(--accent)', fontWeight: 700 }}>solo Game Designer</strong> on all of these projects — handling everything end to end while leading and collaborating with <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>12+ member teams</strong> across art, engineering, and production and also explore my recent personal projects.
          </span>
        </div>

        {/* Grid */}
        <div key={filterKey} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px,1fr))', gap: '1.5rem' }}>
          {gamesWithCallback.map((game) => (
            <GameCard key={game.id} game={game} index={games.findIndex(g => g.id === game.id)} />
          ))}
        </div>

        {/* Video teaser */}
        <div className="reveal" style={{
          marginTop: '3rem', padding: '1.5rem 2rem',
          border: '1px solid var(--rule-hi)', borderRadius: '6px',
          background: 'rgba(255,255,255,0.02)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '1rem', flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'var(--accent)', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 20px rgba(240,176,60,0.35)',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#08080e"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '2px' }}>Video Showcase</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', fontWeight: 300 }}>Watch gameplay demos — Unity & Godot builds</div>
            </div>
          </div>
          <button onClick={() => onVideoClick(null)} style={{
            background: 'var(--accent)', color: '#08080e',
            border: 'none', borderRadius: '4px', padding: '0.65rem 1.5rem',
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'all 0.2s', flexShrink: 0,
            boxShadow: '0 0 20px rgba(240,176,60,0.2)',
          }}
            onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.filter = ''; e.currentTarget.style.transform = ''; }}
          >
            View All Videos
          </button>
        </div>
      </div>
    </section>
  );
}