import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <>
      <div className="floating-leaves">{[...Array(10)].map((_, i) => (<div key={i} className="leaf"></div>))}</div>
      <Navbar cartCount={0} />
      
      <section className="section" style={{ position: 'relative', zIndex: 1, paddingTop: '2rem' }}>
        <h1 className="section-title">About Cannabis 420 Growers</h1>
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--muted-text)' }}>At Cannabis 420 Growers, we are dedicated to providing the highest quality, organically cultivated herbal medicines and cannabis-derived wellness products.</p>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--muted-text)' }}>Every strain and extract is meticulously grown in controlled, pesticide-free environments to ensure maximum purity and potency. We adhere to rigorous third-party lab testing standards.</p>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--muted-text)' }}>Your privacy is our top priority; we utilize advanced encryption and secure, anonymous cryptocurrency transactions to protect your identity. All orders are packaged in odorless, discreet, and tamper-evident materials.</p>
          <p style={{ lineHeight: '1.8', color: 'var(--text-color)', fontWeight: '500', fontSize: '1.1rem' }}>Experience the difference of truly premium, lab-verified botanicals, delivered with unmatched professionalism and care.</p>
        </div>
      </section>
      <footer className="footer" style={{ position: 'relative', zIndex: 1 }}><p>Cannabis 420 Growers © 2026 All rights reserved.</p></footer>
    </>
  );
}
