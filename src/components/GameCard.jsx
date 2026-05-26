import React, { useState } from 'react';

const genreAccents = {
  'Casual / Management': { color: '#f0c040', glow: 'rgba(240,192,64,0.16)' },
  'Action / Shooter': { color: '#ff5555', glow: 'rgba(255,85,85,0.16)' },
  'Puzzle / Adventure': { color: '#55aaff', glow: 'rgba(85,170,255,0.16)' },
  'Arcade / Action': { color: '#ff8c00', glow: 'rgba(255,140,0,0.16)' },
  'Casual / Runner': { color: '#40ddaa', glow: 'rgba(64,221,170,0.16)' },
  'Puzzle / Casual': { color: '#cc66ff', glow: 'rgba(204,102,255,0.16)' },
  'Action / Fantasy': { color: '#aa66ff', glow: 'rgba(170,102,255,0.16)' },
  'Puzzle / Logic': { color: '#30d0c8', glow: 'rgba(48,208,200,0.16)' },
  'Personal Project': { color: '#f0b03c', glow: 'rgba(240,176,60,0.16)' },
};
const fallback = { color: '#9090b8', glow: 'rgba(144,144,184,0.12)' };

const PlayIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
);
const DownloadIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const YTIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.2s-.3-1.9-1.1-2.7c-1-1.1-2.2-1.1-2.7-1.2C16.8 2 12 2 12 2s-4.8 0-7.7.3c-.5.1-1.7.1-2.7 1.2C.8 4.3.5 6.2.5 6.2S.2 8.4.2 10.6v2.1c0 2.2.3 4.4.3 4.4s.3 1.9 1.1 2.7c1 1.1 2.4 1 3 1.1C6.8 21 12 21 12 21s4.8 0 7.7-.3c.5-.1 1.7-.1 2.7-1.2.8-.8 1.1-2.7 1.1-2.7s.3-2.2.3-4.4v-2.1c0-2.2-.3-4.4-.3-4.4zM9.7 15.5V8.6l7.3 3.5-7.3 3.4z" />
  </svg>
);

