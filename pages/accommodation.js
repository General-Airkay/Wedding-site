import Layout from '../components/Layout';

const hotels = [
  { name: 'De Jewels Apartments', phone: '08038611586', icon: '🏡', note: 'Comfortable and cosy' },
  { name: 'Fhakes Hotel & Suites', phone: '09038930613', icon: '🏩', note: 'Suites available' },
  { name: 'De City Hotel & Resort', phone: '08080899091', icon: '🏙️', note: 'Resort facilities' },
  { name: 'Southwestern Hotel', phone: '08148808800', icon: '🌇', note: 'Central location' },
  { name: 'Q6 Hotel', phone: '08034569552', icon: '🏨', note: 'Budget friendly' },
];

export default function Accommodation() {
  return (
    <Layout title="Accommodation | Lydia & Ndiana">
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-label">Travelling In?</div>
          <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 400 }}>
            Accommodation
          </h1>
          <p>Nearby hotels for your convenience</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <div className="section-label">Nearby Hotels</div>
            <h2 className="section-title">Where to Stay</h2>
            <div className="section-divider">
              <span /><div className="diamond" /><span />
            </div>
            <p style={{
              maxWidth: '600px', margin: '0 auto',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-mid)',
            }}>
              If you'll be travelling in for our wedding, we truly appreciate you making the journey. Below are nearby hotels in Ado-Ekiti for your convenience.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto 48px' }}>
            {hotels.map((h) => (
              <div key={h.name} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '12px',
                  background: 'var(--emerald-muted)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', flexShrink: 0,
                }}>
                  {h.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.15rem', fontWeight: 600, color: 'var(--emerald-dark)', marginBottom: '4px',
                  }}>
                    {h.name}
                  </h4>
                  <div style={{ fontSize: '12px', color: 'var(--text-soft)', marginBottom: '10px' }}>{h.note}</div>
                  <a
                    href={`tel:${h.phone}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      color: 'var(--emerald)', fontWeight: 600, fontSize: '0.9rem',
                      textDecoration: 'none', fontFamily: "'Jost', sans-serif",
                    }}
                  >
                    📞 {h.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div style={{
            background: 'linear-gradient(135deg, var(--gold-pale), white)',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: '16px',
            padding: '28px 32px',
            maxWidth: '640px', margin: '0 auto',
            display: 'flex', gap: '16px', alignItems: 'flex-start',
          }}>
            <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>💡</span>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--gold-dark)', marginBottom: '6px', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}>
                Please Note
              </div>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.93rem', lineHeight: 1.7 }}>
                Kindly confirm amenities, availability, and rates directly with the hotels before booking. We recommend booking early as spots may fill up during the wedding period.
              </p>
            </div>
          </div>

          {/* Venue reminder */}
          <div style={{
            textAlign: 'center', marginTop: '56px',
            background: 'var(--emerald-dark)',
            borderRadius: '20px', padding: '36px 32px',
            maxWidth: '560px', margin: '56px auto 0',
          }}>
            <div style={{ fontSize: '1.6rem', marginBottom: '12px' }}>📍</div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.3rem', color: 'white', marginBottom: '10px',
            }}>
              Venue Reminder
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.93rem', lineHeight: 1.7 }}>
              RCCG Canaanland Parish<br />
              Behind Ajaleye Event Centre<br />
              Ado-Ekiti, Ekiti State, Nigeria<br /><br />
              <strong style={{ color: 'var(--gold-light)' }}>Saturday, 15th August 2026 at 10:30 AM</strong>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
