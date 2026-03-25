import React, { useEffect, useRef } from 'react';
import { personal } from '../data';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTimeout(() => el.classList.add('hero-loaded'), 100);
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 2rem',
      maxWidth: 'var(--max-w)',
      margin: '0 auto',
      position: 'relative',
    }}>

      {/* Decorative vertical rule */}
      <div style={{
        position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)',
        width: '1px', height: '120px', background: 'var(--rule)',
      }} />

      <div ref={ref} className="hero-content">
        {/* Eyebrow */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '1.5rem',
          fontWeight: 500,
          opacity: 0,
          animation: 'fadeIn 0.8s 0.2s forwards',
          paddingLeft: '1rem',
          borderLeft: '2px solid var(--accent)',
        }}>
          Game Designer — Based in India
        </p>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem, 10vw, 8.5rem)',
          lineHeight: 0.92,
          letterSpacing: '-0.03em',
          color: 'var(--ink)',
          marginBottom: '2rem',
          opacity: 0,
          animation: 'fadeUp 0.9s 0.35s cubic-bezier(0.16,1,0.3,1) forwards',
        }}>
          {personal.name.split(' ')[0]}<br />
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>{personal.name.split(' ')[1]}</em>
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'var(--ink-light)',
          maxWidth: '560px',
          fontWeight: 300,
          lineHeight: 1.6,
          marginBottom: '3rem',
          opacity: 0,
          animation: 'fadeUp 0.9s 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        }}>
          {personal.tagline}
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap',
          opacity: 0,
          animation: 'fadeUp 0.9s 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
        }}>
          <a href="#work" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'var(--ink)', color: 'var(--paper)',
            padding: '0.85rem 2rem', borderRadius: '2px',
            fontSize: '0.875rem', fontWeight: 500,
            letterSpacing: '0.05em', textTransform: 'uppercase',
            transition: 'background 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            View My Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 7h10M7 2l5 5-5 5"/></svg>
          </a>
          <a href={`mailto:${personal.email}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'transparent', color: 'var(--ink)',
            padding: '0.85rem 2rem', borderRadius: '2px',
            fontSize: '0.875rem', fontWeight: 400,
            letterSpacing: '0.05em', textTransform: 'uppercase',
            border: '1px solid var(--rule)',
            transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        opacity: 0, animation: 'fadeIn 1s 1.2s forwards',
      }}>
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>Scroll</span>
        <div style={{
          width: '1px', height: '48px', background: 'linear-gradient(to bottom, var(--ink-muted), transparent)',
          animation: 'scrollPulse 2s infinite',
        }} />
      </div>

      {/* Stats strip */}
      <div style={{
        position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', gap: '2.5rem',
        opacity: 0, animation: 'fadeIn 0.8s 0.9s forwards',
      }} className="hero-stats">
        {[
          { n: '8+', l: 'Games' },
          { n: '2+', l: 'Years' },
          { n: '2', l: 'In Dev' },
        ].map(s => (
          <div key={s.n} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', lineHeight: 1, color: 'var(--ink)' }}>{s.n}</div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginTop: '4px' }}>{s.l}</div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
        @media (max-width: 900px) {
          .hero-stats { display: none !important; }
        }
      `}</style>
    </section>
  );
}
