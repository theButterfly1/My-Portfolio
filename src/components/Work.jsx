import React, { useState } from 'react';
import { games } from '../data';
import GameCard from './GameCard';
import { useReveal } from '../useReveal';

const filters = ['All', 'Shipped', 'In Development'];

export default function Work() {
  const ref = useReveal();
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = games.filter(g => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Shipped') return !g.wip;
    if (activeFilter === 'In Development') return g.wip;
    return true;
  });

  return (
    <section id="work" ref={ref} style={{
      padding: `var(--section-gap) 2rem`,
      background: 'var(--paper-warm)',
      borderTop: '1px solid var(--rule)',
      borderBottom: '1px solid var(--rule)',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        {/* Section label */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 500 }}>02 / Work</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--rule)' }} />
        </div>

        {/* Heading + filters */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: 'var(--ink)',
          }}>
            Games I've<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>designed & shipped.</em>
          </h2>

          {/* Filter pills */}
          <div className="reveal" style={{ display: 'flex', gap: '0.5rem' }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                background: activeFilter === f ? 'var(--ink)' : 'transparent',
                color: activeFilter === f ? 'var(--paper)' : 'var(--ink-light)',
                border: `1px solid ${activeFilter === f ? 'var(--ink)' : 'var(--rule)'}`,
                padding: '0.4rem 1rem', borderRadius: '2px',
                fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase',
                cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 500,
                transition: 'all 0.2s',
              }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {filtered.map((game, i) => (
            <GameCard key={game.id} game={game} index={games.indexOf(game)} />
          ))}
        </div>
      </div>
    </section>
  );
}
