'use client';
import { useState, useRef, useEffect } from 'react';

const SUGGESTIONS = [
  'journals for morning routines',
  'gifts for writers',
  'watercolor sketchbooks',
  'minimalist planners 2026',
  'leather-bound notebooks',
];

const AI_RESULTS = {
  'journals for morning routines': [
    { emoji: '📔', name: 'The Golden Hour Journal', price: 42, tag: 'Top pick' },
    { emoji: '🌅', name: 'Dawn Pages Softcover', price: 28, tag: 'Popular' },
    { emoji: '✨', name: 'Ritual Planner — Daily', price: 36, tag: 'New' },
  ],
  default: [
    { emoji: '🗒️', name: 'Classic Lined Notebook', price: 22, tag: 'Bestseller' },
    { emoji: '🎨', name: 'Artist Sketchbook', price: 34, tag: 'Fan fave' },
    { emoji: '📅', name: 'Weekly Planner Pad', price: 18, tag: 'Sale' },
  ],
};

export default function AISearch({ open, onClose, onAddToCart }) {
  const [query, setQuery] = useState('');
  const [thinking, setThinking] = useState(false);
  const [results, setResults] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery(''); setResults(null);
    }
  }, [open]);

  const runSearch = (q) => {
    if (!q.trim()) return;
    setThinking(true);
    setResults(null);
    setTimeout(() => {
      setThinking(false);
      setResults(AI_RESULTS[q] || AI_RESULTS.default);
    }, 1100);
  };

  if (!open) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(45,31,20,0.5)',
      backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
      padding: '80px 24px',
    }} onClick={onClose}>
      <div style={{
        background: 'white', borderRadius: 24,
        width: '100%', maxWidth: 620,
        boxShadow: '0 32px 80px rgba(45,31,20,0.18)',
        overflow: 'hidden',
      }} onClick={e => e.stopPropagation()}>
        {/* Search input */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '18px 20px',
          borderBottom: '1px solid #fdeee0',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: 'linear-gradient(135deg, #f4a264, #f08340)',
            borderRadius: 8, padding: '4px 10px',
            flexShrink: 0,
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L9.5 9.5H2l6 4.5-2.5 7.5L12 17l6.5 4.5L16 14l6-4.5h-7.5z"/>
            </svg>
            <span style={{ color: 'white', fontSize: 11, fontWeight: 700 }}>AI</span>
          </div>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && runSearch(query)}
            placeholder="Describe what you're looking for…"
            style={{
              flex: 1, border: 'none', outline: 'none',
              fontSize: 16, color: '#2d1f14', background: 'transparent',
              fontFamily: 'Inter, sans-serif',
            }}
          />
          {thinking ? (
            <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2.5px solid #fad8b8', borderTopColor: '#f08340', animation: 'spin 0.8s linear infinite' }} />
          ) : (
            <button onClick={() => runSearch(query)} style={{
              background: 'linear-gradient(135deg, #f4a264, #f08340)',
              color: 'white', borderRadius: 10,
              padding: '8px 18px', fontSize: 14, fontWeight: 600,
            }}>Search</button>
          )}
        </div>

        {/* Suggestions */}
        {!results && !thinking && (
          <div style={{ padding: '16px 20px' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#7c6e62', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
              Try asking…
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {SUGGESTIONS.map(s => (
                <button key={s} onClick={() => { setQuery(s); runSearch(s); }} style={{
                  background: '#fdeee0', border: '1px solid #fad8b8',
                  borderRadius: 20, padding: '7px 14px',
                  fontSize: 13, color: '#d96b28', fontWeight: 500,
                  transition: 'background 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#fad8b8'}
                  onMouseLeave={e => e.currentTarget.style.background = '#fdeee0'}
                >{s}</button>
              ))}
            </div>
          </div>
        )}

        {/* Thinking state */}
        {thinking && (
          <div style={{ padding: '32px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: 13, color: '#7c6e62' }}>Finding the perfect matches for you…</div>
          </div>
        )}

        {/* Results */}
        {results && (
          <div style={{ padding: '12px 12px 16px' }}>
            <div style={{ fontSize: 12, color: '#7c6e62', padding: '4px 8px 12px', fontWeight: 500 }}>
              ✨ AI found {results.length} great matches
            </div>
            {results.map(r => (
              <div key={r.name} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '12px 12px',
                borderRadius: 14, marginBottom: 4,
                transition: 'background 0.15s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#fff8f2'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: 'linear-gradient(135deg, #fdeee0, #fad8b8)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, flexShrink: 0,
                }}>{r.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 600, color: '#2d1f14' }}>{r.name}</div>
                  <div style={{ fontSize: 13, color: '#7c6e62', marginTop: 2 }}>
                    <span style={{ background: '#fdeee0', color: '#d96b28', borderRadius: 4, padding: '1px 6px', fontSize: 11, fontWeight: 700, marginRight: 8 }}>{r.tag}</span>
                    ${r.price}
                  </div>
                </div>
                <button onClick={() => { onAddToCart(r); onClose(); }} style={{
                  padding: '8px 16px', borderRadius: 10,
                  background: 'linear-gradient(135deg, #f4a264, #f08340)',
                  color: 'white', fontSize: 13, fontWeight: 600,
                  boxShadow: '0 2px 10px rgba(240,131,64,0.3)',
                }}>Add</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
