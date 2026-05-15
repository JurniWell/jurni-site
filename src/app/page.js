'use client';
import { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AISearch from './components/AISearch';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cart from './components/Cart';

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((product) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQty = useCallback((id, qty) => {
    if (qty <= 0) {
      setCartItems(prev => prev.filter(i => i.id !== id));
    } else {
      setCartItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
    }
  }, []);

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);

  return (
    <>
      <Header
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onSearchOpen={() => setSearchOpen(true)}
      />
      <main>
        <Hero onShopClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })} />
        <Features />
        <ProductGrid onAddToCart={addToCart} />
        <Newsletter />
      </main>
      <Footer />
      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQty={updateQty}
      />
      <AISearch
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onAddToCart={addToCart}
      />
    </>
  );
}
