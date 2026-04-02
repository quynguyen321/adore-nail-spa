import React, { useState, useEffect } from 'react';
import './App.css';

const site = {
  name: 'Adore Nail Spa',
  phone: '(214) 555-0188',
  email: 'hello@adorenailspa.com',
  address: '177 W Farm to market rd 550 Suite #104, Mc Lendon Chisholm, TX 75032',
  hours: [
    'Mon - Fri: 10:00 AM - 7:00 PM',
    'Sat: 9:00 AM - 7:00 PM',
    'Sun: 11:00 AM - 5:00 PM',
  ],
};

const gallery = [
  { title: 'Soft Nude Elegance', note: 'Glossy almond shape with refined neutral polish.', image: '/images/nail1.jpg' },
  { title: 'Modern French Tips', note: 'Clean lines and timeless sophistication.', image: '/images/nail2.jpg' },
  { title: 'Bridal Glow', note: 'Delicate shimmer for romantic special moments.', image: '/images/nail3.jpg' },
  { title: 'Minimal Art Set', note: 'Subtle design details with an upscale finish.', image: '/images/nail4.jpg' },
  { title: 'Taupe Luxury', note: 'Warm earthy tones for everyday elegance.', image: '/images/nail5.jpg' },
  { title: 'Glossed Perfection', note: 'Polished shape and luminous neutral shine.', image: '/images/nail6.jpg' },
];

const navItems = [
  { label: 'Home', page: 'home', icon: '🏠' },
  { label: 'About Us', page: 'about', icon: '💁' },
  { label: 'Services', page: 'services', icon: '💅' },
  { label: 'Gallery', page: 'gallery', icon: '🖼️' },
  { label: 'Contact Us', page: 'contact', icon: '📞' },
];

/* ── Clock component ── */
function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <span>
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </span>
  );
}

/* ── Win2000 window wrapper ── */
function WinWindow({ title, icon = '💅', children, className = '' }) {
  return (
    <div className={`win-window ${className}`} style={{ marginBottom: 16 }}>
      <div className="win-titlebar">
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontSize: 12 }}>{icon}</span>
          {title}
        </span>
        <span style={{ display: 'flex', gap: 2 }}>
          <span className="win-titlebar-btn">_</span>
          <span className="win-titlebar-btn">&#9633;</span>
          <span className="win-titlebar-btn" style={{ fontWeight: 700, color: '#000' }}>&#x2715;</span>
        </span>
      </div>
      <div style={{ padding: 8 }}>{children}</div>
    </div>
  );
}

/* ── WinBtn ── */
function WinBtn({ children, onClick, primary = false, full = false }) {
  return (
    <button
      onClick={onClick}
      className={`win-btn ${primary ? 'win-btn-primary' : ''}`}
      style={{ width: full ? '100%' : undefined, justifyContent: full ? 'center' : undefined }}
    >
      {children}
    </button>
  );
}

/* ── WinInput ── */
function WinInput({ placeholder, type = 'text' }) {
  return <input type={type} placeholder={placeholder} className="win-input" />;
}

/* ── WinTextarea ── */
function WinTextarea({ placeholder }) {
  return <textarea placeholder={placeholder} className="win-textarea" rows={6} />;
}

/* ── WinGroupBox ── */
function WinGroupBox({ label, children }) {
  return (
    <div className="win-groupbox">
      <span className="win-groupbox-label">{label}</span>
      {children}
    </div>
  );
}

