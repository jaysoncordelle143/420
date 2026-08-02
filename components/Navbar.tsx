'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          
          <div className="nav-links">
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              style={{ 
                background: 'transparent', 
                border: '1px solid var(--card-border)', 
                color: 'var(--text-color)', 
                padding: '0.5rem', 
                borderRadius: '50%', 
                cursor: 'pointer',
                fontSize: '1.2rem'
              }}
            >
              {isDarkMode ? '☀️' : ''}
            </button>

            {/* Cart Button */}
            <div 
              onClick={() => setIsCartOpen(true)}
              style={{ cursor: 'pointer', backgroundColor: 'var(--card-bg)', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)' }}
            >
               🛒 Cart {cartCount}
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Modal */}
      {isCartOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100 }} onClick={() => setIsCartOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--card-border)', width: '90%', maxWidth: '400px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h2 style={{ color: 'var(--heading-color)' }}>Shopping Cart</h2>
              <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-color)', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
            </div>
            <p style={{ color: 'var(--muted-text)' }}>Your cart is empty.</p>
            <button onClick={() => setIsCartOpen(false)} className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}