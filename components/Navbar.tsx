'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCartStore } from '@/lib/store';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const pathname = usePathname();
  
  // Connect to the cart store
  const totalCount = useCartStore((state) => state.getTotalCount());
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotal = useCartStore((state) => state.getTotal);

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
      <nav className="navbar" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="nav-container">
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          
          <div className="nav-links">
            <button 
              onClick={toggleTheme}
              style={{ background: 'transparent', border: '1px solid var(--card-border)', color: 'var(--text-color)', padding: '0.5rem', borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem' }}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>

            <div 
              onClick={() => setIsCartOpen(true)}
              style={{ cursor: 'pointer', backgroundColor: 'var(--card-bg)', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', position: 'relative' }}
            >
               🛒 Cart 
               {totalCount > 0 && (
                 <span style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: 'red', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>
                   {totalCount}
                 </span>
               )}
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Modal */}
      {isCartOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100 }} onClick={() => setIsCartOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--card-border)', width: '90%', maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h2 style={{ color: 'var(--heading-color)' }}>Shopping Cart</h2>
              <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-color)', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
            </div>
            
            {items.length === 0 ? (
              <p style={{ color: 'var(--muted-text)' }}>Your cart is empty.</p>
            ) : (
              <>
                {items.map((item) => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
                    <div>
                      <p style={{ color: 'var(--heading-color)', fontWeight: 'bold' }}>{item.name}</p>
                      <p style={{ color: 'var(--muted-text)', fontSize: '0.875rem' }}>{item.price_usdt} USDT x {item.quantity}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} style={{ background: 'red', color: 'white', border: 'none', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', cursor: 'pointer' }}>Remove</button>
                  </div>
                ))}
                <div style={{ marginTop: '1rem', textAlign: 'right' }}>
                  <p style={{ color: 'var(--heading-color)', fontSize: '1.25rem', fontWeight: 'bold' }}>Total: {getTotal()} USDT</p>
                </div>
                <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                  <button className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Proceed to Checkout</button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
