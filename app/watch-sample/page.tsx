import Navbar from '@/components/Navbar';

export default function WatchSamplePage() {
  return (
    <>
      <div className="floating-leaves">{[...Array(10)].map((_, i) => (<div key={i} className="leaf"></div>))}</div>
      <Navbar cartCount={0} />
      
      <section className="section" style={{ position: 'relative', zIndex: 1, paddingTop: '2rem' }}>
        <h1 className="section-title">Watch Sample Video</h1>
        <p className="section-subtitle">See our cultivation process and quality standards</p>
        
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
          {/* VIDEO PLACEHOLDER - REPLACE WITH YOUR ACTUAL VIDEO */}
          <div style={{ backgroundColor: '#111827', border: '2px dashed #4ade80', borderRadius: '1rem', padding: '4rem 2rem', marginBottom: '2rem', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🎥</div>
            <h3 style={{ color: '#4ade80', marginBottom: '1rem', fontSize: '1.5rem' }}>Sample Video Placeholder</h3>
            <p style={{ color: '#9ca3af', marginBottom: '1.5rem', maxWidth: '500px' }}>Replace this section with your actual video element.</p>
            
            {/* EXAMPLE OF HOW TO ADD YOUR VIDEO LATER: */}
            {/* 
            <video controls style={{ width: '100%', maxWidth: '600px', borderRadius: '0.5rem' }}>
              <source src="/videos/your-sample-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> 
            */}
          </div>

          <a href="https://t.me/canabislove12" className="btn-primary" style={{ display: 'inline-block' }}>Visit Telegram Channel</a>
        </div>
      </section>
      <footer className="footer" style={{ position: 'relative', zIndex: 1 }}><p>Cannabis 420 Growers © 2026 All rights reserved.</p></footer>
    </>
  );
}