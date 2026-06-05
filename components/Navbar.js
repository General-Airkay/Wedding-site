import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

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
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.4s ease',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '88px',
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <span style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: '2rem',
              color: scrolled ? 'var(--emerald)' : 'white',
              transition: 'color 0.4s',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap',
            }}>
              Lydia & Ndiana
            </span>
          </Link>

          {/* Desktop nav */}
          <ul style={{
            display: 'flex',
            gap: '2px',
            listStyle: 'none',
            alignItems: 'center',
            flexWrap: 'nowrap',
            margin: '0',
            padding: '0',
          }} className="desktop-nav">
            {links.map((l) => (
              <li key={l.href} style={{ flexShrink: 0 }}>
                <Link href={l.href} style={{
                  textDecoration: 'none',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '12.5px',
                  fontWeight: 500,
                  letterSpacing: '0.2px',
                  color: scrolled
                    ? (router.pathname === l.href ? 'var(--emerald)' : 'var(--text-mid)')
                    : 'rgba(255,255,255,0.88)',
                  padding: '8px 9px',
                  borderRadius: '6px',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                  borderBottom: router.pathname === l.href ? '2px solid var(--gold)' : '2px solid transparent',
                }}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li style={{ flexShrink: 0, marginLeft: '10px' }}>
              <Link href="/rsvp" className="btn btn-primary" style={{
                padding: '10px 20px',
                fontSize: '13px',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
              }}>
                RSVP Now
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'none', flexDirection: 'column', gap: '5px', padding: '8px',
              flexShrink: 0,
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '24px', height: '2px',
                background: scrolled ? 'var(--emerald-dark)' : 'white',
                borderRadius: '2px',
                transition: 'all 0.3s',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 88, left: 0, right: 0, bottom: 0,
          background: 'rgba(18, 77, 53, 0.97)',
          zIndex: 999,
          overflowY: 'auto',
          display: 'flex', flexDirection: 'column',
          padding: '32px 24px',
          gap: '4px',
          animation: 'fadeIn 0.25s ease',
        }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{
              textDecoration: 'none',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.6rem',
              fontWeight: 400,
              color: router.pathname === l.href ? 'var(--gold-light)' : 'rgba(255,255,255,0.9)',
              padding: '14px 0',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              transition: 'color 0.2s',
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/rsvp" className="btn btn-gold" style={{ marginTop: '24px', justifyContent: 'center' }}>
            RSVP Now
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
