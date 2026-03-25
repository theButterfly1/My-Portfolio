import React from 'react';
import { about, personal } from '../data';
import { useReveal } from '../useReveal';

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} style={{
      padding: `var(--section-gap) 2rem`,
      maxWidth: 'var(--max-w)',
      margin: '0 auto',
    }}>
      {/* Section label */}
      <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
        <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 500 }}>01 / About</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--rule)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }} className="about-grid">

        {/* Left: heading */}
        <div>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--ink)',
            marginBottom: '1rem',
          }}>
            Designing play,<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>one mechanic</em><br />
            at a time.
          </h2>

          {/* Highlights */}
          <div className="reveal" style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--rule)' }}>
            {about.highlights.map(h => (
              <div key={h.label}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', lineHeight: 1, color: 'var(--ink)' }}>{h.value}</div>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginTop: '6px' }}>{h.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: bio */}
        <div>
          {about.bio.map((p, i) => (
            <p key={i} className="reveal" style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'var(--ink-light)',
              fontWeight: 300,
              marginBottom: '1.5rem',
              transitionDelay: `${i * 0.12}s`,
            }}>
              {p}
            </p>
          ))}

          <div className="reveal" style={{ marginTop: '2.5rem', transitionDelay: '0.25s' }}>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.04em',
              color: 'var(--ink)', textTransform: 'uppercase',
              borderBottom: '1px solid var(--ink)', paddingBottom: '2px',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
            >
              View LinkedIn
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 11L11 1M11 1H4M11 1v7"/></svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
