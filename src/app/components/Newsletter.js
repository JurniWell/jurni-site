'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={{
      padding: '80px 24px',
      background: 'linear-gradient(135deg, #fdeee0 0%, #fad8b8 50%, #f7bf8e 100%)',
    }}>
      <div style={{
        maxWidth: 600, margin: '0 auto', textAlign: 'center',
      }}>
        <div style={{ fontSize: 44, marginBottom: 20 }}>📮</div>
        <h2 style={{
          fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 4vw, 40px)',
          color: '#2d1f14', letterSpacing: '-0.4px', marginBottom: 14,
        }}>
          Get early access & inspiration
        </h2>
        <p style={{ fontSize: 16, color: '#7c6e62', lineHeight: 1.6, marginBottom: 32 }}>
          New collections, journaling prompts, and exclusive offers — delivered monthly. No spam, ever.
        </p>
        {submitted ? (
          <div style={{
            background: 'white', borderRadius: 16, padding: '20px 32px',
            fontSize: 16, fontWeight: 600, color: '#2d1f14',
            boxShadow: '0 4px 24px rgba(240,131,64,0.2)',
          }}>
            🎉 You're in! Welcome to the journey.
          </div>
        ) : (
          <div style={{
            display: 'flex', gap: 10, maxWidth: 460, margin: '0 auto',
            background: 'white', borderRadius: 14, padding: 6,
            boxShadow: '0 4px 24px rgba(240,131,64,0.2)',
            flexWrap: 'wrap',
          }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={{
                flex: 1, border: 'none', outline: 'none', padding: '10px 14px',
                fontSize: 15, color: '#2d1f14', background: 'transparent',
                fontFamily: 'Inter, sans-serif', minWidth: 180,
              }}
            />
            <button
              onClick={() => email.includes('@') && setSubmitted(true)}
              style={{
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #f4a264, #f08340)',
                color: 'white', borderRadius: 10,
                fontSize: 14, fontWeight: 700,
                boxShadow: '0 2px 12px rgba(240,131,64,0.35)',
              }}>
              Subscribe
            </button>
          </div>
        )}
        <div style={{ fontSize: 12, color: '#b5a49a', marginTop: 16 }}>
          Join 12,000+ journal lovers. Unsubscribe any time.
        </div>
      </div>
    </section>
  );
}
