import { useState, useEffect } from 'react';

export default function Countdown({ dark = false }) {
  const target = new Date('2026-08-15T10:30:00');
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: pad(time.hours) },
    { label: 'Minutes', value: pad(time.minutes) },
    { label: 'Seconds', value: pad(time.seconds) },
  ];

  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {units.map(({ label, value }) => (
        <div key={label} style={{
          background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(26,107,74,0.06)',
          border: dark ? '1px solid rgba(201,168,76,0.3)' : '1px solid rgba(201,168,76,0.25)',
          borderRadius: '12px',
          padding: '20px 28px',
          textAlign: 'center',
          minWidth: '90px',
          backdropFilter: 'blur(8px)',
        }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 600,
            color: dark ? 'white' : 'var(--emerald)',
            lineHeight: 1,
          }}>
            {value}
          </div>
          <div style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: dark ? 'var(--gold-light)' : 'var(--gold)',
            marginTop: '6px',
          }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