/* ── NavBar ── */
function NavBar({ currentPage, setCurrentPage }) {
  return (
    <>
      {/* Title bar */}
      <div className="win-titlebar" style={{ position: 'sticky', top: 0, zIndex: 100, padding: '3px 8px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 14 }}>💅</span>
          <strong>Adore Nail Spa — Luxury Beauty Services</strong>
        </span>
        <span style={{ display: 'flex', gap: 2 }}>
          <span className="win-titlebar-btn">_</span>
          <span className="win-titlebar-btn">&#9633;</span>
          <span className="win-titlebar-btn" style={{ fontWeight: 700 }}>&#x2715;</span>
        </span>
      </div>

      {/* Menu bar */}
      <div className="win-menubar" style={{ position: 'sticky', top: 28, zIndex: 99 }}>
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => setCurrentPage(item.page)}
            className={`win-menu-item ${currentPage === item.page ? 'active' : ''}`}
          >
            {item.label}
          </button>
        ))}
        <div style={{ marginLeft: 'auto' }}>
          <button className="win-menu-item" onClick={() => setCurrentPage('contact')}>
            📅 Book Appointment
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div
        className="win-raised"
        style={{
          background: '#d4d0c8',
          padding: '3px 6px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          borderTop: 'none',
          position: 'sticky',
          top: 50,
          zIndex: 98,
        }}
      >
        <WinBtn onClick={() => setCurrentPage('home')}>◀ Back</WinBtn>
        <WinBtn onClick={() => setCurrentPage('home')}>▶ Forward</WinBtn>
        <div
          style={{
            width: 1,
            height: 20,
            background: '#808080',
            borderRight: '1px solid #fff',
          }}
        />
        <WinBtn onClick={() => setCurrentPage('home')}>🏠 Home</WinBtn>
        <WinBtn onClick={() => setCurrentPage('gallery')}>🔍 Gallery</WinBtn>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 4, marginLeft: 8 }}>
          <span style={{ fontSize: 11, whiteSpace: 'nowrap' }}>Address:</span>
          <input
            readOnly
            value={`adorenailspa.com/${currentPage}`}
            className="win-input"
            style={{ flex: 1 }}
          />
          <WinBtn>Go</WinBtn>
        </div>
      </div>
    </>
  );
}

/* ── Footer ── */
function Footer({ setCurrentPage }) {
  return (
    <div style={{ padding: '0 8px 8px' }}>
      <WinWindow title="About Adore Nail Spa" icon="💅">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          <WinGroupBox label="Quick Links">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 4 }}>
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => setCurrentPage(item.page)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: '#000080',
                    textDecoration: 'underline',
                    fontSize: 11,
                    fontFamily: 'Tahoma, Arial, sans-serif',
                    padding: 0,
                  }}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </div>
          </WinGroupBox>
          <WinGroupBox label="Contact Information">
            <div style={{ fontSize: 11, lineHeight: '20px', marginTop: 4 }}>
              <div>📞 {site.phone}</div>
              <div>✉️ {site.email}</div>
              <div>📍 {site.address}</div>
            </div>
          </WinGroupBox>
          <WinGroupBox label="Business Hours">
            <div style={{ fontSize: 11, lineHeight: '20px', marginTop: 4 }}>
              {site.hours.map((h) => (
                <div key={h}>⏰ {h}</div>
              ))}
            </div>
          </WinGroupBox>
        </div>
      </WinWindow>
      {/* Status bar */}
      <div
        style={{
          background: '#d4d0c8',
          borderTop: '1px solid #808080',
          display: 'flex',
          gap: 8,
          padding: '2px 8px',
          fontSize: 11,
        }}
      >
        <span className="win-sunken" style={{ padding: '1px 8px', flex: 1 }}>
          ✅ Done &nbsp;|&nbsp; © 2026 Adore Nail Spa. All rights reserved.
        </span>
        <span className="win-sunken" style={{ padding: '1px 8px' }}>
          🌐 Internet
        </span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════ */
