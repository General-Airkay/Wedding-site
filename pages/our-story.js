import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

const timelineEvents = [
  { year: '2021', title: 'First Meeting — Kogi State', text: 'We met during our NYSC service year through a writing community in Asaya Camp, Kabba, Kogi State. Two kindred spirits brought together by words and purpose.', icon: '✍️' },
  { year: '2021-2022', title: 'NCCF Fellowship', text: "We grew closer through the Nigeria Christian Corpers' Fellowhip (NCCF) activities. Posted to the same local government, we stayed in the same Corpers' lodge — building friendship daily.", icon: '🙏' },
  { year: '2022', title: 'Separate Paths', text: "After NYSC, life took us in different directions. We went our separate ways, not knowing God was writing a greater story.", icon: '🛤️' },
  { year: '2022-2023', title: 'Divine Reconnection', text: "At the RCCG Youth Convention at Redemption City, Ogun State, God orchestrated our reunion; one that would eventually blossom into something deeper.", icon: '✨' },
  { year: '202x-2026', title: 'Intentional Courtship', text: "Through prayer, shared values, and God's guidance, our relationship grew into intentional courtship — two hearts aligned toward one purpose.", icon: '💍' },
  { year: '2026', title: 'Forever Begins', text: 'On 15th August 2026, surrounded by family and friends, we say "I do" — beginning a beautiful union rooted in love, faith, and purpose.', icon: '💒' },
];

