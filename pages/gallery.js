import Layout from '../components/Layout';
import { useState } from 'react';

const categories = ['All', 'Engagement', 'Pre-Wedding', 'Couple Portraits'];

// Placeholder gallery items
const items = [
  { cat: 'Engagement', label: 'Engagement — 01', emoji: '💍', color: '#1a6b4a' },
  { cat: 'Engagement', label: 'Engagement — 02', emoji: '🌹', color: '#2d8f63' },
  { cat: 'Engagement', label: 'Engagement — 03', emoji: '✨', color: '#124d35' },
  { cat: 'Pre-Wedding', label: 'Pre-Wedding — 01', emoji: '🌅', color: '#c9a84c' },
  { cat: 'Pre-Wedding', label: 'Pre-Wedding — 02', emoji: '🌿', color: '#a07c2d' },
  { cat: 'Pre-Wedding', label: 'Pre-Wedding — 03', emoji: '💫', color: '#e4c97e' },
  { cat: 'Pre-Wedding', label: 'Pre-Wedding — 04', emoji: '🕊️', color: '#c9a84c' },
  { cat: 'Couple Portraits', label: 'Portrait — 01', emoji: '👫', color: '#1a6b4a' },
  { cat: 'Couple Portraits', label: 'Portrait — 02', emoji: '💑', color: '#2d8f63' },
  { cat: 'Couple Portraits', label: 'Portrait — 03', emoji: '💞', color: '#c9a84c' },
  { cat: 'Couple Portraits', label: 'Portrait — 04', emoji: '🤝', color: '#124d35' },
  { cat: 'Engagement', label: 'Engagement — 04', emoji: '💒', color: '#a07c2d' },
];

export default function Gallery() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? items : items.filter(i => i.cat === active);

  return (
    <Layout title="Gallery | Lydia & Ndiana">
      {/* Hero */}
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-label">Captured Moments</div>
          <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 400 }}>
            Gallery
          </h1>
          <p>Beautiful memories from our journey together</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <div className="section-label">Our Moments</div>
            <h2 className="section-title">Photo Gallery</h2>
            <div className="section-divider">
              <span /><div className="diamond" /><span />
            </div>

            {/* Filter tabs */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '32px' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    padding: '9px 22px',
                    borderRadius: '50px',
                    border: active === cat ? 'none' : '1.5px solid var(--emerald)',
                    background: active === cat ? 'var(--emerald)' : 'transparent',
                    color: active === cat ? 'white' : 'var(--emerald)',
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                    letterSpacing: '0.3px',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry-style grid */}
          <div style={{
            columns: '3 260px',
            gap: '16px',
          }}>
            {filtered.map((item, i) => (
              <div key={i} style={{
                breakInside: 'avoid',
                marginBottom: '16px',
                borderRadius: '16px',
                overflow: 'hidden',
                background: item.color,
                aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '1/1' : '4/3',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: "'Cormorant Garamond', serif",
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                position: 'relative',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)'; }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '10px', opacity: 0.5 }}>{item.emoji}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.6 }}>{item.label}</div>
                {/* Replace with <Image> when real photos are added */}
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center', marginTop: '56px',
            padding: '32px',
            background: 'var(--emerald-muted)',
            borderRadius: '20px',
            border: '1px dashed rgba(26,107,74,0.3)',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📸</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: 'var(--emerald-dark)', marginBottom: '10px' }}>
              Wedding Photos Coming Soon
            </h3>
            <p style={{ color: 'var(--text-soft)', fontSize: '0.93rem', maxWidth: '440px', margin: '0 auto' }}>
              More beautiful photos will be added here before and after our special day. Stay tuned!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
