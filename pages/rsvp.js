import Layout from '../components/Layout';

export default function RSVP() {
  return (
    <Layout title="RSVP | Lydia & Ndiana">
      {/* Hero */}
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-label">You're Invited</div>
          <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 400 }}>
            RSVP
          </h1>
          <p>Please confirm your attendance by August 1st, 2026</p>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <div className="section-label">Your Presence Matters</div>
            <h2 className="section-title">Confirm Attendance</h2>
            <div className="section-divider">
              <span /><div className="diamond" /><span />
            </div>
            <p style={{
              maxWidth: '580px', margin: '0 auto',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--text-mid)',
            }}>
              We would be honored by your presence as we celebrate our union. Kindly RSVP below to help us plan better.
            </p>
          </div>

          <div style={{
            maxWidth: '720px', margin: '0 auto',
            background: 'white',
            borderRadius: '24px',
            boxShadow: 'var(--shadow-card)',
            border: '1px solid var(--border)',
            overflow: 'hidden',
            minHeight: '500px',
          }}>
            <iframe
              src="https://tally.so/embed/vGKOyg?hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="RSVP Form"
              style={{ display: 'block', border: 'none', minHeight: '500px' }}
            />
          </div>

          {/* After-submit note */}
          <div style={{
            textAlign: 'center', marginTop: '32px',
            background: 'var(--emerald-muted)',
            borderRadius: '16px', padding: '24px 32px', maxWidth: '560px', margin: '32px auto 0',
            border: '1px solid rgba(26,107,74,0.15)',
          }}>
            <div style={{ fontSize: '1.6rem', marginBottom: '8px' }}>🎉</div>
            <p style={{ color: 'var(--text-mid)', fontSize: '0.93rem' }}>
              🎉 Thank you for confirming. We look forward to celebrating with you on 15th August 2026! 💚
            </p>
          </div>
        </div>
      </section>

      {/* Helpful notes */}
      <section className="section-sm" style={{ background: 'var(--gold-pale)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
            {[
              { icon: '⏰', title: 'Arrive Early', text: 'Please arrive 30–45 minutes before 10:30 AM to be seated comfortably.' },
              { icon: '👗', title: 'Dress Code', text: 'Emerald Green, Champagne Gold, or White. Smart formal or Nigerian traditional attire.' },
              { icon: '📸', title: 'Share the Love', text: 'Use the hashtag #Divine'sChoice'26 on social media when sharing photos.' },
            ].map(({ icon, title, text }) => (
              <div key={title} style={{
                background: 'white', borderRadius: '16px', padding: '24px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                border: '1px solid var(--border)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '10px' }}>{icon}</div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.1rem', fontWeight: 600, color: 'var(--emerald-dark)', marginBottom: '8px',
                }}>{title}</div>
                <p style={{ color: 'var(--text-soft)', fontSize: '0.88rem', lineHeight: 1.6 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
