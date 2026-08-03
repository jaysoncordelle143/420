import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export default async function Home() {
  const supabase = createClient();
  
  // Fetch latest 3 products for homepage
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(3);

  return (
    <>
      <div className="floating-leaves">{[...Array(10)].map((_, i) => (<div key={i} className="leaf"></div>))}</div>
      <Navbar cartCount={0} />
      
      {/* HERO SECTION */}
      <section id="home" className="hero" style={{ position: 'relative', zIndex: 1 }}>
        <h1>🌿 PREMIUM HERBAL COLLECTIVE</h1>
        <p>Pure. Potent. Private.</p>
        <p style={{ fontSize: '1rem', color: 'var(--muted-text)', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Hand-selected organic herbal remedies cultivated with precision and care, ensuring purity, potency, and an unmatched natural experience.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <Link href="/products" className="btn-primary">Explore Products</Link>
          <Link href="/watch-sample" className="btn-primary" style={{ backgroundColor: '#1f2937' }}>Watch Sample</Link>
        </div>
        
        <div className="features">
          <span className="feature-badge">🔒 Encrypted Transactions</span>
          <span className="feature-badge">🔐 100% Anonymous</span>
          <span className="feature-badge">📦 Discreet Stealth Delivery</span>
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="section" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">Our latest premium selections</p>
        
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {products && products.length > 0 ? (
            products.map((product) => (
              <Link key={product.id} href="/products" className="card" style={{ textDecoration: 'none', color: 'inherit', padding: '1.5rem' }}>
                <div style={{ 
                  backgroundColor: '#1f2937', 
                  height: '150px', 
                  borderRadius: '0.5rem', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem'
                }}>
                  🌿
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--heading-color)' }}>{product.name}</h3>
                <p style={{ color: 'var(--muted-text)', fontSize: '0.875rem', marginBottom: '1rem' }}>{product.description?.substring(0, 80)}...</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-color)' }}>{product.price_usdt} USDT</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted-text)' }}>Stock: {product.stock}</span>
                </div>
              </Link>
            ))
          ) : (
            <div className="card" style={{ textAlign: 'center', padding: '2rem', gridColumn: '1 / -1' }}>
              <p style={{ color: 'var(--muted-text)' }}>Products coming soon. Check back shortly!</p>
            </div>
          )}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/products" className="btn-primary">View All Products</Link>
        </div>
      </section>

      {/* QUICK LINKS SECTION */}
      <section className="section" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <Link href="/reviews" className="card" style={{ textDecoration: 'none', color: 'inherit', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>⭐ Customer Reviews</h3>
            <p style={{ color: 'var(--muted-text)' }}>See what our 237+ verified customers have to say.</p>
          </Link>
          <Link href="/about" className="card" style={{ textDecoration: 'none', color: 'inherit', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>ℹ️ About Us</h3>
            <p style={{ color: 'var(--muted-text)' }}>Learn about our commitment to quality and privacy.</p>
          </Link>
          <Link href="/contact" className="card" style={{ textDecoration: 'none', color: 'inherit', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📞 Contact</h3>
            <p style={{ color: 'var(--muted-text)' }}>Reach out to our 24/7 support team.</p>
          </Link>
        </div>
      </section>

      <footer className="footer" style={{ position: 'relative', zIndex: 1 }}>
        <p>Cannabis 420 Growers © 2026 All rights reserved. Secure & Confidential.</p>
        <p className="mt-2">Powered by Mad-IQ001</p>
      </footer>
    </>
  );
}
