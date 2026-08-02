import Navbar from '@/components/Navbar';

export default function ProductsPage() {
  return (
    <>
      <div className="floating-leaves">{[...Array(10)].map((_, i) => (<div key={i} className="leaf"></div>))}</div>
      <Navbar cartCount={0} />
      
      <section className="section" style={{ position: 'relative', zIndex: 1, paddingTop: '2rem' }}>
        <h1 className="section-title">Our Premium Harvest</h1>
        <p className="section-subtitle">Selected curated strains and herbal extractions crafted for wellness.</p>
        
        {/* EMPTY CATALOG FOR YOU TO FILL */}
        <div className="grid" style={{ marginBottom: '3rem' }}>
          <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem', gridColumn: '1 / -1' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#4ade80' }}>📦 Product Catalog Coming Soon</h3>
            <p style={{ color: '#9ca3af' }}>We are currently updating our inventory with new premium selections.</p>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.5rem' }}>Check back soon, or visit our Telegram channel for immediate access.</p>
          </div>
        </div>

        {/* CRYPTO PAYMENT SECTION */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#4ade80' }}>💰 Secure Crypto Payment</h2>
          
          {/* Bitcoin */}
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#f7931a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>₿ Bitcoin (BTC)</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              {/* QR CODE PLACEHOLDER: Replace the inner div with: <img src="/your-btc-qr.png" alt="BTC QR" style={{ width: '200px' }} /> */}
              <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '0.5rem', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ textAlign: 'center', color: '#000' }}>
                  <span style={{ fontSize: '3rem' }}>₿</span>
                  <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>BTC QR Code Here</p>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Send the exact amount to:</p>
                <div className="wallet-address" style={{ backgroundColor: '#000', padding: '1rem', borderRadius: '0.5rem', fontFamily: 'monospace', wordBreak: 'break-all', fontSize: '0.875rem', color: '#4ade80', border: '1px solid #14532d' }}>
                  bc1qpwqg3sx95s4t7fqf2zjppx6eszs8uf7vdwrkc5
                </div>
              </div>
            </div>
          </div>

          {/* USDT */}
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#26a17b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>₮ USDT (ERC-20)</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              {/* QR CODE PLACEHOLDER: Replace the inner div with: <img src="/your-usdt-qr.png" alt="USDT QR" style={{ width: '200px' }} /> */}
              <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '0.5rem', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ textAlign: 'center', color: '#000' }}>
                  <span style={{ fontSize: '3rem' }}>₮</span>
                  <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>USDT QR Code Here</p>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Send USDT (Ethereum network) to:</p>
                <div className="wallet-address" style={{ backgroundColor: '#000', padding: '1rem', borderRadius: '0.5rem', fontFamily: 'monospace', wordBreak: 'break-all', fontSize: '0.875rem', color: '#4ade80', border: '1px solid #14532d' }}>
                  0x8337e39d357df259d5aa1ebf56321aa6fbb2f7b5
                </div>
              </div>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="card" style={{ marginTop: '2rem', backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <h3 style={{ color: '#f59e0b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>⚠️ Important Payment Instructions</h3>
            <ul style={{ color: '#d1d5db', lineHeight: '1.8', paddingLeft: '1.5rem', listStyle: 'disc' }}>
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