export default function OurStory() {
  return (
    <Layout title="Our Story | Lydia & Ndiana">
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="page-hero-label">Written in the Stars</div>
          <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 400 }}>Our Story</h1>
          <p>A love authored by God, nurtured by friendship</p>
        </div>
      </section>

      {/* Bride & Groom */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <div className="section-label">The Couple</div>
            <h2 className="section-title">Meet the Pair</h2>
            <div className="section-divider"><span /><div className="diamond" /><span /></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {/* Bride */}
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{
                width: '160px', height: '160px', borderRadius: '50%',
                margin: '0 auto 24px', overflow: 'hidden', position: 'relative',
                border: '4px solid var(--gold)',
                boxShadow: '0 0 0 8px rgba(201,168,76,0.1)',
              }}>
                {/* REPLACE: swap src with bride's real photo */}
                <Image src="photos/Bride.jpg" alt="Lydia Oluwadunsin" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="section-label" style={{ marginBottom: '4px' }}>The Bride</div>
              <h3 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2.2rem', color: 'var(--emerald-dark)', marginBottom: '16px' }}>Lydia Oluwadunsin</h3>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, fontSize: '0.95rem', textAlign: 'justify', hyphens: 'auto' }}>
                Lydia is a passionate Christian and an unashamed Ambassador for Christ from Ekiti State, Nigeria. Her life reflects deep love for God and purposeful living. She is passionate about inspiring others through words, service, creativity, and encouragement.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, fontSize: '0.95rem', marginTop: '14px', textAlign: 'justify', hyphens: 'auto' }}>
                She holds degrees in English & Literary Studies, Communication & Media Studies (PGD & MSc), with research interest in Psychological Communication. She writes stories, poems, affirmations, and motivational content centered on identity, purpose, and emotional growth.
              </p>
            </div>

            {/* Groom */}
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{
                width: '160px', height: '160px', borderRadius: '50%',
                margin: '0 auto 24px', overflow: 'hidden', position: 'relative',
                border: '4px solid var(--emerald)',
                boxShadow: '0 0 0 8px rgba(26,107,74,0.1)',
              }}>
                {/* REPLACE: swap src with groom's real photo */}
                <Image src="photos/Groom.jpg" alt="Ndiana Akpekong" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="section-label" style={{ marginBottom: '4px' }}>The Groom</div>
              <h3 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2.2rem', color: 'var(--emerald-dark)', marginBottom: '16px' }}>Ndiana Akpekong</h3>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, fontSize: '0.95rem', textAlign: 'justify', hyphens: 'auto' }}>
                Ndiana Akpekong is a Marine Engineer, Digital Marketing Specialist, and Entrepreneur driven by a deep commitment to his faith and a passion for empowering others. As a technology enthusiast, he equips individuals, businesses, and organizations with in-demand digital skills, particularly in digital marketing, AI applications, business automation, and online entrepreneurship. Through physical and virtual training programs, he has helped beginners and professionals develop practical skills that enhance employability, business growth, and career advancement.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, fontSize: '0.95rem', marginTop: '14px', textAlign: 'justify', hyphens: 'auto' }}>
                Beyond his professional expertise, Ndiana is defined by his quiet strength, warmth, and dedication to serving others. He is deeply involved in youth development through TAYO (Teens and Youths Outreach), where he mentors the next generation in leadership, entrepreneurship, and core values. 
                Guided by his love for Jesus and a vision for transformation, his mission is to bridge the gap between knowledge and opportunity, creating impactful experiences that inspire lasting growth and purpose.       
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Met / Timeline */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--emerald-muted), var(--gold-pale))' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <div className="section-label">The Journey</div>
            <h2 className="section-title">How We Met</h2>
            <div className="section-divider"><span /><div className="diamond" /><span /></div>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--text-mid)' }}>
              "A love story that proves God's hand is in every divine detail."
            </p>
          </div>

          {/* Timeline photos row */}
          <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '24px', marginBottom: '56px', scrollbarWidth: 'thin' }}>
            {[
              { seed: 'timeline1', caption: 'NYSC Days, Kogi' },
              { seed: 'timeline2', caption: 'NCCF Fellowship' },
              { seed: 'timeline3', caption: 'Youth Convention' },
              { seed: 'timeline4', caption: 'Courtship' },
            ].map((img, i) => (
              <div key={i} style={{ flex: '0 0 220px', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
                <div style={{ height: '280px', position: 'relative' }}>
                  {/* REPLACE: swap each src with your real story photos */}
                  <Image src={`https://picsum.photos/seed/${img.seed}/440/560`} alt={img.caption} fill style={{ objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(to top, rgba(18,77,53,0.85), transparent)',
                    padding: '20px 14px 14px',
                  }}>
                    <div style={{ color: 'white', fontSize: '13px', fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>{img.caption}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline events */}
          <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px',
              background: 'linear-gradient(to bottom, var(--gold), var(--emerald))',
              transform: 'translateX(-50%)', opacity: 0.3,
            }} className="timeline-line" />

            {timelineEvents.map((event, i) => (
              <div key={i} style={{
                display: 'flex', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                gap: '32px', marginBottom: '48px', alignItems: 'center',
              }} className="timeline-item">
                <div style={{ flex: 1 }}>
                  <div className="card" style={{ padding: '28px' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{event.icon}</div>
                    <div className="section-label" style={{ marginBottom: '4px' }}>{event.year}</div>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontWeight: 600, color: 'var(--emerald-dark)', marginBottom: '10px' }}>{event.title}</h4>
                    <p style={{ color: 'var(--text-mid)', fontSize: '0.93rem', lineHeight: 1.7 }}>{event.text}</p>
                  </div>
                </div>
                <div style={{
                  width: '20px', height: '20px', borderRadius: '50%',
                  background: 'var(--gold)', border: '3px solid white',
                  boxShadow: '0 0 0 4px rgba(201,168,76,0.2)', flexShrink: 0, zIndex: 1,
                }} />
                <div style={{ flex: 1 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: 'var(--emerald-dark)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ fontFamily: "'Great Vibes', cursive", fontSize: '3rem', color: 'var(--gold-light)', marginBottom: '16px' }}>Join Us</div>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontStyle: 'italic' }}>
            Be a part of this beautiful moment as two hearts become one.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/rsvp" className="btn btn-gold">RSVP Now</Link>
            <Link href="/wedding-details" className="btn btn-outline-white">Wedding Details</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          .timeline-item { flex-direction: column !important; }
          .timeline-line { display: none; }
        }
      `}</style>
    </Layout>
  );
}
