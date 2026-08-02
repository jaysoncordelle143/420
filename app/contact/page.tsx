import Navbar from '@/components/Navbar';

export default function ContactPage() {
  const contacts = [
    { title: 'Telegram Admin', value: '@ghostreactor19gmailcom', href: 'https://t.me/ghostreactor19gmailcom', icon: '✈️' },
    { title: 'Telegram Channel', value: 't.me/canabislove12', href: 'https://t.me/canabislove12', icon: '📢' },
    { title: 'WhatsApp', value: '+44 7423 021393', href: 'https://wa.me/447423021393', icon: '' },
    { title: 'Email', value: 'ad707duarte@gmail.com', href: 'mailto:ad707duarte@gmail.com', icon: '📧' },
  ];

  return (
    <>
      <div className="floating-leaves">{[...Array(10)].map((_, i) => (<div key={i} className="leaf"></div>))}</div>
      <Navbar cartCount={0} />
      
      <section className="section" style={{ position: 'relative', zIndex: 1, paddingTop: '2rem' }}>
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">Have questions? Reach out to our support team.</p>
        
        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <a key={index} href={contact.href} className="contact-card" style={{ textDecoration: 'none', color: 'inherit', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{contact.icon}</div>
              <h3 style={{ color: 'var(--heading-color)', marginBottom: '0.5rem' }}>{contact.title}</h3>
              <p style={{ color: 'var(--text-color)', fontSize: '0.9rem' }}>{contact.value}</p>
            </a>
          ))}
        </div>
      </section>
      <footer className="footer"><p>Cannabis 420 Growers © 2026 All rights reserved.</p></footer>
    </>
  );
}
