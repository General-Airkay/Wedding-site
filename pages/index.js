import Layout from '../components/Layout';
import Countdown from '../components/Countdown';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout title="Lydia & Ndiana | #DivineChoice2026">
      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/photos/hero.jpg"
            alt="Wedding background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(160deg, rgba(18,77,53,0.85) 0%, rgba(26,107,74,0.75) 50%, rgba(30,122,84,0.8) 100%)',
          }} />
        </div>

        {/* Pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a84c' fill-opacity='0.06' fill-rule='evenodd'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3Ccircle cx='0' cy='0' r='2'/%3E%3Ccircle cx='80' cy='0' r='2'/%3E%3Ccircle cx='0' cy='80' r='2'/%3E%3Ccircle cx='80' cy='80' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="fade-up-delay-1" style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px', fontWeight: 600, letterSpacing: '4px',
            textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '24px',
          }}>
            ✦ Together in Love & Faith ✦
          </div>

          <h1 className="fade-up-delay-2" style={{
            fontFamily: "'Mr Dafoe', cursive",
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            color: 'white', fontWeight: 400, lineHeight: 1.1,
            textShadow: '0 4px 32px rgba(0,0,0,0.2)',
          }}>
            Lydia & Ndiana
          </h1>

          <div className="fade-up-delay-2" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            color: 'var(--gold-light)', fontStyle: 'italic',
            fontWeight: 300, letterSpacing: '2px', margin: '12px 0 32px',
          }}>
            #DivineChoice2026
          </div>

          <div className="fade-up-delay-3" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '16px', marginBottom: '48px',
          }}>
            <div style={{ height: '1px', width: '48px', background: 'rgba(201,168,76,0.5)' }} />
            <span style={{
              fontFamily: "'Jost', sans-serif", fontSize: '14px',
              fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)',
            }}>
              15th August 2026 · 10:30 AM
            </span>
            <div style={{ height: '1px', width: '48px', background: 'rgba(201,168,76,0.5)' }} />
          </div>

          <div className="fade-up-delay-3" style={{ marginBottom: '48px' }}>
            <Countdown dark />
          </div>

          <div className="fade-up-delay-4" style={{
            display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center',
          }}>
            <Link href="/wedding-details" className="btn btn-gold">View Wedding Details</Link>
            <Link href="/rsvp" className="btn btn-outline-white">RSVP Now</Link>
            <Link href="/gifts" className="btn" style={{
              background: 'rgba(255,255,255,0.12)', color: 'white',
              border: '1.5px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)',
            }}>💝 Send a Gift</Link>
          </div>
        </div>

      </section>

      {/* ── WELCOME MESSAGE ── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container text-center">
          <div className="section-label">With Joy & Gratitude</div>
          <h2 className="section-title">You're Invited</h2>
          <div className="section-divider"><span /><div className="diamond" /><span /></div>
          <p style={{
            maxWidth: '680px', margin: '0 auto 40px',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
            fontWeight: 400, color: 'var(--text-mid)', lineHeight: 1.8, fontStyle: 'italic',
          }}>
            "Together with their families, Lydia & Ndiana joyfully invite you to celebrate their union as they begin a beautiful journey rooted in love, faith, and purpose."
          </p>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', margin: '48px 0' }}>
            {[
              { icon: '🕊️', label: 'Ceremony', value: 'RCCG Canaanland Parish', sub: 'Ado-Ekiti, Ekiti State' },
              { icon: '📅', label: 'Date', value: '15th August 2026', sub: 'Saturday, 10:30 AM' },
              { icon: '👗', label: 'Colour Palette', value: 'Emerald Green, Gold & White', sub: 'Look beautiful with us' },
            ].map(({ icon, label, value, sub }) => (
              <div key={label} className="card" style={{ flex: '1 1 220px', maxWidth: '280px', textAlign: 'center', padding: '32px 24px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{icon}</div>
                <div className="section-label" style={{ marginBottom: '6px' }}>{label}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 600, color: 'var(--emerald-dark)' }}>{value}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-soft)', marginTop: '4px' }}>{sub}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/our-story" className="btn btn-outline">Our Love Story</Link>
            <Link href="/rsvp" className="btn btn-primary">RSVP Now</Link>
          </div>
        </div>
      </section>

      {/* ── OUR STORY TEASER ── */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--emerald-muted) 0%, var(--gold-pale) 100%)' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px', alignItems: 'center',
          }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(26,107,74,0.25)', position: 'relative',
              }}>
                {/* REPLACE: swap this src with your real couple photo */}
                <Image
                  src="/photos/NYSC.jpg"
                  alt="Lydia and Ndiana"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{
                position: 'absolute', bottom: '-16px', right: '-16px',
                background: 'var(--gold)', color: 'white', borderRadius: '12px',
                padding: '12px 20px', fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.3rem', boxShadow: '0 8px 24px rgba(201,168,76,0.4)',
              }}>
                Since NYSC '21/'22
              </div>
            </div>

            <div>
              <div className="section-label">Our Love Story</div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400,
                color: 'var(--emerald-dark)', marginBottom: '20px',
              }}>
                Written by God,<br />Lived by Us
              </h2>
              <p style={{ color: 'var(--text-mid)', marginBottom: '16px', lineHeight: 1.8 }}>
                Our meeting was truly divine. We first met during our NYSC year in Kogi State through a writing community — a divine connection only God could inspire.
              </p>
              <p style={{ color: 'var(--text-mid)', marginBottom: '32px', lineHeight: 1.8 }}>
                After NYSC, we went separate ways but God had other plans. A reconnection at RCCG Youth Convention at Redemption City was the beginning of something beautiful.
              </p>
              <Link href="/our-story" className="btn btn-primary">Read Our Full Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK ACTIONS ── */}
      <section className="section-sm" style={{ background: 'var(--emerald-dark)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { href: '/rsvp', icon: '✉️', label: 'Confirm Attendance', desc: "Let us know you'll be there" },
              { href: '/gifts', icon: '🎁', label: 'Send a Gift', desc: 'Bless the couple' },
              { href: '/accommodation', icon: '🏨', label: 'Accommodation', desc: 'Hotels near the venue' },
              { href: '/gallery', icon: '📷', label: 'Gallery', desc: 'Photos of the couple' },
            ].map(({ href, icon, label, desc }) => (
              <Link key={href} href={href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: '16px', padding: '28px 20px', textAlign: 'center', transition: 'all 0.3s', cursor: 'pointer',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.12)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                >
                  <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{icon}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', fontWeight: 600, color: 'white', marginBottom: '6px' }}>{label}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
