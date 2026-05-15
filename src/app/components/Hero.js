export default function Hero({ onShopClick }) {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '100px 24px 120px',
      background: 'linear-gradient(160deg, #fff8f2 0%, #fdeee0 55%, #fad8b8 100%)',
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: -80, right: -80,
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,162,100,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -60, left: -60,
        width: 360, height: 360, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(240,131,64,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 64, flexWrap: 'wrap' }}>
        {/* Copy */}
        <div style={{ flex: '1 1 420px', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fdeee0', border: '1px solid #fad8b8',
            borderRadius: 999, padding: '6px 16px', marginBottom: 24,
          }}>
            <span style={{ fontSize: 16 }}>✨</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#d96b28' }}>New arrivals — Spring 2026</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(46px, 6vw, 78px)',
            fontFamily: 'Fraunces, serif',
            fontWeight: 600,
            color: '#2d1f14',
            letterSpacing: '-1.5px',
            marginBottom: 24,
            lineHeight: 1.05,
          }}>
            Your story,<br />
            <em style={{ color: '#f08340', fontStyle: 'italic' }}>beautifully</em><br />
            told.
          </h1>

          <p style={{ fontSize: 18, color: '#7c6e62', lineHeight: 1.7, maxWidth: 440, marginBottom: 40 }}>
            Thoughtfully crafted journals, stationery, and tools to help you reflect, plan, and grow. Every product a chapter in your journey.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button onClick={onShopClick} style={{
              padding: '16px 36px',
              background: 'linear-gradient(135deg, #f4a264 0%, #f08340 100%)',
              color: 'white',
              borderRadius: 14,
              fontSize: 16,
              fontWeight: 600,
              boxShadow: '0 6px 24px rgba(240,131,64,0.38)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(240,131,64,0.48)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 24px rgba(240,131,64,0.38)'; }}
            >
              Shop now →
            </button>
            <button style={{
              padding: '16px 32px',
              background: 'rgba(255,255,255,0.7)',
              border: '1.5px solid #fad8b8',
              color: '#2d1f14',
              borderRadius: 14,
              fontSize: 16,
              fontWeight: 500,
              backdropFilter: 'blur(8px)',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.95)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.7)'}
            >
              Our story
            </button>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: 24, marginTop: 48, flexWrap: 'wrap' }}>
            {[['🌿', 'Sustainably made'], ['📦', 'Free shipping $50+'], ['⭐', '4.9 • 2,400 reviews']].map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 18 }}>{icon}</span>
                <span style={{ fontSize: 13, color: '#7c6e62', fontWeight: 500 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual card stack */}
        <div style={{ flex: '1 1 340px', position: 'relative', height: 420, minWidth: 280 }}>
          {/* Back card */}
          <div style={{
            position: 'absolute', top: 30, right: 0,
            width: 260, height: 340,
            background: 'linear-gradient(145deg, #fad8b8, #f7bf8e)',
            borderRadius: 28, transform: 'rotate(6deg)',
            boxShadow: '0 20px 60px rgba(240,131,64,0.2)',
          }} />
          {/* Front card */}
          <div style={{
            position: 'absolute', top: 0, right: 30,
            width: 270, height: 360,
            background: 'white',
            borderRadius: 28,
            boxShadow: '0 24px 64px rgba(45,31,20,0.12)',
            overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              flex: 1,
              background: 'linear-gradient(160deg, #fdeee0 0%, #fad8b8 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 80,
            }}>📔</div>
            <div style={{ padding: '18px 20px' }}>
              <div style={{ fontSize: 12, color: '#f08340', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>Bestseller</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 600, color: '#2d1f14' }}>The Golden Hour Journal</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <span style={{ fontSize: 18, fontWeight: 700, color: '#f08340' }}>$42</span>
                <span style={{ fontSize: 12, color: '#7c6e62' }}>⭐ 4.9 (318)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
