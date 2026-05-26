import React from 'react';
import { about, personal } from '../data';
import { useReveal } from '../useReveal';

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} style={{
      width: '100%', padding: `var(--section-gap) clamp(1.5rem, 5vw, 4rem)`,
      background: 'var(--paper)', borderTop: '1px solid var(--rule)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient */}
      <div style={{
        position: 'absolute', top: '-100px', right: '10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(240,176,60,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', width: '100%' }}>

        {/* Section label */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
            01 / About
          </span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(240,176,60,0.4), var(--rule))' }} />
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }} className="about-grid">

          {/* Left */}
          <div>
            <h2 className="reveal" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              lineHeight: 1.05, letterSpacing: '-0.03em',
              color: 'var(--ink)', marginBottom: '1rem',
            }}>
              Designing play,<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic', textShadow: '0 0 40px rgba(240,176,60,0.3)' }}>
                one mechanic
              </em><br />
              at a time.
            </h2>

            {/* Highlights */}
            <div className="reveal" style={{
              display: 'flex', gap: '2.5rem', marginTop: '3rem',
              paddingTop: '2rem', borderTop: '1px solid var(--rule-hi)',
              transitionDelay: '0.1s',
            }}>
              {about.highlights.map(h => (
                <div key={h.label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', lineHeight: 1, color: 'var(--accent)', textShadow: '0 0 24px rgba(240,176,60,0.3)' }}>{h.value}</div>
                  <div style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginTop: '6px', fontFamily: 'var(--font-mono)' }}>{h.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {about.bio.map((p, i) => (
              <p key={i} className="reveal" style={{
                fontSize: '1rem', lineHeight: 1.8,
                color: 'var(--ink-light)', fontWeight: 300,
                marginBottom: '1.5rem', transitionDelay: `${i * 0.12}s`,
              }}>{p}</p>
            ))}
            <div className="reveal" style={{ marginTop: '2.5rem', transitionDelay: '0.25s' }}>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.08em',
                color: 'var(--accent)', textTransform: 'uppercase',
                borderBottom: '1px solid rgba(240,176,60,0.4)', paddingBottom: '2px',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.textShadow = '0 0 16px rgba(240,176,60,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,176,60,0.4)'; e.currentTarget.style.textShadow = 'none'; }}
              >
                View LinkedIn
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 11L11 1M11 1H4M11 1v7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}