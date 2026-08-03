import Navbar from '@/components/Navbar';
import { createClient } from '@/lib/supabase/server';

export default async function ProductsPage() {
  const supabase = createClient();
  
  // Fetch products from Supabase
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <>
      <div className="floating-leaves">{[...Array(10)].map((_, i) => (<div key={i} className="leaf"></div>))}</div>
      <Navbar cartCount={0} />
      
      <section className="section" style={{ position: 'relative', zIndex: 1, paddingTop: '2rem' }}>
        <h1 className="section-title">Our Premium Harvest</h1>
        <p className="section-subtitle">Selected curated strains and herbal extractions crafted for wellness.</p>
        
        {/* Products Grid */}
        <div className="grid" style={{ marginBottom: '3rem' }}>
          {products && products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="card" style={{ padding: '1.5rem' }}>
                {/* Product Image Placeholder */}
                <div style={{ 
                  backgroundColor: '#1f2937', 
                  height: '200px', 
                  borderRadius: '0.5rem', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem'
                }}>
                  🌿
                </div>
                
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--heading-color)' }}>
                  {product.name}
                </h3>
                
                <p style={{ color: 'var(--muted-text)', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                  {product.description}
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>
                    {product.price_usdt} USDT
                  </span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--muted-text)' }}>
                    Stock: {product.stock}
                  </span>
                </div>
                
                <button className="btn-primary" style={{ width: '100%' }}>
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem', gridColumn: '1 / -1' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>📦 Product Catalog Coming Soon</h3>
              <p style={{ color: 'var(--muted-text)' }}>We are currently updating our inventory with new premium selections.</p>
            </div>
          )}
        </div>

        {/* Crypto Payment Section */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: 'var(--text-color)' }}>💰 Secure Crypto Payment</h2>
          
          {/* Bitcoin */}
          <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#f7931a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>₿ Bitcoin (BTC)</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '0.5rem', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ textAlign: 'center', color: '#000' }}>
                  <span style={{ fontSize: '3rem' }}>₿</span>
                  <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>BTC QR Code Here</p>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: 'var(--muted-text)', marginBottom: '1rem' }}>Send the exact amount to:</p>
                <div style={{ backgroundColor: '#000', padding: '1rem', borderRadius: '0.5rem', fontFamily: 'monospace', wordBreak: 'break-all', fontSize: '0.875rem', color: 'var(--text-color)', border: '1px solid var(--card-border)' }}>
                  bc1qpwqg3sx95s4t7fqf2zjppx6eszs8uf7vdwrkc5
                </div>
              </div>
            </div>
          </div>

          {/* USDT */}
          <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#26a17b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>₮ USDT (ERC-20)</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '0.5rem', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ textAlign: 'center', color: '#000' }}>
                  <span style={{ fontSize: '3rem' }}>₮</span>
                  <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>USDT QR Code Here</p>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: 'var(--muted-text)', marginBottom: '1rem' }}>Send USDT (Ethereum network) to:</p>
                <div style={{ backgroundColor: '#000', padding: '1rem', borderRadius: '0.5rem', fontFamily: 'monospace', wordBreak: 'break-all', fontSize: '0.875rem', color: 'var(--text-color)', border: '1px solid var(--card-border)' }}>
                  0x8337e39d357df259d5aa1ebf56321aa6fbb2f7b5
                </div>
              </div>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="card" style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <h3 style={{ color: '#f59e0b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>️ Important Payment Instructions</h3>
            <ul style={{ color: 'var(--muted-text)', lineHeight: '1.8', paddingLeft: '1.5rem', listStyle: 'disc' }}>
              <li><strong>ONLY CRYPTO PAYMENTS ARE ACCEPTED.</strong> We do not accept cards, bank transfers, PayPal, or cash.</li>
              <li>Send the <strong>EXACT</strong> amount. Do not overpay or underpay.</li>
              <li>After payment, screenshot the transaction and send it to our Telegram admin along with your delivery details.</li>
              <li>Include your Telegram username and full delivery address.</li>
              <li>Orders are processed within 2-4 hours of payment confirmation.</li>
              <li>Delivery typically takes 1-3 business days depending on your location.</li>
            </ul>
          </div>
        </div>
      </section>
      <footer className="footer" style={{ position: 'relative', zIndex: 1 }}><p>Cannabis 420 Growers © 2026 All rights reserved.</p></footer>
    </>
  );
                }
