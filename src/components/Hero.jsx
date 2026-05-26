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
      minHeight: '100vh', width: '100%',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: `0 clamp(1.5rem, 5vw, 4rem)`,
      position: 'relative', overflow: 'hidden',
      background: 'var(--paper)',
      borderTop: 'none',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '20%',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(240,176,60,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '10%',
        width: '400px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(120,100,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Grid lines decoration */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px',
        background: 'linear-gradient(to bottom, transparent, var(--rule-hi), transparent)',
        marginLeft: 'clamp(1.5rem, 5vw, 4rem)',
      }} />

      <div ref={ref} style={{ maxWidth: 'var(--max-w)', width: '100%', margin: '0 auto', position: 'relative' }}>
        {/* Eyebrow */}
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
          letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)',
          marginBottom: '1.75rem', fontWeight: 400,
          opacity: 0, animation: 'fadeIn 0.8s 0.2s forwards',
          paddingLeft: '1rem',
          borderLeft: '2px solid var(--accent)',
          textShadow: '0 0 20px rgba(240,176,60,0.4)',
        }}>
          Game Designer ‖ Game Producer — Based in India
        </p>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem, 10vw, 9rem)',
          lineHeight: 0.92, letterSpacing: '-0.03em',
          color: 'var(--ink)', marginBottom: '2.5rem',
          opacity: 0, animation: 'fadeUp 0.9s 0.35s cubic-bezier(0.16,1,0.3,1) forwards',
        }}>
          {personal.name.split(' ')[0]}<br />
          <em style={{
            color: 'var(--accent)', fontStyle: 'italic',
            textShadow: '0 0 60px rgba(240,176,60,0.35)',
          }}>
            {personal.name.split(' ')[1]}
          </em>
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'var(--ink-light)', maxWidth: '520px', fontWeight: 300,
          lineHeight: 1.65, marginBottom: '3rem',
          opacity: 0, animation: 'fadeUp 0.9s 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        }}>
          {personal.tagline}
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap',
          opacity: 0, animation: 'fadeUp 0.9s 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
        }}>
          <a href="#work" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'var(--accent)', color: '#08080e',
            padding: '0.9rem 2.2rem', borderRadius: '3px',
            fontSize: '0.875rem', fontWeight: 700,
            letterSpacing: '0.07em', textTransform: 'uppercase',
            transition: 'all 0.2s',
            boxShadow: '0 0 24px rgba(240,176,60,0.3)',
          }}
            onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            View My Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M2 7h10M7 2l5 5-5 5" /></svg>
          </a>
          <a href={`mailto:${personal.email}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'transparent', color: 'var(--ink)',
            padding: '0.9rem 2.2rem', borderRadius: '3px',
            fontSize: '0.875rem', fontWeight: 500,
            letterSpacing: '0.07em', textTransform: 'uppercase',
            border: '1px solid var(--rule-hi)',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule-hi)'; e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.transform = 'translateY(0)'; }}
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
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>Scroll</span>
        <div style={{
          width: '1px', height: '48px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'scrollPulse 2s infinite',
        }} />
      </div>

      {/* Right stats */}
      <div style={{
        position: 'absolute', right: 'clamp(1.5rem, 5vw, 4rem)', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', gap: '2.5rem',
        opacity: 0, animation: 'fadeIn 0.8s 0.9s forwards',
      }} className="hero-stats">
        {[{ n: '8+', l: 'Games' }, { n: '3+', l: 'Years' }, { n: '3', l: 'In Dev' }].map(s => (
          <div key={s.n} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', lineHeight: 1, color: 'var(--ink)' }}>{s.n}</div>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginTop: '5px', fontFamily: 'var(--font-mono)' }}>{s.l}</div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.35; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.08); }
        }
      `}</style>
    </section>
  );
}