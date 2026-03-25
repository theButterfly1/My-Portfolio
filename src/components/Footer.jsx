import React from 'react';
import { personal } from '../data';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--ink)',
      color: 'var(--paper)',
      padding: '3rem 2rem',
    }}>
      <div style={{
        maxWidth: 'var(--max-w)', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1.5rem',
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '0.4rem' }}>
            {personal.name.split(' ')[0]}<span style={{ color: 'var(--accent)' }}>.</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em' }}>
            Game Designer
          </div>
        </div>

        <nav style={{ display: 'flex', gap: '2rem' }}>
          {['#about', '#work', '#skills', '#contact'].map(href => (
            <a key={href} href={href} style={{
              fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
            >
              {href.replace('#', '')}
            </a>
          ))}
        </nav>

        <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.04em' }}>
          © {new Date().getFullYear()} {personal.name}
        </div>
      </div>
    </footer>
  );
}
