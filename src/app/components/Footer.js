export default function Footer() {
  const links = {
    Shop: ['Journals', 'Planners', 'Sketchbooks', 'Gift Sets', 'Sale'],
    Company: ['About us', 'Our story', 'Sustainability', 'Press', 'Careers'],
    Help: ['FAQ', 'Shipping', 'Returns', 'Track order', 'Contact'],
  };

  return (
    <footer style={{ background: '#2d1f14', color: 'white', padding: '64px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', marginBottom: 56 }}>
          {/* Brand */}
          <div style={{ flex: '1 1 240px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36,
                background: 'linear-gradient(135deg, #f4a264, #f08340)',
                borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 4l2 5h5l-4 3 1.5 5L12 14l-4.5 3L9 12 5 9h5z" />
                </svg>
              </div>
              <span style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 600 }}>Jurni</span>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 240 }}>
              Thoughtfully crafted stationery and journals for people on a journey of growth.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {['📷', '🐦', '📌', '🎵'].map((icon, i) => (
                <button key={i} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'rgba(255,255,255,0.08)',
                  fontSize: 16, transition: 'background 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(240,131,64,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                >{icon}</button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section} style={{ flex: '1 1 140px' }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#f08340', marginBottom: 18 }}>
                {section}
              </div>
              {items.map(item => (
                <a key={item} href="#" style={{
                  display: 'block', fontSize: 14,
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: 10, transition: 'color 0.15s',
                }}
                  onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.95)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                >{item}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
            © 2026 Jurni Co. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy', 'Terms', 'Cookies'].map(l => (
              <a key={l} href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
