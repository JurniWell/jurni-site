export default function Features() {
  const features = [
    {
      icon: '🌿',
      title: 'Sustainably crafted',
      desc: 'Every product uses recycled or FSC-certified materials. Good for you, good for the planet.',
    },
    {
      icon: '✨',
      title: 'AI-powered discovery',
      desc: 'Describe what you need in plain English and our AI finds your perfect match instantly.',
    },
    {
      icon: '🎁',
      title: 'Gift-ready always',
      desc: 'Every order ships in our signature peach wrapping — no extra charge, ever.',
    },
    {
      icon: '🔁',
      title: '60-day returns',
      desc: 'Not in love? Return anything within 60 days, no questions asked.',
    },
  ];

  return (
    <section style={{ padding: '80px 24px', background: 'white' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontFamily: 'Fraunces, serif', color: '#2d1f14', letterSpacing: '-0.4px' }}>
            Why Jurni?
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 28,
        }}>
          {features.map(f => (
            <div key={f.title} style={{
              padding: '32px 28px',
              background: '#fff8f2',
              borderRadius: 20,
              border: '1px solid #fdeee0',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(240,131,64,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ fontSize: 36, marginBottom: 18 }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 19, color: '#2d1f14', marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: '#7c6e62', lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
