'use client';

const PRODUCTS = [
  { id: 1, emoji: '📔', name: 'The Golden Hour Journal', price: 42, oldPrice: null, tag: 'Bestseller', rating: 4.9, reviews: 318, desc: 'Guided prompts for morning & evening reflection. 180 days.' },
  { id: 2, emoji: '🎨', name: 'Artist Sketchbook Pro', price: 34, oldPrice: 44, tag: 'Sale', rating: 4.8, reviews: 204, desc: 'Cold-press watercolor paper, 200gsm. Lay-flat binding.' },
  { id: 3, emoji: '📅', name: 'Monthly Planner 2026', price: 28, oldPrice: null, tag: 'New', rating: 4.7, reviews: 89, desc: 'Undated monthly spreads + weekly layouts. Linen cover.' },
  { id: 4, emoji: '🗒️', name: 'Classic Dot-Grid Notebook', price: 22, oldPrice: null, tag: null, rating: 4.9, reviews: 512, desc: 'A5 dotted pages, 160 sheets, thread-bound. Ultra smooth.' },
  { id: 5, emoji: '🌸', name: 'Gratitude Journal — Bloom', price: 36, oldPrice: null, tag: 'Fan fave', rating: 5.0, reviews: 147, desc: 'Daily gratitude prompts with botanical illustrations.' },
  { id: 6, emoji: '✏️', name: 'Journaling Starter Kit', price: 58, oldPrice: 72, tag: 'Sale', rating: 4.8, reviews: 261, desc: 'Notebook + 3 pens + washi tape set. Perfect gift.' },
];

function Stars({ rating }) {
  return (
    <span style={{ color: '#f4a264', fontSize: 12 }}>
      {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
    </span>
  );
}

export default function ProductGrid({ onAddToCart }) {
  return (
    <section id="shop" style={{ padding: '80px 24px', background: '#fff8f2' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#f08340', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
            Our collection
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontFamily: 'Fraunces, serif', color: '#2d1f14', letterSpacing: '-0.5px' }}>
            Made for your journey
          </h2>
          <p style={{ fontSize: 16, color: '#7c6e62', marginTop: 14, maxWidth: 480, margin: '14px auto 0' }}>
            Every item is designed to become a trusted companion — for the person you're becoming.
          </p>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40, justifyContent: 'center' }}>
          {['All', 'Journals', 'Planners', 'Sketchbooks', 'Gift Sets', 'On Sale'].map((f, i) => (
            <button key={f} style={{
              padding: '8px 20px', borderRadius: 20,
              background: i === 0 ? 'linear-gradient(135deg, #f4a264, #f08340)' : '#fdeee0',
              color: i === 0 ? 'white' : '#d96b28',
              border: i === 0 ? 'none' : '1px solid #fad8b8',
              fontSize: 14, fontWeight: 600,
              boxShadow: i === 0 ? '0 2px 10px rgba(240,131,64,0.3)' : 'none',
              cursor: 'pointer',
            }}>{f}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {PRODUCTS.map(product => (
            <div key={product.id} style={{
              background: 'white',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 2px 16px rgba(45,31,20,0.06)',
              transition: 'transform 0.25s, box-shadow 0.25s',
              display: 'flex', flexDirection: 'column',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(240,131,64,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 16px rgba(45,31,20,0.06)'; }}
            >
              {/* Product image */}
              <div style={{
                height: 200,
                background: 'linear-gradient(145deg, #fff8f2 0%, #fdeee0 60%, #fad8b8 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 72, position: 'relative',
              }}>
                {product.emoji}
                {product.tag && (
                  <div style={{
                    position: 'absolute', top: 14, left: 14,
                    background: product.tag === 'Sale' ? '#d96b28' : product.tag === 'Bestseller' ? '#2d1f14' : '#f08340',
                    color: 'white', borderRadius: 6,
                    padding: '4px 10px', fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.04em',
                  }}>{product.tag}</div>
                )}
              </div>

              {/* Info */}
              <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 17, fontWeight: 600, color: '#2d1f14', marginBottom: 6 }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: 13, color: '#7c6e62', lineHeight: 1.5, marginBottom: 12, flex: 1 }}>
                  {product.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
                  <Stars rating={product.rating} />
                  <span style={{ fontSize: 12, color: '#7c6e62' }}>{product.rating} ({product.reviews})</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span style={{ fontSize: 20, fontWeight: 700, color: '#f08340' }}>${product.price}</span>
                    {product.oldPrice && (
                      <span style={{ fontSize: 14, color: '#b5a49a', textDecoration: 'line-through' }}>${product.oldPrice}</span>
                    )}
                  </div>
                  <button onClick={() => onAddToCart(product)} style={{
                    padding: '9px 20px',
                    background: 'linear-gradient(135deg, #f4a264, #f08340)',
                    color: 'white', borderRadius: 10,
                    fontSize: 13, fontWeight: 700,
                    boxShadow: '0 2px 10px rgba(240,131,64,0.3)',
                    transition: 'transform 0.15s, box-shadow 0.15s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(240,131,64,0.42)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 10px rgba(240,131,64,0.3)'; }}
                  >Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
