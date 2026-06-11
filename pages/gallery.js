import Layout from '../components/Layout';
import { useState } from 'react';
import Image from 'next/image';

const categories = ['All', 'Engagement', 'Pre-Wedding', 'Couple Together'];

// REPLACE: swap each src with your real photos.
// Seeds are used for consistent dummy images — just change the src to a real path like "/gallery/photo1.jpg"
const items = [
  { cat: 'Engagement',       src: '/photos/Couple1.jpg',   caption: 'Courtship — 01' },
  { cat: 'Engagement',       src: '/photos/Couple3.jpg',   caption: 'Courtship — 02' },
  { cat: 'Pre-Wedding',      src: '/photos/Couple2.jpg',   caption: 'Pre-Wedding — 02' },
  { cat: 'Pre-Wedding',      src: 'https://picsum.photos/seed/pre3/600/700',   caption: 'Pre-Wedding — 03' },
  { cat: 'Couple Together', src: '/photos/Couple5.jpg',  caption: 'Together — 02' },
  { cat: 'Couple Together', src: '/photos/Couple6.jpg',  caption: 'Together — 03' },
  { cat: 'Couple Together', src: '/photos/Couple7.jpg',  caption: 'Together — 04' },
];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? items : items.filter(i => i.cat === active);

  return (
    <Layout title="Gallery | Lydia & Ndiana">
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-label">Captured Moments</div>
          <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 400 }}>Gallery</h1>
          <p>Beautiful memories from our journey together</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <div className="section-label">Our Moments</div>
            <h2 className="section-title">Photo Gallery</h2>
            <div className="section-divider"><span /><div className="diamond" /><span /></div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '32px' }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setActive(cat)} style={{
                  padding: '9px 22px', borderRadius: '50px',
                  border: active === cat ? 'none' : '1.5px solid var(--emerald)',
                  background: active === cat ? 'var(--emerald)' : 'transparent',
                  color: active === cat ? 'white' : 'var(--emerald)',
                  fontFamily: "'Jost', sans-serif", fontSize: '13px', fontWeight: 500,
                  cursor: 'pointer', transition: 'all 0.25s',
                }}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry grid */}
          <div style={{ columns: '3 260px', gap: '16px' }}>
            {filtered.map((item, i) => (
              <div key={i} style={{
                breakInside: 'avoid', marginBottom: '16px',
                borderRadius: '16px', overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)'; }}
              >
                <div style={{ paddingBottom: i % 3 === 0 ? '125%' : i % 3 === 1 ? '100%' : '80%', position: 'relative' }}>
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(to top, rgba(18,77,53,0.75), transparent)',
                    padding: '24px 14px 14px',
                    opacity: 0, transition: 'opacity 0.3s',
                  }} className="gallery-caption">
                    <div style={{ color: 'white', fontSize: '13px', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
                      {item.caption}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center', marginTop: '56px', padding: '32px',
            background: 'var(--emerald-muted)', borderRadius: '20px',
            border: '1px dashed rgba(26,107,74,0.3)',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📸</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: 'var(--emerald-dark)', marginBottom: '10px' }}>
              Other Photos Coming Soon
            </h3>
            <p style={{ color: 'var(--text-soft)', fontSize: '0.93rem', maxWidth: '440px', margin: '0 auto' }}>
              More beautiful photos will be added here before and after our special day. Stay tuned!
            </p>
          </div>
        </div>
      </section>

      <style>{`
        div:hover .gallery-caption { opacity: 1 !important; }
      `}</style>
    </Layout>
  );
}
