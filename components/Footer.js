import Link from 'next/link';

export default function Footer() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/our-story', label: 'Our Story' },
    { href: '/wedding-details', label: 'Wedding Details' },
    { href: '/rsvp', label: 'RSVP' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/gifts', label: 'Gifts' },
    { href: '/accommodation', label: 'Accommodation' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
    { href: '/vendors', label: 'Our Vendors' },
  ];

  return (
    <footer style={{
      background: 'linear-gradient(180deg, var(--emerald-dark) 0%, #0d3d24 100%)',
      color: 'white',
      padding: '72px 0 0',
    }}>
      <div className="container">
        {/* Top */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: '3rem',
            color: 'var(--gold-light)',
            marginBottom: '8px',
          }}>
            Lydia & Ndiana
          </div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.6)',
            fontStyle: 'italic',
            letterSpacing: '1px',
          }}>
            Divine's Choice '26 - 15th August 2026
          </div>
        </div>

        {/* Nav links */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          gap: '8px 20px', marginBottom: '48px',
        }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.5px',
              transition: 'color 0.2s',
              fontFamily: "'Jost', sans-serif",
            }}
            onMouseEnter={e => e.target.style.color = 'var(--gold-light)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div style={{
          borderTop: '1px solid rgba(201,168,76,0.2)',
          padding: '24px 0',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6px',
          textAlign: 'center',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', fontFamily: "'Jost', sans-serif" }}>
            Website designed with ❤️ by
          </span>
          <a
            href="https://htsdigital.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--gold-light)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '13px',
              fontFamily: "'Jost', sans-serif",
            }}
          >
            Hi-Tech Surge
          </a>
        </div>
      </div>
    </footer>
  );
}
