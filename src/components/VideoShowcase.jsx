import React, { useState, useEffect } from 'react';
import { videos } from '../data';

const ALL_CATEGORIES = ['All', 'Mechanics', 'Level Design', 'Devlog', 'Learning', 'Prototype'];

// Auto-resolve thumbnail from ytId
function getThumbnail(video) {
  if (video.thumbnail) return video.thumbnail;
  if (video.ytId) return `https://img.youtube.com/vi/${video.ytId}/maxresdefault.jpg`;
  return null;
}

// Extract ytId from youtubeLink if not explicitly set
function resolveYtId(video) {
  if (video.ytId) return video.ytId;
  if (video.youtubeLink) {
    const m = video.youtubeLink.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
    return m ? m[1] : '';
  }
  return '';
}

function VideoCard({ video, index }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  const thumb = getThumbnail(video);
  const ytId = resolveYtId(video);

  const categoryColors = {
    'Mechanics': { color: '#55aaff', glow: 'rgba(85,170,255,0.15)' },
    'Level Design': { color: '#cc66ff', glow: 'rgba(204,102,255,0.15)' },
    'Devlog': { color: '#f0c040', glow: 'rgba(240,192,64,0.15)' },
    'Learning': { color: '#40ddaa', glow: 'rgba(64,221,170,0.15)' },
    'Prototype': { color: '#f0b03c', glow: 'rgba(240,176,60,0.15)' },
  };
  const ac = categoryColors[video.category] || { color: '#9090b8', glow: 'rgba(144,144,184,0.12)' };

  return (
    <a
      href={video.youtubeLink}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'linear-gradient(160deg, #10101e, #0d0d1a)',
        border: `1px solid ${hovered ? ac.color + '60' : '#1e1e32'}`,
        borderRadius: '8px', overflow: 'hidden',
        textDecoration: 'none',
        transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'translateY(-6px) scale(1.01)' : 'none',
        boxShadow: hovered
          ? `0 24px 56px rgba(0,0,0,0.55), 0 0 0 1px ${ac.color}22`
          : '0 4px 20px rgba(0,0,0,0.4)',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      {/* Corner accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: hovered ? '48px' : '20px', height: '2px', background: ac.color, transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1)', zIndex: 2 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '2px', height: hovered ? '48px' : '20px', background: ac.color, transition: 'height 0.4s cubic-bezier(0.16,1,0.3,1)', zIndex: 2 }} />

      {/* Glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: `radial-gradient(ellipse at 50% 0%, ${ac.glow} 0%, transparent 65%)`, opacity: hovered ? 1 : 0, transition: 'opacity 0.4s', zIndex: 0 }} />

      {/* ── Thumbnail ── */}
      <div style={{ width: '100%', height: '192px', position: 'relative', overflow: 'hidden', flexShrink: 0, background: '#0a0a16' }}>
        {thumb && !imgErr ? (
          <>
            <img
              src={thumb}
              alt={video.title}
              onError={() => setImgErr(true)}
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transform: hovered ? 'scale(1.06)' : 'scale(1)',
                filter: hovered ? 'brightness(0.75)' : 'brightness(0.5)',
                transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), filter 0.4s',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, #0d0d1a 100%)' }} />
          </>
        ) : (
          /* Fallback if no thumbnail */
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `linear-gradient(135deg, #0d0d1a 0%, ${ac.glow} 100%)`,
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill={ac.color} opacity="0.3">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        )}

        {/* YouTube play button overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '50%',
            background: hovered ? 'rgba(255,0,0,0.92)' : 'rgba(200,0,0,0.78)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'transform 0.25s, background 0.25s',
            transform: hovered ? 'scale(1.12)' : 'scale(1)',
            boxShadow: hovered ? '0 6px 24px rgba(255,0,0,0.45)' : '0 4px 16px rgba(0,0,0,0.5)',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '3px' }}>
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>

        {/* Duration badge */}
        {video.duration && (
          <div style={{
            position: 'absolute', bottom: '0.65rem', right: '0.65rem',
            background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)',
            color: '#fff', fontSize: '0.65rem', fontWeight: 600,
            fontFamily: 'var(--font-mono, monospace)',
            padding: '3px 7px', borderRadius: '3px', letterSpacing: '0.06em',
          }}>{video.duration}</div>
        )}

        {/* Category badge */}
        {video.category && (
          <div style={{
            position: 'absolute', top: '0.65rem', left: '0.65rem',
            background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)',
            color: ac.color, border: `1px solid ${ac.color}55`,
            fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '4px 9px', borderRadius: '3px',
          }}>{video.category}</div>
        )}
      </div>

      {/* ── Body ── */}
      <div style={{ padding: '1.4rem', position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Index */}
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', lineHeight: 1, color: hovered ? ac.color + '35' : '#1a1a2e', marginBottom: '0.3rem', letterSpacing: '-0.02em', transition: 'color 0.35s' }}>
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Title */}
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', lineHeight: 1.2, letterSpacing: '-0.02em', color: hovered ? '#ffffff' : '#dddaff', marginBottom: '0.75rem', transition: 'color 0.3s' }}>
          {video.title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#7070a0', fontWeight: 400, flex: 1, marginBottom: '1rem' }}>
          {video.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.1rem' }}>
          {video.tags.map(tag => (
            <span key={tag} style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: '3px', background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.07)', color: '#6060a0', fontWeight: 500 }}>{tag}</span>
          ))}
        </div>

        {/* Watch on YouTube link */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
          color: hovered ? '#ff4444' : '#ff3333',
          transition: 'color 0.2s',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.5 6.2s-.3-1.9-1.1-2.7c-1-1.1-2.2-1.1-2.7-1.2C16.8 2 12 2 12 2s-4.8 0-7.7.3c-.5.1-1.7.1-2.7 1.2C.8 4.3.5 6.2.5 6.2S.2 8.4.2 10.6v2.1c0 2.2.3 4.4.3 4.4s.3 1.9 1.1 2.7c1 1.1 2.4 1 3 1.1C6.8 21 12 21 12 21s4.8 0 7.7-.3c.5-.1 1.7-.1 2.7-1.2.8-.8 1.1-2.7 1.1-2.7s.3-2.2.3-4.4v-2.1c0-2.2-.3-4.4-.3-4.4zM9.7 15.5V8.6l7.3 3.5-7.3 3.4z" />
          </svg>
          Watch on YouTube
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 11L11 1M11 1H4M11 1v7" /></svg>
        </div>
      </div>
    </a>
  );
}

