import Layout from '../components/Layout';
import { useState } from 'react';

const accounts = [
  {
    bank: 'Zenith Bank',
    name: 'Oluwadunsin Ladina Adara',
    number: '789667288',
    color: '#1a6b4a',
    logo: '🏦',
  },
  {
    bank: 'Hush Bank',
    name: 'Close Akpekong',
    number: '3686889278',
    color: '#c9a84c',
    logo: '🏛️',
  },
];

function AccountCard({ account }) {
  const [copied, setCopied] = useState(null);

  const copy = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(field);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div className="card" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Top accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '5px',
        background: account.color,
      }} />

      <div style={{ fontSize: '2.4rem', marginBottom: '12px', marginTop: '8px' }}>{account.logo}</div>
      <div className="section-label" style={{ marginBottom: '4px' }}>Bank</div>
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.5rem', fontWeight: 600, color: 'var(--emerald-dark)', marginBottom: '20px',
      }}>
        {account.bank}
      </h3>

      {/* Account Name */}
      <div style={{
        background: 'var(--emerald-muted)',
        borderRadius: '10px', padding: '12px 16px', marginBottom: '12px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px',
      }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '2px' }}>Account Name</div>
          <div style={{ fontWeight: 600, color: 'var(--text-dark)', fontSize: '0.93rem' }}>{account.name}</div>
        </div>
        <button onClick={() => copy(account.name, 'name')} style={{
          background: copied === 'name' ? 'var(--emerald)' : 'white',
          color: copied === 'name' ? 'white' : 'var(--emerald)',
          border: '1.5px solid var(--emerald)',
          borderRadius: '8px', padding: '6px 12px',
          fontSize: '12px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
          flexShrink: 0,
          fontFamily: "'Jost', sans-serif",
        }}>
          {copied === 'name' ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      {/* Account Number */}
      <div style={{
        background: 'var(--gold-pale)',
        borderRadius: '10px', padding: '12px 16px', marginBottom: '20px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px',
      }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '2px' }}>Account Number</div>
          <div style={{
            fontFamily: 'monospace', fontWeight: 700, fontSize: '1.15rem',
            color: 'var(--text-dark)', letterSpacing: '2px',
          }}>{account.number}</div>
        </div>
        <button onClick={() => copy(account.number, 'number')} style={{
          background: copied === 'number' ? 'var(--gold)' : 'white',
          color: copied === 'number' ? 'white' : 'var(--gold-dark)',
          border: '1.5px solid var(--gold)',
          borderRadius: '8px', padding: '6px 12px',
          fontSize: '12px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
          flexShrink: 0,
          fontFamily: "'Jost', sans-serif",
        }}>
          {copied === 'number' ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      {/* Copy All */}
      <button
        onClick={() => copy(`${account.bank}\nAccount Name: ${account.name}\nAccount Number: ${account.number}`, 'all')}
        style={{
          width: '100%',
          padding: '12px',
          background: account.color,
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontFamily: "'Jost', sans-serif",
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'opacity 0.2s',
          letterSpacing: '0.5px',
        }}
        onMouseEnter={e => e.target.style.opacity = '0.9'}
        onMouseLeave={e => e.target.style.opacity = '1'}
      >
        {copied === 'all' ? '✓ All Details Copied!' : '📋 Copy All Details'}
      </button>
    </div>
  );
}

export default function Gifts() {
  return (
    <Layout title="Gifts & Donations | Lydia & Ndiana">
      {/* Hero */}
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-label">With Love & Gratitude</div>
          <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 400 }}>
            Gifts & Donations
          </h1>
          <p>Your love, prayer, and support mean the world to us</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <div className="section-label">From Our Hearts</div>
            <h2 className="section-title">Bless the Couple</h2>
            <div className="section-divider">
              <span /><div className="diamond" /><span />
            </div>
            <p style={{
              maxWidth: '640px', margin: '0 auto',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--text-mid)',
              lineHeight: 1.8,
            }}>
              "Your presence means so much to us as we begin this new chapter of our lives. If you feel led, you can also bless us with a monetary gift to support our journey as we build our home together. Every love, prayer, and support — big or small — will be deeply appreciated."
            </p>
          </div>

          {/* Bank accounts */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            maxWidth: '780px',
            margin: '0 auto',
          }}>
            {accounts.map((a) => <AccountCard key={a.bank} account={a} />)}
          </div>

          {/* Warm note */}
          <div style={{
            textAlign: 'center', marginTop: '56px',
            background: 'linear-gradient(135deg, var(--emerald-dark), var(--emerald))',
            borderRadius: '20px', padding: '40px 32px',
            maxWidth: '600px', margin: '56px auto 0',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🙏</div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.5rem', color: 'white', marginBottom: '12px',
            }}>
              Thank You
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              We are profoundly grateful for your presence, prayers, and generous hearts. Every gift sows a seed into our new home and family. God bless you abundantly.
            </p>
            <div style={{
              marginTop: '20px',
              fontFamily: "'Great Vibes', cursive",
              fontSize: '1.8rem',
              color: 'var(--gold-light)',
            }}>
              With Love, Lydia & Ndiana
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
