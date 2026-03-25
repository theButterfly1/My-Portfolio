import React, { useState } from 'react';
import { personal } from '../data';
import { useReveal } from '../useReveal';

export default function Contact() {
  const ref = useReveal();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} style={{
      padding: `var(--section-gap) 2rem`,
      background: 'var(--paper-warm)',
      borderTop: '1px solid var(--rule)',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        {/* Section label */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 500 }}>04 / Contact</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--rule)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }} className="contact-grid">

          {/* Left */}
          <div>
            <h2 className="reveal" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              color: 'var(--ink)',
              marginBottom: '1.5rem',
            }}>
              Let's make<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>something great.</em>
            </h2>

            <p className="reveal" style={{
              fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--ink-light)',
              fontWeight: 300, maxWidth: '420px',
            }}>
              Open to full-time game designer roles, contract work, and collaborations. If you're building something interesting, I'd love to hear about it.
            </p>
          </div>

          {/* Right: contact details */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Email */}
            <div style={{
              background: 'white', border: '1px solid var(--rule)',
              borderRadius: '3px', padding: '1.5rem 1.75rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '1rem',
            }}>
              <div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '4px' }}>Email</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--ink)', fontWeight: 400 }}>{personal.email}</div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button onClick={copyEmail} title="Copy email" style={{
                  background: copied ? 'var(--accent)' : 'var(--paper-mid)',
                  color: copied ? 'white' : 'var(--ink)',
                  border: 'none', borderRadius: '2px',
                  padding: '0.5rem 0.75rem', cursor: 'pointer', fontSize: '0.7rem',
                  fontFamily: 'var(--font-body)', fontWeight: 500,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  transition: 'all 0.2s',
                }}>
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <a href={`mailto:${personal.email}`} style={{
                  background: 'var(--ink)', color: 'var(--paper)',
                  borderRadius: '2px', padding: '0.5rem 0.75rem',
                  fontSize: '0.7rem', fontWeight: 500,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
                >
                  Send
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={{
              background: 'white', border: '1px solid var(--rule)',
              borderRadius: '3px', padding: '1.5rem 1.75rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '1rem', transition: 'border-color 0.2s, transform 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ink)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '4px' }}>LinkedIn</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--ink)' }}>{personal.linkedinLabel}</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 11L11 1M11 1H4M11 1v7"/></svg>
            </a>

            {/* Phone */}
            <a href={`tel:${personal.phone}`} style={{
              background: 'white', border: '1px solid var(--rule)',
              borderRadius: '3px', padding: '1.5rem 1.75rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '1rem', transition: 'border-color 0.2s, transform 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ink)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '4px' }}>Phone</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--ink)' }}>{personal.phone}</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.85 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.77 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 10.9a16 16 0 006.09 6.09l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            </a>

            {/* Availability badge */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              padding: '1rem 1.75rem',
            }}>
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#4caf50',
                boxShadow: '0 0 0 3px rgba(76,175,80,0.2)',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--ink-light)', fontWeight: 400 }}>
                Currently <strong style={{ color: 'var(--ink)' }}>open to opportunities</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(76,175,80,0.2); }
          50% { box-shadow: 0 0 0 6px rgba(76,175,80,0.08); }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
