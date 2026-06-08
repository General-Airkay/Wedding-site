import Layout from '../components/Layout';

const contacts = [
  { name: 'Mandu', phone: '08064066418', wa: '2348064066418' },
  { name: 'Priscilla', phone: '09034824025', wa: '2349034824025' },
  { name: 'Oluwatosin', phone: '09066517519', wa: '2349066517519' },
];

export default function Contact() {
  return (
    <Layout title="Contact | Lydia & Ndiana">
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-label">Get in Touch</div>
          <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 400 }}>
            Contact Us
          </h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <div className="section-label">Reach Out</div>
            <h2 className="section-title">Contact & Enquiries</h2>
            <div className="section-divider">
              <span /><div className="diamond" /><span />
            </div>
            <p style={{
              maxWidth: '540px', margin: '0 auto',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-mid)',
            }}>
              For inquiries, please reach out to any of the contacts below. We're happy to assist!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto 64px' }}>
            {contacts.map((c) => (
              <div key={c.name} className="card" style={{ textAlign: 'center' }}>
                {/* Avatar */}
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--emerald-light), var(--emerald-dark))',
                  margin: '0 auto 16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.8rem',
                  border: '3px solid var(--gold)',
                }}>
                  👤
                </div>

                <div className="section-label" style={{ marginBottom: '4px' }}>{c.role}</div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.5rem', fontWeight: 600, color: 'var(--emerald-dark)', marginBottom: '8px',
                }}>
                  {c.name}
                </h3>

                <a href={`tel:${c.phone}`} style={{
                  display: 'block', color: 'var(--text-soft)', textDecoration: 'none',
                  fontSize: '0.93rem', marginBottom: '20px', fontFamily: "'Jost', sans-serif",
                }}>
                  📞 {c.phone}
                </a>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${c.wa}?text=Hello%2C%20I%20have%20an%20enquiry%20about%20Lydia%20%26%20Ndiana's%20wedding.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: '#25D366',
                    color: 'white',
                    padding: '11px 24px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '14px', fontWeight: 600,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#1ead51'}
                  onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            ))}
          </div>

          {/* General enquiry note */}
          <div style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--emerald-dark), var(--emerald))',
            borderRadius: '20px', padding: '40px 32px',
            maxWidth: '560px', margin: '0 auto',
          }}>
            <div style={{ fontSize: '1.6rem', marginBottom: '12px' }}>💌</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: 'white', marginBottom: '12px' }}>
              Send Your Love
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.93rem', lineHeight: 1.7 }}>
              We are so grateful for every message, prayer, and word of blessing. Don't hesitate to reach out — our hearts and phones are always open!
            </p>
            <div style={{
              marginTop: '16px',
              fontFamily: "'Great Vibes', cursive",
              fontSize: '1.8rem',
              color: 'var(--gold-light)',
            }}>
              Lydia & Ndiana
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
