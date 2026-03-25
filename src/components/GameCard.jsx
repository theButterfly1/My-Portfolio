import React, { useState } from 'react';

const genreColors = {
  'Casual / Management': '#7b8c5a',
  'Action / Shooter': '#8c5a5a',
  'Puzzle / Adventure': '#5a6e8c',
  'Arcade / Action': '#8c7a5a',
  'Casual / Runner': '#6e8c7a',
  'Puzzle / Casual': '#8c5a7a',
  'Action / Fantasy': '#6b5a8c',
  'Puzzle / Logic': '#5a8c8a',
  'Personal Project': '#5a5a8c',
};

export default function GameCard({ game, index }) {
  const [hovered, setHovered] = useState(false);
  const accentColor = genreColors[game.genre] || '#5a5a5a';

  return (
    <article
      className="reveal"
      style={{
        background: hovered ? 'var(--paper-warm)' : 'white',
        border: '1px solid var(--rule)',
        borderRadius: '3px',
        padding: '2rem',
        cursor: game.link ? 'pointer' : 'default',
        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
        position: 'relative',
        overflow: 'hidden',
        transitionDelay: `${(index % 3) * 0.07}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* WIP badge */}
      {game.wip && (
        <div style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: '#f0e8d8', color: '#8c6a3a',
          fontSize: '0.65rem', fontWeight: 600,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '3px 8px', borderRadius: '2px',
        }}>In Dev</div>
      )}

      {/* Genre + Year */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <span style={{
          fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase',
          color: accentColor, fontWeight: 500,
        }}>
          {game.genre}
        </span>
        <span style={{ fontSize: '0.7rem', color: 'var(--ink-muted)' }}>{game.year}</span>
      </div>

      {/* Index number */}
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '3rem', lineHeight: 1,
        color: 'var(--rule)',
        marginBottom: '0.5rem',
        transition: 'color 0.3s',
        ...(hovered ? { color: accentColor + '33' } : {}),
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.4rem', lineHeight: 1.15,
        letterSpacing: '-0.02em',
        color: 'var(--ink)',
        marginBottom: '0.5rem',
      }}>
        {game.title}
      </h3>

      {/* Role */}
      <p style={{
        fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase',
        color: 'var(--ink-muted)', fontWeight: 500, marginBottom: '1rem',
      }}>
        {game.role}
      </p>

      {/* Description */}
      <p style={{
        fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--ink-light)',
        fontWeight: 300, marginBottom: '1.5rem',
      }}>
        {game.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
        {game.tags.map(tag => (
          <span key={tag} style={{
            fontSize: '0.68rem', letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '3px 8px', borderRadius: '2px',
            background: 'var(--paper-mid)', color: 'var(--ink-light)',
            fontWeight: 500,
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      {game.link ? (
        <a
          href={game.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.06em',
            textTransform: 'uppercase', color: 'var(--ink)',
            borderBottom: '1px solid var(--ink)', paddingBottom: '1px',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = accentColor; e.currentTarget.style.borderColor = accentColor; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
        >
          Play Game
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 11L11 1M11 1H4M11 1v7"/></svg>
        </a>
      ) : (
        <span style={{
          fontSize: '0.78rem', color: 'var(--ink-muted)',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          fontStyle: 'italic',
        }}>
          {game.linkLabel || 'Link Coming Soon'}
        </span>
      )}
    </article>
  );
}
