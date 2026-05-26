import React, { useState } from 'react';
import { personal } from '../data';
import { useReveal } from '../useReveal';

export default function Contact() {
  const ref = useReveal();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const ContactCard = ({ label, value, children }) => (
    <div style={{
      background: 'var(--paper-card)',
      border: '1px solid var(--rule-hi)',
      borderRadius: '6px', padding: '1.5rem 1.75rem',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', gap: '1rem',
      transition: 'border-color 0.25s, box-shadow 0.25s',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(240,176,60,0.5)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(240,176,60,0.07)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule-hi)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div>
        <div style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '5px', fontFamily: 'var(--font-mono)' }}>{label}</div>
        <div style={{ fontSize: '0.95rem', color: 'var(--ink)', fontWeight: 400 }}>{value}</div>
      </div>
      {children}
    </div>
  );

  return (
    <section id="contact" ref={ref} style={{
      width: '100%',
      padding: `var(--section-gap) clamp(1.5rem, 5vw, 4rem)`,
      background: 'var(--paper)',
      borderTop: '1px solid var(--rule)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(240,176,60,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', width: '100%', position: 'relative' }}>

        {/* Section label */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
            04 / Contact
          </span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(240,176,60,0.4), var(--rule))' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }} className="contact-grid">

          {/* Left */}
          <div>
            <h2 className="reveal" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              letterSpacing: '-0.03em', lineHeight: 1,
              color: 'var(--ink)', marginBottom: '1.5rem',
            }}>
              Let's make<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic', textShadow: '0 0 50px rgba(240,176,60,0.35)' }}>
                something great.
              </em>
            </h2>

            <p className="reveal" style={{
              fontSize: '1rem', lineHeight: 1.75, color: 'var(--ink-light)',
              fontWeight: 300, maxWidth: '400px', transitionDelay: '0.1s',
            }}>
              Open to full-time game designer / game producer roles, contract work, and collaborations. If you're building something interesting, I'd love to hear about it.
            </p>

            {/* Status badge */}
            <div className="reveal" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              marginTop: '2.5rem', padding: '0.6rem 1.2rem',
              background: 'rgba(60,220,100,0.08)', border: '1px solid rgba(60,220,100,0.25)',
              borderRadius: '100px', transitionDelay: '0.2s',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3cdc64', boxShadow: '0 0 8px #3cdc64', animation: 'pulse 2s infinite', flexShrink: 0 }} />
              <span style={{ fontSize: '0.8rem', color: '#6eeaa0', fontWeight: 500 }}>
                Currently <strong>open to opportunities</strong>
              </span>
            </div>
          </div>

          {/* Right: contact cards */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Email */}
            <ContactCard label="Email" value={personal.email}>
              <div style={{ display: 'flex', gap: '0.6rem', flexShrink: 0 }}>
                <button onClick={copyEmail} style={{
                  background: copied ? 'var(--accent)' : 'rgba(255,255,255,0.06)',
                  color: copied ? '#08080e' : 'var(--ink-light)',
                  border: `1px solid ${copied ? 'var(--accent)' : 'var(--rule-hi)'}`,
                  borderRadius: '3px', padding: '0.45rem 0.85rem',
                  cursor: 'pointer', fontSize: '0.68rem',
                  fontFamily: 'var(--font-body)', fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  transition: 'all 0.2s',
                }}>
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
                <a href={`mailto:${personal.email}`} style={{
                  background: 'var(--accent)', color: '#08080e',
                  borderRadius: '3px', padding: '0.45rem 0.85rem',
                  fontSize: '0.68rem', fontFamily: 'var(--font-body)', fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  transition: 'all 0.2s',
                  display: 'inline-flex', alignItems: 'center',
                }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.12)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
                >
                  Send
                </a>
              </div>
            </ContactCard>

            {/* LinkedIn */}
            <ContactCard label="LinkedIn" value={personal.linkedinLabel}>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={{
                color: 'var(--accent)', flexShrink: 0, transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translate(2px,-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translate(0,0)'}
              >
                <svg width="18" height="18" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 11L11 1M11 1H4M11 1v7" /></svg>
              </a>
            </ContactCard>

            {/* Phone */}
            <ContactCard label="Phone" value={personal.phone}>
              <a href={`tel:${personal.phone}`} style={{
                color: 'var(--accent)', flexShrink: 0, transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translate(2px,-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translate(0,0)'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z" /></svg>
              </a>
            </ContactCard>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #3cdc64; }
          50% { opacity: 0.6; box-shadow: 0 0 16px #3cdc64; }
        }
      `}</style>
    </section>
  );
}