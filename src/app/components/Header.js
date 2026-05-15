'use client';
import { useState } from 'react';

export default function Header({ cartCount, onCartOpen, onSearchOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255,251,247,0.88)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid #fad8b8',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px',
        height: 68,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 36, height: 36,
            background: 'linear-gradient(135deg, #f4a264 0%, #f08340 100%)',
            borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="white" opacity="0" />
              <path d="M12 4l2 5h5l-4 3 1.5 5L12 14l-4.5 3L9 12 5 9h5z" fill="white" />
            </svg>
          </div>
          <span style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 600, letterSpacing: '-0.3px', color: '#2d1f14' }}>
            Jurni
          </span>
        </a>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {['Shop', 'Collections', 'Journal', 'About'].map(item => (
            <a key={item} href="#"
              style={{ fontSize: 14, fontWeight: 500, color: '#7c6e62', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#f08340'}
              onMouseLeave={e => e.target.style.color = '#7c6e62'}
            >{item}</a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          {/* Search */}
          <button onClick={onSearchOpen} style={{
            width: 38, height: 38, borderRadius: 10,
            background: '#fdeee0', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#fad8b8'}
            onMouseLeave={e => e.currentTarget.style.background = '#fdeee0'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d96b28" strokeWidth="2.2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          {/* Cart */}
          <button onClick={onCartOpen} style={{
            position: 'relative',
            padding: '8px 18px',
            background: 'linear-gradient(135deg, #f4a264 0%, #f08340 100%)',
            color: 'white',
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 8,
            boxShadow: '0 2px 12px rgba(240,131,64,0.35)',
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(240,131,64,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 12px rgba(240,131,64,0.35)'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Cart
            {cartCount > 0 && (
              <span style={{
                position: 'absolute', top: -6, right: -6,
                background: '#2d1f14', color: 'white',
                borderRadius: 999, width: 20, height: 20,
                fontSize: 11, fontFamily: 'Inter, sans-serif', fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
