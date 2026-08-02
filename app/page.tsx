import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="floating-leaves">
        {[...Array(10)].map((_, i) => (<div key={i} className="leaf"></div>))}
      </div>

      <Navbar cartCount={0} />
      
      <section id="home" className="hero" style={{ position: 'relative', zIndex: 1 }}>
        <h1>🌿 PREMIUM HERBAL COLLECTIVE</h1>
        <p>Pure. Potent. Private.</p>
        <p style={{ fontSize: '1rem', color: '#9ca3af', maxWidth: '600px', margin: '0 auto 2rem' }}>
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

      <section className="section" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <Link href="/products" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🌱 Our Products</h3>
            <p style={{ color: '#9ca3af' }}>Browse our premium selection of curated strains.</p>
          </Link>
          <Link href="/reviews" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>⭐ Customer Reviews</h3>
            <p style={{ color: '#9ca3af' }}>See what our 237+ verified customers have to say.</p>
          </Link>
          <Link href="/about" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>ℹ️ About Us</h3>
            <p style={{ color: '#9ca3af' }}>Learn about our commitment to quality and privacy.</p>
          </Link>
          <Link href="/contact" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📞 Contact</h3>
            <p style={{ color: '#9ca3af' }}>Reach out to our 24/7 support team.</p>
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