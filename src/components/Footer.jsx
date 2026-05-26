import React from 'react';
import { personal } from '../data';

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: 'var(--paper-mid)',
      borderTop: '1px solid var(--rule-hi)',
      padding: `3rem clamp(1.5rem, 5vw, 4rem)`,
    }}>
      <div style={{
        maxWidth: 'var(--max-w)', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1.5rem',
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '0.3rem', color: 'var(--ink)' }}>
            {personal.name.split(' ')[0]}
            <span style={{ color: 'var(--accent)', textShadow: '0 0 12px rgba(240,176,60,0.5)' }}>.</span>
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--ink-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
            Game Designer
          </div>
        </div>

        <nav style={{ display: 'flex', gap: '2rem' }}>
          {['#about', '#work', '#skills', '#contact'].map(href => (
            <a key={href} href={href} style={{
              fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--ink-muted)', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-muted)'}
            >
              {href.replace('#', '')}
            </a>
          ))}
        </nav>

        <div style={{ fontSize: '0.7rem', color: 'var(--ink-muted)', letterSpacing: '0.04em', fontFamily: 'var(--font-mono)' }}>
          © {new Date().getFullYear()} {personal.name}
        </div>
      </div>
    </footer>
  );
}