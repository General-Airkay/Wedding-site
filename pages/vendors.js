import Layout from '../components/Layout';

const vendors = [
  {
    category: 'Technology',
    items: [
      {
        name: 'Hi-Tech Surge',
        role: 'Website Developer',
        icon: '💻',
        website: 'https://myweddingwebsite.vercel.app/',
        phone: '2348106743894',
      },
    ],
  },
  {
    category: 'Fashion & Style',
    items: [
      {
        name: 'House of Mag',
        role: "Bride's Fashion Designer",
        icon: '👗',
        phone: '2347062305780',
      },
      {
        name: 'Phalade's Couture',
        role: "Groom's Fashion Designer",
        icon: '🤵',
        phone: '2349068594998',
      },
      {
        name: 'Maetidon Fashion',
        role: 'Featured Fashion Designer',
        icon: '✂️',
        website: 'https://drive.google.com/drive/folders/1VvrKOYCP03DQBCewle6W8kxUeulK8OLO',
        phone: '2348064066418',
      },
    ],
  },
  {
    category: 'Beauty',
    items: [
      {
        name: 'Doshin Hair Studio',
        role: 'Hair Stylist',
        icon: '💇‍♀️',
        phone: '2347064905561',
      },
      {
        name: 'Dollface Beauty',
        role: 'Make-up & Gele Artist',
        icon: '💄',
        phone: '2347068261012',
      },
    ],
  },
  {
    category: 'Events & Entertainment',
    items: [
      {
        name: 'Priscy_events',
        role: 'Event Planner',
        icon: '🎪',
        phone: '2349034824025',
      },
      {
        name: 'DJ Bammex',
        role: 'DJ',
        icon: '🎧',
        phone: '2347033976813',
      },
      {
        name: 'Churchboytunms',
        role: 'MC',
        icon: '🎤',
        phone: '2348069918534',
      },
      {
        name: 'Alaga Ijoko',
        role: 'Alaga (Traditional MC)',
        icon: '🪘',
        phone: '2349082796215',
      },
    ],
  },
  {
    category: 'Food & Cake',
    items: [
      {
        name: 'Mercie_bakes',
        role: 'Cake',
        icon: '🎂',
        phone: '2349032700420',
      },
      {
        name: 'Iya Ekiti Kitchen',
        role: 'Catering',
        icon: '🍽️',
        phone: '2349023769861',
      },
    ],
  },
  {
    category: 'Photography & Coverage',
    items: [
      {
        name: 'Olans Photography',
        role: 'Wedding Coverage',
        icon: '📸',
        phone: '2349033995550',
      },
      {
        name: 'S.G.M Media',
        role: 'Pre-Wedding Shoot',
        icon: '🎬',
        phone: '2347041803470',
      },
    ],
  },
  {
    category: 'Décor',
    items: [
      {
        name: 'Aunty Kemi',
        role: 'Décor',
        icon: '🌸',
        phone: '2348039230298',
      },
    ],
  },
  {
    category: 'Print & Design',
    items: [
      {
        name: 'Toniloba Wole-Bodunde',
        role: 'Invitation Card Design',
        icon: '✉️',
        phone: '2348113823098',
      },
      {
        name: 'Infinite Media & Prints',
        role: 'Printer',
        icon: '🖨️',
        phone: '2349030268655',
      },
    ],
  },
];

function VendorCard({ vendor }) {
  const waMessage = encodeURIComponent(`Hello, I got your contact from Lydia & Ndiana's wedding website. I'd like to make an enquiry.`);
  const waLink = `https://wa.me/${vendor.phone}?text=${waMessage}`;

  return (
    <div className="card" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0',
      transition: 'all 0.25s',
      padding: '24px',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = ''; }}
    >
      {/* Top row: icon + name/role */}
      <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div style={{
          width: '48px', height: '48px', borderRadius: '12px',
          background: 'var(--emerald-muted)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem', flexShrink: 0,
        }}>
          {vendor.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px',
            textTransform: 'uppercase', color: 'var(--text-soft)',
            marginBottom: '3px', fontFamily: "'Jost', sans-serif",
          }}>
            {vendor.role}
          </div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.1rem', fontWeight: 600,
            color: 'var(--emerald-dark)',
            lineHeight: 1.2,
          }}>
            {vendor.name}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {/* Website button — only if website exists */}
        {vendor.website && (
          <a
            href={vendor.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              padding: '8px 14px',
              borderRadius: '50px',
              background: 'var(--emerald-muted)',
              color: 'var(--gold-dark)',
              border: '1.5px solid var(--gold-dark)',
              fontFamily: "'Jost', sans-serif",
              fontSize: '12px', fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--emerald)'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--emerald-muted)'; e.currentTarget.style.color = 'var(--emerald)'; }}
          >
            🌐 Visit Website
          </a>
        )}

        {/* WhatsApp button — always shown */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            padding: '8px 14px',
            borderRadius: '50px',
            background: '#e8faf0',
            color: '#128C7E',
            border: '1.5px solid rgb(37, 211, 102)',
            fontFamily: "'Jost', sans-serif",
            fontSize: '12px', fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = '#25D366'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#e8faf0'; e.currentTarget.style.color = '#128C7E'; e.currentTarget.style.borderColor = 'rgb(37, 211, 102)'; }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}

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
            <div key={group.category} style={{ marginBottom: '52px' }}>
              {/* Category divider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ height: '1px', flex: 1, background: 'var(--border)' }} />
                <div className="section-label" style={{ margin: 0, whiteSpace: 'nowrap' }}>
                  {group.category}
                </div>
                <div style={{ height: '1px', flex: 1, background: 'var(--border)' }} />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '16px',
              }}>
                {group.items.map((v) => <VendorCard key={v.role} vendor={v} />)}
              </div>
            </div>
          ))}

          {/* Credits note */}
          <div style={{
            textAlign: 'center', marginTop: '48px',
            padding: '32px',
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