export default function GameCard({ game, index }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const ac = genreAccents[game.genre] || fallback;

  const hasPromo = Boolean(game.promoImage);
  const hasYT = Boolean(game.youtubeLink);
  const hasThumbnail = hasYT && !imgError; // show YT thumbnail as promo banner
  const hasPlayOnline = Boolean(game.playOnlineLink);
  const hasDownload = Boolean(game.downloadLink);

  // The top banner shows: explicit promoImage > YouTube thumbnail > nothing
  const bannerSrc = hasPromo
    ? game.promoImage
    : hasYT
      ? (game.ytThumbnail || `https://img.youtube.com/vi/${extractYtId(game.youtubeLink)}/maxresdefault.jpg`)
      : null;

  return (
    <article
      className="reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'linear-gradient(160deg, #10101e, #0d0d1a)',
        border: `1px solid ${hovered ? ac.color + '60' : '#1e1e32'}`,
        borderRadius: '8px', overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'translateY(-7px) scale(1.01)' : 'none',
        boxShadow: hovered
          ? `0 28px 64px rgba(0,0,0,0.55), 0 0 0 1px ${ac.color}22, inset 0 1px 0 rgba(255,255,255,0.05)`
          : '0 4px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.03)',
        position: 'relative',
        transitionDelay: `${(index % 3) * 0.06}s`,
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Glow overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse at 50% 0%, ${ac.glow} 0%, transparent 65%)`,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.4s', zIndex: 0,
      }} />

      {/* Corner accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: hovered ? '56px' : '24px', height: '2px', background: ac.color, transition: 'width 0.45s cubic-bezier(0.16,1,0.3,1)', zIndex: 2 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '2px', height: hovered ? '56px' : '24px', background: ac.color, transition: 'height 0.45s cubic-bezier(0.16,1,0.3,1)', zIndex: 2 }} />

      {/* ── Banner: promo image OR YouTube thumbnail ── */}
      {bannerSrc && !imgError && (
        <div style={{ width: '100%', height: '172px', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
          <img
            src={bannerSrc}
            alt={`${game.title} preview`}
            onError={() => setImgError(true)}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transform: hovered ? 'scale(1.07)' : 'scale(1)',
              filter: hovered ? 'brightness(0.85)' : 'brightness(0.6)',
              transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), filter 0.4s',
            }}
          />
          {/* Gradient fade to card */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, #0d0d1a 100%)' }} />

          {/* YouTube play overlay (only for YT thumbnails) */}
          {hasYT && !hasPromo && (
            <a href={game.youtubeLink} target="_blank" rel="noopener noreferrer"
              style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none',
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%',
                background: 'rgba(255,0,0,0.88)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.2s, background 0.2s',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                transform: hovered ? 'scale(1.12)' : 'scale(1)',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '3px' }}>
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </a>
          )}

          {/* In Dev badge */}
          {game.wip && (
            <div style={{
              position: 'absolute', top: '0.75rem', right: '0.75rem',
              background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)',
              color: ac.color, border: `1px solid ${ac.color}55`,
              fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '4px 9px', borderRadius: '3px',
            }}>In Dev</div>
          )}
        </div>
      )}

      {/* ── Card body ── */}
      <div style={{ padding: '1.6rem', position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Genre + year + wip (no banner) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.4rem' }}>
          <span style={{
            fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: ac.color, fontWeight: 700,
            background: ac.glow, border: `1px solid ${ac.color}40`,
            padding: '3px 9px', borderRadius: '3px',
          }}>{game.genre}</span>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {!bannerSrc && game.wip && (
              <span style={{ background: 'rgba(255,159,64,0.1)', color: '#ff9f40', border: '1px solid rgba(255,159,64,0.3)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '3px' }}>In Dev</span>
            )}
            <span style={{ fontSize: '0.66rem', color: '#484860', fontFamily: 'var(--font-mono, monospace)', fontWeight: 500 }}>{game.year}</span>
          </div>
        </div>

        {/* Index number */}
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', lineHeight: 1, color: hovered ? ac.color + '40' : '#1e1e32', marginBottom: '0.35rem', transition: 'color 0.35s', letterSpacing: '-0.02em' }}>
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Title */}
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', lineHeight: 1.15, letterSpacing: '-0.02em', color: hovered ? '#ffffff' : '#dddaff', marginBottom: '0.4rem', transition: 'color 0.3s' }}>{game.title}</h3>

        {/* Role */}
        <p style={{ fontSize: '0.68rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: '#404058', fontWeight: 500, marginBottom: '0.85rem', lineHeight: 1.55 }}>{game.role}</p>

        {/* Description */}
        <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: '#8080a8', fontWeight: 400, marginBottom: '1.15rem', flex: 1 }}>{game.description}</p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.3rem' }}>
          {game.tags.map(tag => (
            <span key={tag} style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: '3px', background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.07)', color: '#6868a0', fontWeight: 500 }}>{tag}</span>
          ))}
        </div>

        {/* ── Buttons row ── */}
        <div style={{ display: 'flex', gap: '0.55rem', flexWrap: 'wrap', marginTop: 'auto' }}>

          {/* PRIMARY: Play Online > Watch Video (YT) > disabled label */}
          {hasPlayOnline ? (
            <Btn href={game.playOnlineLink} filled ac={ac} icon={<PlayIcon />} label="Play Online" />
          ) : hasYT ? (
            <Btn href={game.youtubeLink} filled ac={ac} icon={<YTIcon />} label="Watch Video" isYT />
          ) : (
            <DisabledBtn icon={<PlayIcon />} label={game.linkLabel || 'Play Online'} />
          )}

          {/* SECONDARY: Download — hidden for video-only games */}
          {!(hasYT && !hasPlayOnline) && (
            hasDownload ? (
              <Btn href={game.downloadLink} filled={false} ac={ac} icon={<DownloadIcon />} label="Download" />
            ) : (
              <DisabledBtn icon={<DownloadIcon />} label="Download" />
            )
          )}
        </div>
      </div>
    </article>
  );
}

// ── Helper: extract YouTube video ID from a URL ──
function extractYtId(url) {
  if (!url) return '';
  const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
  return match ? match[1] : '';
}

// ── Reusable filled / outlined button ──
function Btn({ href, filled, ac, icon, label, isYT }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
        padding: '0.55rem 1.1rem', borderRadius: '4px',
        textDecoration: 'none', flexShrink: 0, transition: 'all 0.2s',
        ...(filled ? {
          background: isYT ? (hov ? '#cc0000' : '#ff0000') : ac.color,
          color: '#08080e',
          border: `1px solid ${isYT ? '#ff0000' : ac.color}`,
          filter: hov && !isYT ? 'brightness(1.14)' : 'none',
          transform: hov ? 'translateY(-1px)' : 'none',
          boxShadow: isYT && hov ? '0 0 20px rgba(255,0,0,0.35)' : hov ? `0 0 20px ${ac.color}44` : 'none',
        } : {
          background: hov ? ac.color + '18' : 'transparent',
          color: ac.color,
          border: `1px solid ${hov ? ac.color : ac.color + '55'}`,
          transform: hov ? 'translateY(-1px)' : 'none',
        }),
      }}
    >
      {icon} {label}
    </a>
  );
}

// ── Grayed-out disabled state ──
function DisabledBtn({ icon, label }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
      fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
      padding: '0.55rem 1.1rem', borderRadius: '4px',
      background: 'rgba(255,255,255,0.03)', color: '#2a2a42',
      border: '1px solid rgba(255,255,255,0.05)', flexShrink: 0, cursor: 'default',
    }}>
      {icon} {label}
    </span>
  );
}