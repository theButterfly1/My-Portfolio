import React, { useState, useEffect } from 'react';
import { personal } from '../data';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: `0 clamp(1.5rem, 5vw, 4rem)`,
      background: scrolled ? 'rgba(8,8,16,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--rule-hi)' : '1px solid transparent',
      transition: 'all 0.4s ease',
      height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      width: '100%',
    }}>
      {/* Logo */}
      <a href="#" style={{
        fontFamily: 'var(--font-display)', fontSize: '1.25rem',
        letterSpacing: '-0.02em', color: 'var(--ink)',
      }}>
        {personal.name.split(' ')[0]}
        <span style={{ color: 'var(--accent)', textShadow: '0 0 12px rgba(240,176,60,0.6)' }}>.</span>
      </a>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center' }} className="nav-desktop">
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} style={{
              fontFamily: 'var(--font-body)', fontSize: '0.82rem',
              fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: active === link.href ? 'var(--accent)' : 'var(--ink-muted)',
              transition: 'color 0.2s',
              borderBottom: active === link.href ? '1px solid var(--accent)' : '1px solid transparent',
              paddingBottom: '2px',
            }}
              onMouseEnter={e => { if (active !== link.href) e.currentTarget.style.color = 'var(--ink)'; }}
              onMouseLeave={e => { if (active !== link.href) e.currentTarget.style.color = 'var(--ink-muted)'; }}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href={`mailto:${personal.email}`} style={{
            background: 'var(--accent)', color: '#08080e',
            padding: '0.5rem 1.25rem', borderRadius: '3px',
            fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase',
            fontWeight: 700, transition: 'all 0.2s',
            boxShadow: '0 0 16px rgba(240,176,60,0.25)',
          }}
            onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.15)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Hire Me
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: 'none', background: 'none', border: 'none', cursor: 'pointer',
        flexDirection: 'column', gap: '5px', padding: '4px',
      }} className="hamburger" aria-label="Menu">
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block', width: '22px', height: '1.5px',
            background: 'var(--ink)', transition: 'all 0.3s',
            transform: menuOpen
              ? i === 0 ? 'translateY(6.5px) rotate(45deg)' : i === 2 ? 'translateY(-6.5px) rotate(-45deg)' : 'scaleX(0)'
              : 'none',
            opacity: menuOpen && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0,
          background: 'var(--paper)', zIndex: 99,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: '2.5rem',
          borderTop: '1px solid var(--rule-hi)',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-display)', fontSize: '2rem',
              color: active === link.href ? 'var(--accent)' : 'var(--ink)',
            }}>{link.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}