export default function VideoShowcase({ onBack }) {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  const presentCategories = ['All', ...new Set(videos.map(v => v.category).filter(Boolean))];

  const filtered = activeFilter === 'All'
    ? videos
    : videos.filter(v => v.category === activeFilter);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)', paddingTop: '64px', width: '100%' }}>

      {/* ── Header ── */}
      <div style={{
        padding: `5rem clamp(1.5rem, 5vw, 4rem) 3rem`,
        maxWidth: 'var(--max-w)', margin: '0 auto',
        borderBottom: '1px solid var(--rule)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Ambient glow */}
        <div style={{ position: 'absolute', top: 0, right: '10%', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(240,176,60,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* Back */}
        <button onClick={onBack} style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'var(--ink-muted)', fontFamily: 'var(--font-body)', fontWeight: 500,
          marginBottom: '2.5rem', padding: 0, transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-muted)'}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 7H2M7 12L2 7l5-5" /></svg>
          Back to Portfolio
        </button>

        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>Video Showcase</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(240,176,60,0.4), var(--rule))' }} />
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--ink)', marginBottom: '1rem' }}>
          Mechanics, learnings<br />
          <em style={{ color: 'var(--accent)', fontStyle: 'italic', textShadow: '0 0 50px rgba(240,176,60,0.3)' }}>& experiments.</em>
        </h1>

        <p style={{ fontSize: '1rem', color: 'var(--ink-light)', fontWeight: 300, lineHeight: 1.75, maxWidth: '540px', marginBottom: '2.5rem' }}>
          A collection of videos exploring game mechanics, design learnings, prototype demos, and devlog moments — things I've built, tested, and learned along the way.
        </p>

        {/* How to add hint */}
        {/* <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          padding: '0.7rem 1.2rem',
          background: 'rgba(240,176,60,0.05)', border: '1px solid rgba(240,176,60,0.15)',
          borderRadius: '5px', fontSize: '0.76rem', color: 'var(--ink-muted)',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
          <span>
            <strong style={{ color: 'var(--accent)' }}>Add a video:</strong>
            {' '}paste your YouTube URL and video ID into the <code style={{ background: 'rgba(255,255,255,0.05)', padding: '1px 6px', borderRadius: '3px', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--ink-light)' }}>videos</code> array in{' '}
            <code style={{ background: 'rgba(255,255,255,0.05)', padding: '1px 6px', borderRadius: '3px', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--ink-light)' }}>data.js</code>
          </span>
        </div> */}
      </div>

      {/* ── Filter pills ── */}
      {presentCategories.length > 1 && (
        <div style={{
          maxWidth: 'var(--max-w)', margin: '0 auto',
          padding: `2rem clamp(1.5rem, 5vw, 4rem) 0`,
          display: 'flex', gap: '0.5rem', flexWrap: 'wrap',
        }}>
          {presentCategories.map(cat => (
            <button key={cat} onClick={() => setActiveFilter(cat)} style={{
              background: activeFilter === cat ? 'var(--accent)' : 'transparent',
              color: activeFilter === cat ? '#08080e' : 'var(--ink-muted)',
              border: `1px solid ${activeFilter === cat ? 'var(--accent)' : 'var(--rule-hi)'}`,
              padding: '0.42rem 1.1rem', borderRadius: '3px',
              fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase',
              cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 600,
              transition: 'all 0.2s',
              boxShadow: activeFilter === cat ? '0 0 16px rgba(240,176,60,0.25)' : 'none',
            }}
              onMouseEnter={e => { if (activeFilter !== cat) { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; } }}
              onMouseLeave={e => { if (activeFilter !== cat) { e.currentTarget.style.borderColor = 'var(--rule-hi)'; e.currentTarget.style.color = 'var(--ink-muted)'; } }}
            >{cat}</button>
          ))}
        </div>
      )}

      {/* ── Video grid ── */}
      <div style={{ padding: `2.5rem clamp(1.5rem, 5vw, 4rem) 6rem`, maxWidth: 'var(--max-w)', margin: '0 auto' }}>

        {filtered.length === 0 ? (
          /* Empty state */
          <div style={{ textAlign: 'center', padding: '6rem 2rem', color: 'var(--ink-muted)' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--rule-hi)" strokeWidth="1.5" strokeLinecap="round" style={{ margin: '0 auto 1.5rem' }}>
              <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            <p style={{ fontSize: '1rem', fontWeight: 300 }}>No videos in this category yet.</p>
            <p style={{ fontSize: '0.82rem', marginTop: '0.5rem' }}>Add your YouTube links in <code style={{ fontFamily: 'var(--font-mono)', background: 'rgba(255,255,255,0.05)', padding: '1px 6px', borderRadius: '3px' }}>data.js</code></p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))', gap: '1.5rem' }}>
            {filtered.map((video, i) => (
              <VideoCard key={video.id} video={video} index={i} />
            ))}
          </div>
        )}

        {/* Explainer note */}
        <div style={{
          marginTop: '3rem', padding: '1.5rem 1.75rem',
          background: 'rgba(255,255,255,0.02)', border: '1px solid var(--rule-hi)',
          borderRadius: '6px', display: 'flex', alignItems: 'flex-start', gap: '1rem',
        }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: '8px', boxShadow: '0 0 8px var(--accent)' }} />
          <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', fontWeight: 300, lineHeight: 1.65 }}>
            All videos open directly on <strong style={{ color: 'var(--ink-light)', fontWeight: 500 }}>YouTube</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}