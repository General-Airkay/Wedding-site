import Layout from '../components/Layout';
import Link from 'next/link';
import Countdown from '../components/Countdown';

const ColorSwatch = ({ color, label }) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{
      width: '72px', height: '72px', borderRadius: '50%',
      background: color,
      margin: '0 auto 10px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
      border: '3px solid white',
    }} />
    <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-soft)', fontFamily: "'Jost', sans-serif" }}>
      {label}
    </div>
  </div>
);

export default function WeddingDetails() {
  return (
    <Layout title="Wedding Details | Lydia & Ndiana">
      {/* Hero */}
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-label">All the Details</div>
          <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 400 }}>
            Wedding Details
          </h1>
          <p>White Wedding · 15th August 2026</p>
        </div>
      </section>

      {/* Countdown reminder */}
      <section style={{
        background: 'var(--gold-pale)',
        padding: '48px 24px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
      }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: '24px' }}>Counting Down</div>
          <Countdown />
        </div>
      </section>

      {/* Ceremony Details */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <div className="section-label">The Ceremony</div>
            <h2 className="section-title">White Wedding</h2>
            <div className="section-divider">
              <span /><div className="diamond" /><span />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            {[
              { icon: '📅', title: 'Date', lines: ['Saturday', '15th August 2026'] },
              { icon: '🕐', title: 'Time', lines: ['Ceremony begins at', '10:30 AM'] },
              { icon: '📍', title: 'Venue', lines: ['RCCG Canaanland Parish', 'Behind Ajaleye Event Centre', 'Ado-Ekiti, Ekiti State, Nigeria'] },
              { icon: '🥂', title: 'Reception', lines: ['Details will be', 'announced at the venue'] },
            ].map(({ icon, title, lines }) => (
              <div key={title} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{icon}</div>
                <div className="section-label" style={{ marginBottom: '8px' }}>{title}</div>
                {lines.map((l, i) => (
                  <div key={i} style={{
                    fontFamily: i === lines.length - 1 ? "'Cormorant Garamond', serif" : "'Jost', sans-serif",
                    fontSize: i === lines.length - 1 ? '1.15rem' : '0.88rem',
                    fontWeight: i === lines.length - 1 ? 600 : 400,
                    color: i === lines.length - 1 ? 'var(--emerald-dark)' : 'var(--text-soft)',
                    lineHeight: 1.5,
                  }}>
                    {l}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Important note */}
          <div style={{
            background: 'linear-gradient(135deg, var(--emerald-muted), white)',
            border: '1px solid rgba(26,107,74,0.15)',
            borderRadius: '16px',
            padding: '28px 32px',
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start',
            maxWidth: '680px',
            margin: '0 auto',
          }}>
            <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>📣</span>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--emerald-dark)', marginBottom: '6px', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem' }}>
                Reception Announcement
              </div>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.93rem', lineHeight: 1.7 }}>
                Reception details will be announced at the venue on the wedding day. Please ensure you arrive at the church on time so you don't miss any announcements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps placeholder */}
      <section className="section-sm" style={{ background: 'white' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '36px' }}>
            <div className="section-label">Find Us</div>
            <h2 className="section-title">Venue Location</h2>
            <div className="section-divider">
              <span /><div className="diamond" /><span />
            </div>
          </div>

          {/* Map embed */}
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
            border: '1px solid var(--border)',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.8!2d5.2238!3d7.6278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzcnNDAuMSJOIDXCsDEzJzI1LjciRQ!5e0!3m2!1sen!2sng!4v1690000000000!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RCCG Canaanland Parish, Ado-Ekiti"
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <a
              href="https://maps.google.com/?q=RCCG+Canaanland+Parish+Ado-Ekiti+Ekiti+State+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: 'inline-flex' }}
            >
              📍 Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, var(--emerald-muted), var(--gold-pale))',
      }}>
        <div className="container text-center">
          <div className="section-label">Look Beautiful With Us</div>
          <h2 className="section-title">Colour Palette</h2>
          <div className="section-divider">
            <span /><div className="diamond" /><span />
          </div>

          <p style={{
            maxWidth: '560px', margin: '0 auto 48px',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-mid)',
          }}>
            Help us paint a beautiful picture with your outfit. Kindly dress in our wedding colors.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            <ColorSwatch color="#1a6b4a" label="Emerald Green" />
            <ColorSwatch color="#c9a84c" label="Champagne Gold" />
            <ColorSwatch color="#ffffff" label="White" />
          </div>

          <div className="card" style={{ maxWidth: '560px', margin: '48px auto 0', textAlign: 'left' }}>
            <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: 'var(--emerald-dark)', marginBottom: '16px' }}>
              Dress Code Guidelines
            </h4>
            {[
              'Wear Emerald Green, Champagne Gold, or White',
              'Smart formal or traditional Nigerian attire is acceptable',
              'Ladies may mix the colors in their outfit',
              'Please avoid black or red as primary colors',
              'Look sharp — we love beautiful photos! 📸',
            ].map((tip, i) => (
              <div key={i} style={{
                display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start',
              }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }}>✦</span>
                <span style={{ color: 'var(--text-mid)', fontSize: '0.93rem' }}>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: 'var(--emerald-dark)', textAlign: 'center' }}>
        <div className="container">
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontStyle: 'italic',
            color: 'rgba(255,255,255,0.85)', marginBottom: '28px', maxWidth: '500px', margin: '0 auto 28px',
          }}>
            We can't wait to see you there!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/rsvp" className="btn btn-gold">Confirm Attendance</Link>
            <Link href="/accommodation" className="btn btn-outline-white">Find Accommodation</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
