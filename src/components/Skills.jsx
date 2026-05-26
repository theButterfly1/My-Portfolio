import React from 'react';
import { skills } from '../data';
import { useReveal } from '../useReveal';

const processSteps = [
  { n: '01', title: 'Research', desc: 'Player psychology & genre analysis' },
  { n: '02', title: 'Design', desc: 'Systems, mechanics & prototyping' },
  { n: '03', title: 'Iterate', desc: 'Playtesting & data-driven tuning' },
  { n: '04', title: 'Ship', desc: 'Polish, QA & live ops readiness' },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" ref={ref} style={{
      width: '100%',
      padding: `var(--section-gap) clamp(1.5rem, 5vw, 4rem)`,
      background: 'var(--paper-warm)',
      borderTop: '1px solid var(--rule)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', width: '100%' }}>

        {/* Section label */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
            03 / Skills
          </span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(240,176,60,0.4), var(--rule))' }} />
        </div>

        {/* Heading */}
        <h2 className="reveal" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          letterSpacing: '-0.03em', lineHeight: 1.05,
          color: 'var(--ink)', marginBottom: '4rem',
        }}>
          The tools & craft<br />
          <em style={{ color: 'var(--accent)', fontStyle: 'italic', textShadow: '0 0 40px rgba(240,176,60,0.3)' }}>
            behind the games.
          </em>
        </h2>

        {/* Skills grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          border: '1px solid var(--rule-hi)', borderRadius: '6px', overflow: 'hidden',
          background: 'var(--paper-card)',
        }} className="skills-cols">
          {skills.map((cat, ci) => (
            <div key={cat.category} className="reveal" style={{
              padding: '2.5rem',
              borderRight: ci < skills.length - 1 ? '1px solid var(--rule-hi)' : 'none',
              transitionDelay: `${ci * 0.1}s`,
            }}>
              <h3 style={{
                fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--accent)', fontWeight: 700, marginBottom: '1.5rem',
                fontFamily: 'var(--font-mono)',
              }}>{cat.category}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {cat.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--ink-light)', fontWeight: 300, lineHeight: 1.4 }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', opacity: 0.5, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Process strip — fully dark, all text visible ── */}
        <div className="reveal process-grid" style={{
          marginTop: '4rem',
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          background: 'var(--paper-mid)',
          border: '1px solid var(--rule-hi)',
          borderRadius: '6px', overflow: 'hidden',
          transitionDelay: '0.2s',
        }}>
          {processSteps.map((step, i) => (
            <div key={step.n} style={{
              padding: '2.2rem 1.8rem',
              borderRight: i < 3 ? '1px solid var(--rule-hi)' : 'none',
              position: 'relative',
              transition: 'background 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(240,176,60,0.05)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              {/* Big faded number */}
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '2.5rem',
                color: 'var(--accent)', opacity: 0.18,
                lineHeight: 1, marginBottom: '0.75rem',
                userSelect: 'none',
              }}>{step.n}</div>

              {/* Step title */}
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '1.15rem',
                color: 'var(--ink)',            /* ← was invisible white on white */
                marginBottom: '0.45rem',
              }}>{step.title}</div>

              {/* Step desc */}
              <div style={{
                fontSize: '0.82rem',
                color: 'var(--ink-muted)',      /* ← was invisible */
                fontWeight: 400, lineHeight: 1.55,
              }}>{step.desc}</div>

              {/* Accent bottom border on hover */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '2px', background: 'var(--accent)', opacity: 0,
                transition: 'opacity 0.3s',
              }} className="step-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}