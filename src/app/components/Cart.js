'use client';

export default function Cart({ open, onClose, items, onRemove, onUpdateQty }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 150,
          background: 'rgba(45,31,20,0.4)',
          backdropFilter: 'blur(4px)',
        }} onClick={onClose} />
      )}

      {/* Drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 160,
        width: 'min(420px, 100vw)',
        background: 'white',
        boxShadow: '-8px 0 48px rgba(45,31,20,0.15)',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.32s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 24px',
          borderBottom: '1px solid #fdeee0',
        }}>
          <div>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, color: '#2d1f14' }}>Your cart</h2>
            <div style={{ fontSize: 13, color: '#7c6e62', marginTop: 2 }}>{items.length} item{items.length !== 1 ? 's' : ''}</div>
          </div>
          <button onClick={onClose} style={{
            width: 36, height: 36, borderRadius: 10,
            background: '#fdeee0', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d96b28" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🛍️</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 18, color: '#2d1f14', marginBottom: 8 }}>Your cart is empty</div>
              <div style={{ fontSize: 14, color: '#7c6e62' }}>Add something beautiful to begin.</div>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 0', borderBottom: '1px solid #fff8f2',
              }}>
                <div style={{
                  width: 60, height: 60, flexShrink: 0,
                  background: 'linear-gradient(135deg, #fdeee0, #fad8b8)',
                  borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 30,
                }}>{item.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: 14, fontWeight: 600, color: '#2d1f14', lineHeight: 1.3 }}>{item.name}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#f08340', marginTop: 4 }}>${item.price}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <button onClick={() => onUpdateQty(item.id, item.qty - 1)} style={{
                    width: 28, height: 28, borderRadius: 8, background: '#fdeee0',
                    color: '#d96b28', fontSize: 18, fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>−</button>
                  <span style={{ fontSize: 14, fontWeight: 600, minWidth: 20, textAlign: 'center' }}>{item.qty}</span>
                  <button onClick={() => onUpdateQty(item.id, item.qty + 1)} style={{
                    width: 28, height: 28, borderRadius: 8, background: '#fdeee0',
                    color: '#d96b28', fontSize: 18, fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>+</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '1px solid #fdeee0' }}>
            {/* Free shipping bar */}
            {total < 50 && (
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontSize: 13, color: '#7c6e62', marginBottom: 8 }}>
                  Add <strong style={{ color: '#d96b28' }}>${(50 - total).toFixed(0)}</strong> more for free shipping
                </div>
                <div style={{ height: 6, background: '#fdeee0', borderRadius: 3 }}>
                  <div style={{
                    height: '100%', borderRadius: 3,
                    background: 'linear-gradient(90deg, #f4a264, #f08340)',
                    width: `${Math.min((total / 50) * 100, 100)}%`,
                    transition: 'width 0.3s',
                  }} />
                </div>
              </div>
            )}
            {total >= 50 && (
              <div style={{ fontSize: 13, color: '#f08340', fontWeight: 600, marginBottom: 16 }}>
                🎉 You qualify for free shipping!
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ fontSize: 15, color: '#7c6e62' }}>Subtotal</span>
              <span style={{ fontSize: 18, fontWeight: 700, color: '#2d1f14' }}>${total.toFixed(2)}</span>
            </div>

            <button style={{
              width: '100%', padding: '15px',
              background: 'linear-gradient(135deg, #f4a264, #f08340)',
              color: 'white', borderRadius: 14,
              fontSize: 16, fontWeight: 700,
              boxShadow: '0 6px 24px rgba(240,131,64,0.38)',
            }}>
              Checkout — ${total.toFixed(2)}
            </button>
            <button style={{
              width: '100%', padding: '12px',
              color: '#7c6e62', fontSize: 14, marginTop: 10,
            }} onClick={onClose}>Continue shopping</button>
          </div>
        )}
      </div>
    </>
  );
}
