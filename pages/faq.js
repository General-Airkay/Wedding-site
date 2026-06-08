import Layout from '../components/Layout';
import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'What time should I arrive at the venue?',
    a: 'We recommend arriving 30–45 minutes before the ceremony begins at 10:30 AM. This will give you enough time to be seated comfortably and enjoy the atmosphere before the service starts.',
  },
  {
    q: 'What is the dress code?',
    a: 'Smart formal or traditional Nigerian attire is perfectly acceptable. Please avoid black or red as primary colors. We want everyone looking beautiful in our wedding palette for the photos!',
  },
  {
    q: 'Is the event invitation-only?',
    a: 'Yes, the wedding ceremony and reception are strictly by invitation only. If you have received an invitation (physical or digital), you are most welcome. Please contact us if you have questions about your invitation status.',
  },
  {
    q: 'Are there accommodation options nearby?',
    a: 'Yes! We have compiled a list of nearby hotels for guests traveling into Ado-Ekiti. Please visit our Accommodation page for the full list of recommended hotels with their contact numbers. We advise booking early.',
  },
  {
    q: 'How can I send a gift to the couple?',
    a: 'Your presence is truly the greatest gift. However, if you\'d like to bless us monetarily, you can find our bank details on the Gifts page. We are deeply grateful for every expression of love and generosity.',
  },
  {
    q: 'What if I arrive late to the ceremony?',
    a: 'We understand that unexpected delays can happen. If you arrive after the ceremony has started, kindly wait at the entrance and an usher will assist you to a suitable seat during an appropriate pause in the program. Please try to arrive on time so you don\'t miss the most important moments!',
  },
  {
    q: 'Who can I contact for enquiries?',
    a: 'For any enquiries, please reach out to our contact persons: Mandu – 08064066418, Priscilla – 09034824025, or Oluwatisin – 09066517519. You can also visit our Contact page for WhatsApp links.',
  },
  {
    q: 'Will there be a reception after the ceremony?',
    a: 'Yes! Details will be provided upon confirmation of your attendance.',
  },
  {
    q: 'Can I share photos on social media?',
    a: 'Absolutely! We love it when you share the joy. Please use our wedding hashtag #Divine\'sChoice26 on all your posts so we can find and cherish your photos.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      border: '1px solid var(--border)',
      borderRadius: '14px',
      overflow: 'hidden',
      background: 'white',
      marginBottom: '12px',
      transition: 'box-shadow 0.2s',
      boxShadow: open ? 'var(--shadow-card)' : 'none',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', padding: '20px 24px',
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: '16px',
        }}
      >
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.1rem', fontWeight: 600, color: 'var(--emerald-dark)',
        }}>
          {q}
        </span>
        <span style={{
          width: '28px', height: '28px', borderRadius: '50%',
          background: open ? 'var(--emerald)' : 'var(--emerald-muted)',
          color: open ? 'white' : 'var(--emerald)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.2rem', flexShrink: 0,
          transition: 'all 0.25s',
          transform: open ? 'rotate(45deg)' : 'none',
          fontWeight: 300,
        }}>
          +
        </span>
      </button>
      {open && (
        <div style={{
          padding: '0 24px 20px',
          borderTop: '1px solid var(--border)',
          animation: 'fadeIn 0.2s ease',
        }}>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, fontSize: '0.95rem', marginTop: '16px' }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <Layout title="FAQ | Lydia & Ndiana">
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-label">Questions & Answers</div>
          <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 400 }}>
            FAQs
          </h1>
          <p>Everything you need to know before the big day</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <div className="section-label">Need to Know</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="section-divider">
              <span /><div className="diamond" /><span />
            </div>
          </div>

          <div style={{ maxWidth: '760px', margin: '0 auto 48px' }}>
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>

          <div style={{
            textAlign: 'center',
            background: 'var(--emerald-muted)',
            borderRadius: '20px', padding: '36px',
            maxWidth: '560px', margin: '0 auto',
            border: '1px solid rgba(26,107,74,0.15)',
          }}>
            <div style={{ fontSize: '1.6rem', marginBottom: '12px' }}>💬</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: 'var(--emerald-dark)', marginBottom: '10px' }}>
              Still Have Questions?
            </h3>
            <p style={{ color: 'var(--text-mid)', fontSize: '0.93rem', marginBottom: '20px', lineHeight: 1.6 }}>
              Our team is happy to help. Reach out to us via WhatsApp and we'll respond as quickly as possible.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