function HomePage({ setCurrentPage }) {
  return (
    <div style={{ padding: 8 }}>
      {/* Hero window */}
      <WinWindow title="Welcome to Adore Nail Spa" icon="💅">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'start' }}>
          <div>
            <div
              style={{
                background: 'linear-gradient(to right, #000080, #1084d0)',
                color: '#fff',
                padding: '12px 16px',
                marginBottom: 12,
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              💅 Elegance in Every Detail
            </div>
            <p style={{ fontSize: 12, lineHeight: '20px', margin: '0 0 12px' }}>
              Welcome to <strong>Adore Nail Spa</strong> — a serene beauty destination where refined
              nail care, soft tones, and elevated service come together in one polished experience.
            </p>
            <p style={{ fontSize: 11, color: '#444', lineHeight: '18px', margin: '0 0 16px' }}>
              📍 {site.address}
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <WinBtn primary onClick={() => setCurrentPage('services')}>
                💅 Explore Services
              </WinBtn>
              <WinBtn onClick={() => setCurrentPage('gallery')}>
                🖼️ View Gallery
              </WinBtn>
              <WinBtn onClick={() => setCurrentPage('contact')}>
                📅 Book Now
              </WinBtn>
            </div>
          </div>
          {/* Desktop icon panel */}
          <div
            className="win-sunken"
            style={{
              background: '#008080',
              padding: 12,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 4,
              minWidth: 160,
            }}
          >
            {navItems.map((item) => (
              <div
                key={item.page}
                className="win-icon"
                onClick={() => setCurrentPage(item.page)}
              >
                <span className="win-icon-img">{item.icon}</span>
                <span style={{ fontSize: 10 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </WinWindow>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 8 }}>
        {[
          { label: 'Luxury Care', value: '5-Star ⭐⭐⭐⭐⭐' },
          { label: 'Atmosphere', value: 'Calm & Neutral 🌿' },
          { label: 'Design Style', value: 'Elegant 💎' },
        ].map((item) => (
          <div key={item.label} className="win-window" style={{ padding: 0 }}>
            <div className="win-section-header">{item.label}</div>
            <div style={{ padding: '6px 10px', fontSize: 12, fontWeight: 700 }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Features row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 8 }}>
        {[
          { title: 'Refined Care', icon: '✨', text: 'Every service is detailed, gentle, and tailored to bring out effortless beauty.' },
          { title: 'Neutral Luxury', icon: '🌸', text: 'A soft color palette and upscale aesthetic create a serene, elegant spa atmosphere.' },
          { title: 'Custom Results', icon: '🎨', text: 'Choose timeless classics, modern neutrals, or custom art for your own signature look.' },
          { title: 'Flexible Hours', icon: '⏰', text: 'Open Mon–Sun with extended weekend hours for easy scheduling.' },
        ].map((item) => (
          <WinWindow key={item.title} title={item.title} icon={item.icon}>
            <p style={{ fontSize: 11, lineHeight: '18px', margin: 0 }}>{item.text}</p>
          </WinWindow>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   ABOUT PAGE
═══════════════════════════════════════════════════ */
function AboutPage() {
  return (
    <div style={{ padding: 8 }}>
      <WinWindow title="About Us — Adore Nail Spa" icon="💁">
        <div style={{ fontSize: 12, lineHeight: '20px' }}>
          <div className="win-section-header">About Adore Nail Spa</div>
          <p style={{ margin: '8px 0' }}>
            Adore Nail Spa was designed to feel warm, elegant, and restorative. We believe luxury
            is not loud. It is thoughtful service, beautiful details, and a soothing atmosphere
            that helps every guest feel cared for.
          </p>
        </div>
      </WinWindow>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 8 }}>
        <WinWindow title="Our Philosophy" icon="📋">
          <p style={{ fontSize: 11, lineHeight: '20px', margin: 0 }}>
            We focus on clean technique, elevated finishes, and a luxury experience centered around
            comfort. Every manicure, pedicure, lash, waxing, and head spa service is approached
            with precision and care.
          </p>
          <div className="win-separator" />
          <div className="win-progress" style={{ marginTop: 4 }}>
            <div className="win-progress-fill" style={{ width: '85%' }}>Quality 85%</div>
          </div>
          <div className="win-progress" style={{ marginTop: 4 }}>
            <div className="win-progress-fill" style={{ width: '95%' }}>Satisfaction 95%</div>
          </div>
          <div className="win-progress" style={{ marginTop: 4 }}>
            <div className="win-progress-fill" style={{ width: '90%' }}>Cleanliness 90%</div>
          </div>
        </WinWindow>

        <WinWindow title="Why Clients Love Us" icon="❤️">
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
            <thead>
              <tr style={{ background: '#000080', color: '#fff' }}>
                <th style={{ padding: '3px 8px', textAlign: 'left' }}>Feature</th>
                <th style={{ padding: '3px 8px', textAlign: 'left' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Neutral salon aesthetic', '✅ Available'],
                ['Personalized services', '✅ Available'],
                ['Special occasion prep', '✅ Available'],
                ['Attention to detail', '✅ Available'],
                ['Cleanliness standards', '✅ 5-Star'],
                ['Long-lasting results', '✅ Guaranteed'],
              ].map(([feat, status]) => (
                <tr key={feat} className="win-listitem" style={{ background: 'none' }}>
                  <td style={{ padding: '2px 8px' }}>{feat}</td>
                  <td style={{ padding: '2px 8px', color: '#006400' }}>{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </WinWindow>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   SERVICES PAGE
═══════════════════════════════════════════════════ */
function ServiceTable({ items }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
      <thead>
        <tr style={{ background: '#000080', color: '#fff' }}>
          <th style={{ padding: '3px 8px', textAlign: 'left' }}>Service</th>
          <th style={{ padding: '3px 8px', textAlign: 'right', whiteSpace: 'nowrap' }}>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.name} className="win-listitem" style={{ background: 'none', cursor: 'default' }}>
            <td style={{ padding: '2px 8px' }}>
              {item.name}
              {item.description && (
                <div style={{ fontSize: 10, color: '#555', marginTop: 1 }}>{item.description}</div>
              )}
              {item.styles && <div style={{ fontSize: 10, color: '#555' }}>Styles: {item.styles}</div>}
              {item.duration && <div style={{ fontSize: 10, color: '#000080' }}>Duration: {item.duration}</div>}
            </td>
            <td style={{ padding: '2px 8px', textAlign: 'right' }}>
              <span className="win-price-tag">{item.price}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ServicesPage({ setCurrentPage }) {
  const manicures = [
    { name: 'Classic Manicure', price: '$22', description: 'Cuticle soak, trim, shaping, cuticle care, massage, and polish.' },
    { name: 'Deluxe Manicure', price: '$35', description: 'Elevated classic with paraffin treatment, nourishing masque, and warm towels.' },
    { name: "A'dore Signature Manicure", price: '$55', description: 'Herbal neck wrap, warm hand soak, orange exfoliation, masque, collagen gloves, extended massage.' },
  ];
  const pedicures = [
    { name: 'Express Pedicure', price: '$32', description: 'Warm foot soak, nail shaping, cuticle care, scrub, massage, polish.' },
    { name: 'Lavender Touch', price: '$45', description: 'Lavender soak, callus removal, mask, hot stone massage.' },
    { name: 'Rose Petal', price: '$55', description: 'Rose bath soak, sugar scrub, paraffin wax, hot stone massage.' },
    { name: 'Double Shot Espresso', price: '$65', description: 'Coffee soak, espresso sugar scrub, coffee butter mask, hot stone massage.' },
    { name: 'Crème de Miel', price: '$73', description: 'Goat milk soak, honey sugar scrub, hydrating cream mask, collagen socks.' },
    { name: 'Seasonal Pedicure', price: '$81', description: 'Organic scrub, jelly soak, leg steamer, collagen socks, hot stone massage.' },
    { name: "A'dore CBD'ream Pedicure", price: '$95', description: 'CBD jelly heat therapy, herbal neck warmer, CBD sugar scrub, CBD-infused mask wraps.' },
  ];
  const headSpa = [
    { name: 'Adore Refresh', price: '$70', duration: '40 min', description: 'Deep-cleansing shampoo, nourishing conditioner, meridian release, complimentary tea.' },
    { name: 'Adore Nourish & Revive', price: '$95', duration: '60 min', description: 'Neck & shoulder relief, scalp relaxation, deep-cleansing shampoo, complimentary tea.' },
    { name: 'Adore Ultimate Bliss', price: '$150', duration: '90 min', description: 'Scented relaxation, eye mask, facial acupressure, scalp care, hand and arm massage.' },
  ];
  const fullSet = [
    { name: 'Gel X', price: '$70' }, { name: 'Builder Gel', price: '$70' },
    { name: 'Gel Manicure', price: '$41' }, { name: 'Dipping Powder', price: '$41' },
    { name: 'Dipping Powder with Manicure', price: '$55' }, { name: 'Dipping Powder French', price: '$55' },
    { name: 'Dipping Powder Ombre', price: '$60' }, { name: 'Acrylic Color', price: '$50' },
    { name: 'Acrylic / Overlay', price: '$45' }, { name: 'Pink & White', price: '$60' },
    { name: 'Ombre', price: '$60+' },
  ];
  const fillIn = [
    { name: 'Gel X', price: '$65' }, { name: 'Builder Gel', price: '$65' }, { name: 'Acrylic', price: '$35' },
  ];
  const addOns = [
    { name: 'French / Deep French', price: '$15+' }, { name: 'Length', price: '$5+' }, { name: 'Shaping', price: '$5+' },
  ];
  const waxFace = [
    { name: 'Eyebrows', price: '$12' }, { name: 'Lips', price: '$8' }, { name: 'Chin', price: '$12+' },
    { name: 'Cheeks', price: '$15' }, { name: 'Sideburns', price: '$15' }, { name: 'Full Face', price: '$50' },
    { name: 'Ears', price: '$30' }, { name: 'Nose', price: '$30' }, { name: 'Eyebrow Tint', price: '$20' },
  ];
  const waxArms = [
    { name: 'Under Arms', price: '$25+' }, { name: 'Half Arms', price: '$40+' }, { name: 'Full Arms', price: '$70+' },
  ];
  const waxBody = [
    { name: 'Legs', price: '$50+' }, { name: 'Lower Legs', price: '$80+' }, { name: 'Back', price: '$65+' },
  ];
  const lashFull = [
    { name: 'Classic Lash Extensions', price: '$100', styles: 'The Invisible • The Mascara • Lustrous Wet' },
    { name: 'Hybrid Lash Extensions', price: '$120', styles: 'YY Cross Fence • Soft Clover Fan' },
    { name: 'Volume Lash Extensions', price: '$150', styles: 'See-through Curtain • Mega Blackout Curtain' },
  ];
  const lash2Wk = [
    { name: 'Classic', price: '$50' }, { name: 'Hybrid', price: '$60' }, { name: 'Volume', price: '$70' },
  ];
  const lash3Wk = [
    { name: 'Classic', price: '$65' }, { name: 'Hybrid', price: '$75' }, { name: 'Volume', price: '$90' },
  ];
  const polish = [
    { name: 'Polish Change (Hands)', price: '$10' }, { name: 'Polish Change (Toes)', price: '$15' }, { name: 'Gel Polish Change', price: '$30' },
  ];
  const nailCare = [
    { name: 'Cut Down', price: '$10' }, { name: 'Nail Repair', price: '$5+' }, { name: 'Design', price: '$10+' },
  ];
  const extras = [
    { name: 'Nail Removal', price: '$10+' }, { name: 'Removal + Trim, Shape & Buff', price: '$15' },
    { name: 'Paraffin Wax', price: '$10' }, { name: 'Collagen Socks', price: '$10' }, { name: 'Extra Massage', price: '$2/min' },
  ];
  const kids = [
    { name: 'Polish Change', regular: '$8', gel: '$20', detail: 'Hands / Toes' },
    { name: 'Pedicure', regular: '$25', gel: '$45', detail: '' },
    { name: 'Manicure', regular: '$15', gel: '$35', detail: '' },
  ];

  return (
    <div style={{ padding: 8 }}>
      <WinWindow title="Services Menu — Adore Nail Spa" icon="💅">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
          <span className="win-raised" style={{ padding: '2px 10px', fontSize: 11, background: '#ffffc0' }}>
            ℹ️ Manicure: Add Gel +$20
          </span>
          <span className="win-raised" style={{ padding: '2px 10px', fontSize: 11, background: '#ffffc0' }}>
            ℹ️ Pedicure: Add Gel +$20
          </span>
        </div>
      </WinWindow>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 8 }}>
        <WinWindow title="Manicure — Elegant Hand Care" icon="💅">
          <ServiceTable items={manicures} />
        </WinWindow>

        <WinWindow title="Pedicure — Luxury Pedicure Menu" icon="🦶">
          <ServiceTable items={pedicures} />
        </WinWindow>

        <WinWindow title="Nail Enhancement — Full Set" icon="💎">
          <ServiceTable items={fullSet} />
        </WinWindow>

        <WinWindow title="Nail Enhancement — Fill-In" icon="🔧">
          <ServiceTable items={fillIn} />
          <div className="win-separator" />
          <div className="win-section-header">Add-Ons</div>
          <ServiceTable items={addOns} />
        </WinWindow>

        <WinWindow title="Waxing — Face" icon="✨">
          <ServiceTable items={waxFace} />
        </WinWindow>

        <WinWindow title="Waxing — Arms & Body" icon="💪">
          <div className="win-section-header">Arms & Underarms</div>
          <ServiceTable items={waxArms} />
          <div className="win-separator" />
          <div className="win-section-header">Legs & Body</div>
          <ServiceTable items={waxBody} />
        </WinWindow>

        <WinWindow title="Lash Extensions — Full Set" icon="👁️">
          <ServiceTable items={lashFull} />
        </WinWindow>

        <WinWindow title="Lash Extensions — Refills" icon="🔄">
          <div className="win-section-header">2-Week Refill</div>
          <ServiceTable items={lash2Wk} />
          <div className="win-separator" />
          <div className="win-section-header">3-Week Refill</div>
          <ServiceTable items={lash3Wk} />
        </WinWindow>

        <WinWindow title="Additional Services — Polish & Nail Care" icon="🎨">
          <div className="win-section-header">Polish Services</div>
          <ServiceTable items={polish} />
          <div className="win-separator" />
          <div className="win-section-header">Nail Care</div>
          <ServiceTable items={nailCare} />
          <div className="win-separator" />
          <div className="win-section-header">Enhancements</div>
          <ServiceTable items={extras} />
        </WinWindow>

        <WinWindow title="Kids Services — 10 & Under" icon="👧">
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
            <thead>
              <tr style={{ background: '#000080', color: '#fff' }}>
                <th style={{ padding: '3px 8px', textAlign: 'left' }}>Service</th>
                <th style={{ padding: '3px 8px', textAlign: 'right' }}>Regular</th>
                <th style={{ padding: '3px 8px', textAlign: 'right' }}>Gel</th>
              </tr>
            </thead>
            <tbody>
              {kids.map((k) => (
                <tr key={k.name} className="win-listitem" style={{ background: 'none', cursor: 'default' }}>
                  <td style={{ padding: '2px 8px' }}>
                    {k.name}
                    {k.detail && <div style={{ fontSize: 10, color: '#555' }}>{k.detail}</div>}
                  </td>
                  <td style={{ padding: '2px 8px', textAlign: 'right' }}>
                    <span className="win-price-tag">{k.regular}</span>
                  </td>
                  <td style={{ padding: '2px 8px', textAlign: 'right' }}>
                    <span className="win-price-tag">{k.gel}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </WinWindow>

        <WinWindow title="Head Spa — Relaxation & Scalp Care" icon="🧖">
          <ServiceTable items={headSpa} />
        </WinWindow>
      </div>

      <div style={{ textAlign: 'center', padding: '16px 0' }}>
        <WinBtn primary onClick={() => setCurrentPage('contact')}>
          📅 Book Your Appointment Now
        </WinBtn>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   GALLERY PAGE
═══════════════════════════════════════════════════ */
function GalleryPage() {
  const [selected, setSelected] = useState(null);
  return (
    <div style={{ padding: 8 }}>
      <WinWindow title="Gallery — Adore Nail Spa Photo Library" icon="🖼️">
        <p style={{ fontSize: 11, margin: '0 0 8px' }}>
          Explore elegant neutrals, soft luxury finishes, and timeless beauty. Double-click an image to view.
        </p>
        <div
          className="win-sunken"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 8,
            padding: 8,
            background: '#fff',
            minHeight: 200,
          }}
        >
          {gallery.map((item, index) => (
            <div
              key={item.title}
              onClick={() => setSelected(item)}
              style={{
                cursor: 'pointer',
                border: selected === item ? '2px solid #000080' : '2px solid transparent',
                background: selected === item ? '#cce5ff' : 'transparent',
                padding: 4,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.style.background = '#c0c0c0';
                  e.target.parentNode.innerHTML = `<div style="height:140px;display:flex;align-items:center;justify-content:center;font-size:32px;color:#808080;">💅</div><div style="font-size:10px;padding:2px;text-align:center">${item.title}</div>`;
                }}
              />
              <div style={{ fontSize: 11, marginTop: 3, fontWeight: 700 }}>Look {index + 1}</div>
              <div style={{ fontSize: 10, color: '#000080' }}>{item.title}</div>
            </div>
          ))}
        </div>

        {selected && (
          <div
            className="win-window"
            style={{ marginTop: 12, position: 'relative' }}
          >
            <div className="win-titlebar">
              <span>🖼️ {selected.title}</span>
              <button
                className="win-titlebar-btn"
                onClick={() => setSelected(null)}
                style={{ fontWeight: 700 }}
              >
                ✕
              </button>
            </div>
            <div style={{ padding: 8, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <img
                src={selected.image}
                alt={selected.title}
                style={{ width: 200, height: 200, objectFit: 'cover' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{selected.title}</div>
                <div style={{ fontSize: 11, lineHeight: '18px' }}>{selected.note}</div>
                <div className="win-separator" />
                <WinBtn onClick={() => setSelected(null)}>Close</WinBtn>
              </div>
            </div>
          </div>
        )}
      </WinWindow>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   CONTACT PAGE
═══════════════════════════════════════════════════ */
function ContactPage() {
  return (
    <div style={{ padding: 8 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 8,
          alignItems: 'start',
        }}
      >
        <div>
          <WinWindow title="Contact Information" icon="📞">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
              <tbody>
                {[
                  ['☎️ Phone', site.phone],
                  ['✉️ Email', site.email],
                  ['📍 Address', site.address],
                ].map(([label, value]) => (
                  <tr key={label} style={{ borderBottom: '1px dotted #c0c0c0' }}>
                    <td style={{ padding: '4px 8px', fontWeight: 700, whiteSpace: 'nowrap', width: 90 }}>{label}</td>
                    <td style={{ padding: '4px 8px', color: '#000080' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </WinWindow>

          <WinWindow title="Business Hours" icon="⏰">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
              <thead>
                <tr style={{ background: '#000080', color: '#fff' }}>
                  <th style={{ padding: '3px 8px', textAlign: 'left' }}>Day</th>
                  <th style={{ padding: '3px 8px', textAlign: 'left' }}>Hours</th>
                </tr>
              </thead>
              <tbody>
                {site.hours.map((line) => {
                  const [day, hrs] = line.split(': ');
                  return (
                    <tr key={line} className="win-listitem" style={{ background: 'none', cursor: 'default' }}>
                      <td style={{ padding: '2px 8px', fontWeight: 700 }}>{day}</td>
                      <td style={{ padding: '2px 8px' }}>{hrs}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </WinWindow>

          <WinWindow title="Map Location" icon="🗺️">
            <div
              className="win-sunken"
              style={{
                background: '#008080',
                height: 120,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 11,
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <span style={{ fontSize: 28 }}>🗺️</span>
              <span>Mc Lendon Chisholm, TX 75032</span>
              <WinBtn>Open in Maps</WinBtn>
            </div>
          </WinWindow>
        </div>

        <WinWindow title="Send Us a Message" icon="✉️">
          <div style={{ marginBottom: 8, fontSize: 11 }}>
            Ask about services, pricing, event bookings, or preferred appointment times.
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
          >
            <WinGroupBox label="Your Information">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 6 }}>
                <div>
                  <label className="win-label">Name:</label>
                  <WinInput placeholder="Your name" />
                </div>
                <div>
                  <label className="win-label">Email:</label>
                  <WinInput type="email" placeholder="Your email" />
                </div>
                <div>
                  <label className="win-label">Phone:</label>
                  <WinInput placeholder="Your phone number" />
                </div>
              </div>
            </WinGroupBox>
            <WinGroupBox label="Message">
              <div style={{ marginTop: 6 }}>
                <label className="win-label">Tell us what service you&apos;re interested in:</label>
                <WinTextarea placeholder="I am interested in..." />
              </div>
            </WinGroupBox>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <WinBtn primary>📨 Send Inquiry</WinBtn>
              <WinBtn>Reset</WinBtn>
            </div>
          </form>
        </WinWindow>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   ROOT APP
═══════════════════════════════════════════════════ */
export default function AdoreNailSpaWebsite() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#008080',
        fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
        fontSize: 11,
        paddingBottom: 38,
      }}
    >
      {/* Main window */}
      <div
        className="win-window"
        style={{
          margin: '8px',
          minHeight: 'calc(100vh - 54px)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Content area */}
        <div
          className="win-sunken"
          style={{ flex: 1, background: '#d4d0c8', overflow: 'auto' }}
        >
          {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'services' && <ServicesPage setCurrentPage={setCurrentPage} />}
          {currentPage === 'gallery' && <GalleryPage />}
          {currentPage === 'contact' && <ContactPage />}
        </div>

        <Footer setCurrentPage={setCurrentPage} />
      </div>

      {/* Taskbar */}
      <div className="win-taskbar">
        <button className="win-start-btn">
          <span style={{ fontSize: 14 }}>🪟</span>
          Start
        </button>
        <div
          style={{
            width: 1,
            height: 20,
            background: '#808080',
            borderRight: '1px solid #fff',
            margin: '0 2px',
          }}
        />
        <button
          className="win-raised"
          style={{
            background: '#d4d0c8',
            border: 'none',
            padding: '2px 10px',
            fontSize: 11,
            cursor: 'pointer',
            height: 22,
            fontFamily: 'Tahoma, Arial, sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            borderTop: '1px solid #808080',
            borderLeft: '1px solid #808080',
            borderRight: '1px solid #fff',
            borderBottom: '1px solid #fff',
          }}
        >
          💅 Adore Nail Spa
        </button>
        <div className="win-taskbar-clock">
          <Clock />
        </div>
      </div>
    </div>
  );
}
