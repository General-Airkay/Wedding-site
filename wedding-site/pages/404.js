import Layout from '../components/Layout';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout title="Page Not Found | Lydia & Ndiana">
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, var(--emerald-dark), var(--emerald))',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '120px 24px 80px',
      }}>
        <div>
          <div style={{ fontFamily: "'Great Vibes', cursive", fontSize: '6rem', color: 'var(--gold-light)', marginBottom: '16px' }}>
            Oops!
          </div>
          <h1 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '12px', fontWeight: 400, fontFamily: "'Cormorant Garamond', serif" }}>
            This page wasn't invited to the wedding 😄
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '32px' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="btn btn-gold">Back to Home</Link>
        </div>
      </section>
    </Layout>
  );
}
