import Layout from '../components/Layout';

const vendors = [
  {
    category: 'Technology',
    items: [
      { name: 'Hi-Tech Surge', role: 'Website Developer', url: 'https://htsdigital.com', icon: '💻' },
    ],
  },
  {
    category: 'Fashion & Beauty',
    items: [
      { name: 'House of Mag', role: "Bride's Fashion Designer", url: '#', icon: '👗' },
      { name: 'Doshin Hair Studio', role: 'Hair Stylist', url: '#', icon: '💇‍♀️' },
    ],
  },
  {
    category: 'Events & Entertainment',
    items: [
      { name: 'Coming Soon', role: 'Event Planner', url: '#', icon: '🎪' },
      { name: 'Coming Soon', role: 'DJ', url: '#', icon: '🎧' },
      { name: 'Coming Soon', role: 'MC', url: '#', icon: '🎤' },
    ],
  },
  {
    category: 'Food & Cake',
    items: [
      { name: 'Merciescake', role: 'Cake', url: '#', icon: '🎂' },
      { name: 'Iya Ekiti Kitchen', role: 'Catering', url: '#', icon: '🍽️' },
    ],
  },
  {
    category: 'Photography & Décor',
    items: [
      { name: 'Coming Soon', role: 'Photographer', url: '#', icon: '📸' },
      { name: 'Coming Soon', role: 'Décor', url: '#', icon: '🌸' },
    ],
  },
];

export default function Vendors() {
  return (
    <Layout title="Our Vendors | Lydia & Ndiana">
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-label">The Dream Team</div>
          <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 400 }}>
            Our Vendors
          </h1>
          <p>The amazing creatives who make this day beautiful</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <div className="section-label">With Gratitude</div>
            <h2 className="section-title">Our Creative Team</h2>
            <div className="section-divider">
              <span /><div className="diamond" /><span />
            </div>
            <p style={{
              maxWidth: '560px', margin: '0 auto',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-mid)',
            }}>
              The day is made beautiful by many amazing creatives. We are deeply grateful for each one of them.
            </p>
          </div>

          {vendors.map((group) => (
            <div key={group.category} style={{ marginBottom: '48px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px',
              }}>
                <div style={{ height: '1px', flex: 1, background: 'var(--border)' }} />
                <div className="section-label" style={{ margin: 0, whiteSpace: 'nowrap' }}>
                  {group.category}
                </div>
                <div style={{ height: '1px', flex: 1, background: 'var(--border)' }} />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '16px',
              }}>
                {group.items.map((v) => (
                  <a
                    key={v.role}
                    href={v.url}
                    target={v.url !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="card" style={{
                      display: 'flex', gap: '14px', alignItems: 'center',
                      transition: 'all 0.25s',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--emerald)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    >
                      <div style={{
                        width: '48px', height: '48px', borderRadius: '12px',
                        background: 'var(--emerald-muted)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.4rem', flexShrink: 0,
                      }}>
                        {v.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '2px', fontFamily: "'Jost', sans-serif" }}>
                          {v.role}
                        </div>
                        <div style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: '1.05rem', fontWeight: 600,
                          color: v.url !== '#' ? 'var(--emerald)' : 'var(--text-mid)',
                        }}>
                          {v.name}
                        </div>
                        {v.url !== '#' && (
                          <div style={{ fontSize: '11px', color: 'var(--gold)', marginTop: '2px' }}>
                            Visit website →
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Credits note */}
          <div style={{
            textAlign: 'center', marginTop: '48px',
            padding: '28px 32px',
            background: 'var(--gold-pale)',
            borderRadius: '16px',
            border: '1px solid rgba(201,168,76,0.25)',
            maxWidth: '560px', margin: '48px auto 0',
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-mid)',
            }}>
              "Every vendor listed here has been carefully chosen with love. We are grateful for their talents, dedication, and the beauty they bring to our special day."
            </p>
            <div style={{
              marginTop: '12px', fontFamily: "'Great Vibes', cursive",
              fontSize: '1.4rem', color: 'var(--gold-dark)',
            }}>
              — Lydia & Ndiana
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
