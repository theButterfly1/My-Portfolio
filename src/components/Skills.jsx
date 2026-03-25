import React from 'react';
import { skills } from '../data';
import { useReveal } from '../useReveal';

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" ref={ref} style={{
      padding: `var(--section-gap) 2rem`,
      maxWidth: 'var(--max-w)',
      margin: '0 auto',
    }}>
      {/* Section label */}
      <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
        <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 500 }}>03 / Skills</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--rule)' }} />
      </div>

      {/* Heading */}
      <h2 className="reveal" style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        letterSpacing: '-0.03em',
        lineHeight: 1.05,
        color: 'var(--ink)',
        marginBottom: '4rem',
      }}>
        The tools & craft<br />
        <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>behind the games.</em>
      </h2>

      {/* Skills grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0',
        border: '1px solid var(--rule)',
        borderRadius: '3px',
        overflow: 'hidden',
      }} className="skills-grid">
        {skills.map((cat, ci) => (
          <div key={cat.category} className="reveal" style={{
            padding: '2.5rem',
            borderRight: ci < skills.length - 1 ? '1px solid var(--rule)' : 'none',
            transitionDelay: `${ci * 0.1}s`,
          }}>
            <h3 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              fontWeight: 600,
              marginBottom: '1.5rem',
            }}>
              {cat.category}
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {cat.items.map((item, ii) => (
                <li key={item} style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  fontSize: '0.95rem', color: 'var(--ink-light)', fontWeight: 300,
                  lineHeight: 1.4,
                }}>
                  <span style={{
                    width: '4px', height: '4px', borderRadius: '50%',
                    background: 'var(--paper-mid)',
                    flexShrink: 0,
                  }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Process strip */}
      <div className="reveal" style={{
        marginTop: '5rem',
        padding: '2.5rem',
        background: 'var(--ink)',
        borderRadius: '3px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '0',
      }} className="process-strip reveal">
        {[
          { n: '01', title: 'Research', desc: 'Player psychology & genre analysis' },
          { n: '02', title: 'Design', desc: 'Systems, mechanics & prototyping' },
          { n: '03', title: 'Iterate', desc: 'Playtesting & data-driven tuning' },
          { n: '04', title: 'Ship', desc: 'Polish, QA & live ops readiness' },
        ].map((step, i) => (
          <div key={step.n} style={{
            padding: '1.5rem',
            borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem', color: 'rgba(255,255,255,0.12)',
              lineHeight: 1, marginBottom: '0.75rem',
            }}>{step.n}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--paper)', marginBottom: '0.4rem' }}>{step.title}</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300, lineHeight: 1.4 }}>{step.desc}</div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .skills-grid > div { border-right: none !important; border-bottom: 1px solid var(--rule); }
          .process-strip { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .process-strip { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
