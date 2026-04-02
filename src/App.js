import React, { useState } from 'react';

const site = {
  name: 'Adore Nail Spa',
  phone: '(214) 555-0188',
  email: 'hello@adorenailspa.com',
  address: '177 W Farm to market  rd 550 Suite #104 , Mc Lendon Chisholm, Tx 75032',
  hours: [
    'Mon - Fri: 10:00 AM - 7:00 PM',
    'Sat: 9:00 AM - 7:00 PM',
    'Sun: 11:00 AM - :00 PM',
  ],
};

const gallery = [
  {
    title: 'Soft Nude Elegance',
    note: 'Glossy almond shape with refined neutral polish.',
    image: '/images/nail1.jpg',
  },
  {
    title: 'Modern French Tips',
    note: 'Clean lines and timeless sophistication.',
    image: '/images/nail2.jpg',
  },
  {
    title: 'Bridal Glow',
    note: 'Delicate shimmer for romantic special moments.',
    image: '/images/nail3.jpg',
  },
  {
    title: 'Minimal Art Set',
    note: 'Subtle design details with an upscale finish.',
    image: '/images/nail4.jpg',
  },
  {
    title: 'Taupe Luxury',
    note: 'Warm earthy tones for everyday elegance.',
    image: '/images/nail5.jpg',
  },
  {
    title: 'Glossed Perfection',
    note: 'Polished shape and luminous neutral shine.',
    image: '/images/nail6.jpg',
  },
];

const nav = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Gallery', page: 'gallery' },
  { label: 'Contact Us', page: 'contact' },
];

function Icon({ children }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-stone-50 text-stone-700">
      {children}
    </div>
  );
}

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-[28px] border border-stone-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function Button({ children, onClick, full = false, outline = false, href }) {
  const className = [
    'rounded-full px-6 py-3 text-sm uppercase tracking-[0.18em] transition inline-flex items-center justify-center',
    full ? 'w-full' : '',
    outline
      ? 'border border-stone-300 bg-transparent text-stone-700 hover:bg-stone-100'
      : 'bg-stone-700 text-white hover:bg-stone-800',
  ].join(' ');

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

function Input({ placeholder, type = 'text' }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-12 w-full rounded-2xl border border-stone-300 bg-white px-4 text-stone-700 outline-none focus:border-stone-500"
    />
  );
}

function Textarea({ placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      className="min-h-[140px] w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-stone-700 outline-none focus:border-stone-500"
    />
  );
}

function Logo() {
  return (
    <div className="text-left">
      <div className="text-xl font-semibold tracking-[0.35em] text-stone-700 md:text-2xl">
        ADORE
      </div>
      <div className="mt-1 text-[10px] tracking-[0.45em] text-stone-500 md:text-xs">
        NAIL SPA
      </div>
    </div>
  );
}

function NavBar({ currentPage, setCurrentPage }) {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#f7f1ea]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <button type="button" onClick={() => setCurrentPage('home')}>
          <Logo />
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <button
              key={item.page}
              type="button"
              onClick={() => setCurrentPage(item.page)}
              className={`text-sm uppercase tracking-[0.18em] transition ${
                currentPage === item.page ? 'text-stone-900' : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Button href={site.bookingLink}>Book Now</Button>
      </div>
    </header>
  );
}

function Footer({ setCurrentPage }) {
  return (
    <footer className="border-t border-stone-200 bg-[#f3ece4]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-7 text-stone-600">
              A luxury neutral-toned nail destination offering elegant manicures,
              restorative pedicures, head spa, waxing, lashes, and polished beauty in
              a calming spa experience.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-stone-500">Quick Links</h3>
            <div className="mt-4 space-y-3">
              {nav.map((item) => (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => setCurrentPage(item.page)}
                  className="block text-sm text-stone-700 hover:text-stone-900"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-stone-500">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-stone-700">
              <p>{site.phone}</p>
              <p>{site.email}</p>
              <p>{site.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-200 pt-6 text-sm text-stone-500">
          © 2026 Adore Nail Spa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,199,185,0.35),transparent_32%)]" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-stone-300 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.24em] text-stone-500">
              Neutral Luxury Nail Experience
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-tight text-stone-800 md:text-6xl lg:text-7xl">
              Elegance in every detail.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
              Welcome to Adore Nail Spa, a serene beauty destination where refined nail
              care, soft tones, and elevated service come together in one polished
              experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button onClick={() => setCurrentPage('services')}>Explore Services</Button>
              <Button onClick={() => setCurrentPage('gallery')} outline>
                View Gallery
              </Button>
            </div>
        

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {[
                { label: 'Luxury Care', value: '5-Star' },
                { label: 'Atmosphere', value: 'Calm & Neutral' },
                { label: 'Design', value: 'Elegant' },
              ].map((item) => (
                <Card key={item.label} className="bg-white/70">
                  <div className="p-5">
                    <div className="text-2xl font-semibold text-stone-800">{item.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                      {item.label}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-[32px] border border-stone-200 bg-gradient-to-br from-[#efe5da] via-[#faf7f2] to-[#ddd0c3] p-6 shadow-2xl">
              <div className="grid gap-5">
                <div className="rounded-[24px] bg-white/80 p-8 shadow-sm">
                  <div className="text-sm uppercase tracking-[0.2em] text-stone-500">
                    Signature Beauty Ritual
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold text-stone-800">
                    Polished, graceful, unforgettable
                  </h2>
                  <p className="mt-4 leading-7 text-stone-600">
                    From natural manicures to head spa and custom event services, every
                    appointment is designed to feel relaxed, personal, and beautifully
                    finished.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Card className="bg-[#f7f1ea]">
                    <div className="p-6">
                      <Icon>⏰</Icon>
                      <p className="mt-3 text-lg font-medium text-stone-800">Flexible Hours</p>
                      <p className="mt-2 text-sm text-stone-600">
                        Perfect for weekday appointments and weekend self-care.
                      </p>
                    </div>
                  </Card>

                  <Card className="bg-[#fbf8f4]">
                    <div className="p-6">
                      <Icon>📍</Icon>
                      <p className="mt-3 text-lg font-medium text-stone-800">Easy to Visit</p>
                      <p className="mt-2 text-sm text-stone-600">
                        A welcoming luxury salon space designed for calm comfort.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="bg-[#fcfaf7]">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.22em] text-stone-500">About Us</p>
          <h1 className="mt-4 text-5xl font-semibold text-stone-800">
            A calm, polished space created for modern beauty.
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Adore Nail Spa was designed to feel warm, elegant, and restorative. We
            believe luxury is not loud. It is thoughtful service, beautiful details,
            and a soothing atmosphere that helps every guest feel cared for.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-stone-800">Our Philosophy</h2>
              <p className="mt-4 leading-8 text-stone-600">
                We focus on clean technique, elevated finishes, and a luxury experience
                centered around comfort. Every manicure, pedicure, lash, waxing, and
                head spa service is approached with precision and care.
              </p>
            </div>
          </Card>

          <Card className="bg-[#f6efe8]">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-stone-800">Why Clients Love Us</h2>
              <ul className="mt-4 space-y-4 leading-7 text-stone-600">
                <li>• Soft, neutral, sophisticated salon aesthetic</li>
                <li>• Personalized services for everyday elegance and special occasions</li>
                <li>• Attention to detail, comfort, cleanliness, and long-lasting results</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}

function ServicesPage() {
  const manicures = [
    {
      name: 'Classic Manicure',
      price: '$22',
      description:
        'A traditional manicure including cuticle soak, trim, shaping, cuticle care, a light massage, and your choice of polish.',
    },
    {
      name: 'Deluxe Manicure',
      price: '$35',
      description:
        'An elevated classic manicure with paraffin treatment, nourishing masque, and warm towels for deeper hydration and relaxation.',
    },
    {
      name: 'A’dore Signature Manicure',
      price: '$55',
      description:
        'A luxurious stress-relieving manicure with herbal neck wrap, warm hand soak, nail and cuticle care, fresh orange exfoliation, rich moisturizing masque, hot towel wrap, collagen gloves, extended massage, neck and shoulder massage, and your choice of polish.',
    },
  ];

  const pedicures = [
    {
      name: 'Express Pedicure',
      price: '$32',
      description:
        'Our essential pedicure includes a warm foot soak, nail shaping, cuticle care, exfoliating scrub, moisturizing massage, and your choice of polish.',
    },
    {
      name: 'Lavender Touch',
      price: '$45',
      description:
        'A calming lavender soak followed by callus removal, nail shaping, and meticulous cuticle care. Finished with a soothing mask, hot stone massage, and warm towel wrap for total relaxation.',
    },
    {
      name: 'Rose Petal',
      price: '$55',
      description:
        'A luxurious rose bath soak with callus care, sugar scrub, paraffin wax hydration, and a revitalizing hot stone massage using signature rose lotion.',
    },
    {
      name: 'Double Shot Espresso',
      price: '$65',
      description:
        'Coffee and milk soak, espresso sugar scrub, coffee butter mask, collagen socks, and a calming hot stone massage finished with a warm towel wrap.',
    },
    {
      name: 'Crème de Miel',
      price: '$73',
      description:
        'A nourishing goat milk soak, honey sugar scrub, hydrating cream mask, collagen socks, hot stone massage, and warm towel wrap for deep softness and glow.',
    },
    {
      name: 'Seasonal Pedicure',
      price: '$81',
      description:
        'A limited-time seasonal pedicure featuring organic scrub, hydrating mask, jelly soak, leg steamer, collagen socks, hot stone massage, plus relaxing head, neck, and shoulder massage.',
    },
    {
      name: 'A’dore CBD’ream Pedicure',
      price: '$95',
      description:
        'CBD fluffy jelly heat therapy soak, herbal neck warmer, callus treatment, CBD sugar scrub, CBD-infused mask wraps, hot stone massage, collagen lotion, and extended neck, head, and shoulder massage.',
    },
  ];

  const headSpa = [
    {
      name: 'Adore Refresh',
      price: '$70',
      duration: '40 Minutes',
      description:
        'A relaxing refresh treatment that blends hair care and relaxation with soothing mental relaxation and meridian release techniques, two rounds of deep-cleansing shampoo, nourishing conditioner, refreshing rinse, drying option, and complimentary tea.',
    },
    {
      name: 'Adore Nourish & Revive',
      price: '$95',
      duration: '60 Minutes',
      description:
        'Revitalize your hair and relax your mind with soothing-scented relaxation, neck and shoulder tension relief, two rounds of deep-cleansing shampoo, nourishing conditioner, gentle scalp relaxation, refreshing rinse, drying option, and complimentary tea.',
    },
    {
      name: 'Adore Ultimate Bliss',
      price: '$150',
      duration: '90 Minutes',
      description:
        'A luxurious full head spa ritual featuring scented relaxation and meridian release, eye mask care, neck and shoulder tension relief, facial acupressure and cleansing, deep-cleansing shampoo, nourishing conditioner, scalp relaxation, herbal water circulation, hand and arm massage, drying option, and complimentary tea.',
    },
  ];

  const fullSet = [
    { name: 'Gel X', price: '$70' },
    { name: 'Builder Gel', price: '$70' },
    { name: 'Gel Manicure', price: '$41' },
    { name: 'Dipping Powder', price: '$41' },
    { name: 'Dipping Powder with Manicure', price: '$55' },
    { name: 'Dipping Powder French', price: '$55' },
    { name: 'Dipping Powder Ombre', price: '$60' },
    { name: 'Acrylic Color', price: '$50' },
    { name: 'Acrylic / Overlay', price: '$45' },
    { name: 'Pink & White', price: '$60' },
    { name: 'Ombre', price: '$60+' },
  ];

  const fillIn = [
    { name: 'Gel X', price: '$65' },
    { name: 'Builder Gel', price: '$65' },
    { name: 'Acrylic', price: '$35' },
  ];

  const addOns = [
    { name: 'French / Deep French', price: '$15+' },
    { name: 'Length', price: '$5+' },
    { name: 'Shaping', price: '$5+' },
  ];

  const additionalServices = {
    polish: [
      { name: 'Polish Change (Hands)', price: '$10' },
      { name: 'Polish Change (Toes)', price: '$15' },
      { name: 'Gel Polish Change', price: '$30' },
    ],
    nailCare: [
      { name: 'Cut Down', price: '$10' },
      { name: 'Nail Repair', price: '$5+' },
      { name: 'Design', price: '$10+' },
    ],
    extras: [
      { name: 'Nail Removal', price: '$10+' },
      { name: 'Removal + Trim, Shape & Buff', price: '$15' },
      { name: 'Paraffin Wax', price: '$10' },
      { name: 'Collagen Socks', price: '$10' },
      { name: 'Extra Massage', price: '$2 / min' },
    ],
  };

  const waxing = {
    face: [
      { name: 'Eyebrows', price: '$12' },
      { name: 'Lips', price: '$8' },
      { name: 'Chin', price: '$12+' },
      { name: 'Cheeks', price: '$15' },
      { name: 'Sideburns', price: '$15' },
      { name: 'Full Face', price: '$50' },
      { name: 'Ears', price: '$30' },
      { name: 'Nose', price: '$30' },
      { name: 'Eyebrow Tint', price: '$20' },
    ],
    arms: [
      { name: 'Under Arms', price: '$25+' },
      { name: 'Half Arms', price: '$40+' },
      { name: 'Full Arms', price: '$70+' },
    ],
    body: [
      { name: 'Legs', price: '$50+' },
      { name: 'Lower Legs', price: '$80+' },
      { name: 'Back', price: '$65+' },
    ],
  };

  const lashes = {
    fullSet: [
      {
        name: 'Classic Lash Extensions',
        price: '$100',
        styles: 'The Invisible • The Mascara • Lustrous Wet',
      },
      {
        name: 'Hybrid Lash Extensions',
        price: '$120',
        styles: 'YY Cross Fence • Soft Clover Fan',
      },
      {
        name: 'Volume Lash Extensions',
        price: '$150',
        styles: 'See-through Curtain • Mega Blackout Curtain',
      },
    ],
    refill2Week: [
      { name: 'Classic', price: '$50' },
      { name: 'Hybrid', price: '$60' },
      { name: 'Volume', price: '$70' },
    ],
    refill3Week: [
      { name: 'Classic', price: '$65' },
      { name: 'Hybrid', price: '$75' },
      { name: 'Volume', price: '$90' },
    ],
  };

  const kidsServices = [
    {
      name: 'Polish Change',
      regular: '$8',
      gel: '$20',
      detail: 'Hands / Toes',
    },
    {
      name: 'Pedicure',
      regular: '$25',
      gel: '$45',
      detail: '',
    },
    {
      name: 'Manicure',
      regular: '$15',
      gel: '$35',
      detail: '',
    },
  ];

  return (
    <main className="bg-[#fcfaf7]">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.22em] text-stone-500">Services</p>
          <h1 className="mt-4 text-5xl font-semibold text-stone-800">
            Signature Treatments
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Discover elevated self-care with our manicure, pedicure, nail
            enhancement, waxing, lash, kids, and head spa experiences,
            thoughtfully designed to help you relax, restore, and feel beautifully
            renewed.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <div className="inline-block rounded-full bg-stone-100 px-5 py-2 text-sm text-stone-700">
            Manicure Add Gel +$20
          </div>
          <div className="inline-block rounded-full bg-stone-100 px-5 py-2 text-sm text-stone-700">
            Pedicure Add Gel +$20
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-8 border-b border-stone-200 pb-4">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Manicure</p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-800">Elegant Hand Care</h2>
          </div>

          <div className="grid gap-6">
            {manicures.map((service) => (
              <div key={service.name} className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-semibold text-stone-800">{service.name}</h3>
                    <p className="mt-3 leading-7 text-stone-600">{service.description}</p>
                  </div>
                  <div className="shrink-0 rounded-full bg-stone-100 px-4 py-2 text-lg font-medium text-stone-700">
                    {service.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 border-b border-stone-200 pb-4">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Pedicure</p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-800">Luxury Pedicure Menu</h2>
          </div>

          <div className="grid gap-6">
            {pedicures.map((service) => (
              <div key={service.name} className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-semibold text-stone-800">{service.name}</h3>
                    <p className="mt-3 leading-7 text-stone-600">{service.description}</p>
                  </div>
                  <div className="shrink-0 rounded-full bg-stone-100 px-4 py-2 text-lg font-medium text-stone-700">
                    {service.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 border-b border-stone-200 pb-4">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Nail Enhancement</p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-800">
              Full Set, Fill-In & Add-Ons
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-stone-800">Full Set</h3>
              <div className="mt-6 space-y-4">
                {fullSet.map((item) => (
                  <div key={item.name} className="flex items-center justify-between border-b border-stone-100 pb-3">
                    <span className="text-stone-700">{item.name}</span>
                    <span className="font-medium text-stone-800">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-stone-800">Fill-In</h3>
              <div className="mt-6 space-y-4">
                {fillIn.map((item) => (
                  <div key={item.name} className="flex items-center justify-between border-b border-stone-100 pb-3">
                    <span className="text-stone-700">{item.name}</span>
                    <span className="font-medium text-stone-800">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-[#f7f1ea] p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-stone-800">Add-Ons</h3>
              <div className="mt-6 space-y-4">
                {addOns.map((item) => (
                  <div key={item.name} className="flex items-center justify-between border-b border-stone-200 pb-3">
                    <span className="text-stone-700">{item.name}</span>
                    <span className="font-medium text-stone-800">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 border-b border-stone-200 pb-4">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Additional Services</p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-800">Finishing Touches & Add-Ons</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-800">Polish Services</h3>
              <div className="mt-6 space-y-4">
                {additionalServices.polish.map((item) => (
                  <div key={item.name} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-800">Nail Care</h3>
              <div className="mt-6 space-y-4">
                {additionalServices.nailCare.map((item) => (
                  <div key={item.name} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-[#f7f1ea] p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-800">Enhancements</h3>
              <div className="mt-6 space-y-4">
                {additionalServices.extras.map((item) => (
                  <div key={item.name} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 border-b border-stone-200 pb-4">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Waxing</p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-800">Smooth Skin Services</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-800">Face</h3>
              <div className="mt-6 space-y-4">
                {waxing.face.map((item) => (
                  <div key={item.name} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-800">Arms & Underarms</h3>
              <div className="mt-6 space-y-4">
                {waxing.arms.map((item) => (
                  <div key={item.name} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-[#f7f1ea] p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-800">Legs & Body</h3>
              <div className="mt-6 space-y-4">
                {waxing.body.map((item) => (
                  <div key={item.name} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 border-b border-stone-200 pb-4">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Eyelashes</p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-800">Lash Extensions & Refills</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-stone-800">Full Set</h3>
              <div className="mt-6 space-y-6">
                {lashes.fullSet.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between">
                      <span className="font-medium text-stone-800">{item.name}</span>
                      <span>{item.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-stone-600">{item.styles}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-[#f7f1ea] p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-stone-800">Refill</h3>

              <div className="mt-6">
                <p className="text-sm uppercase tracking-[0.18em] text-stone-500">2 Week Refill</p>
                <div className="mt-3 space-y-3">
                  {lashes.refill2Week.map((item) => (
                    <div key={item.name} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm uppercase tracking-[0.18em] text-stone-500">3 Week Refill</p>
                <div className="mt-3 space-y-3">
                  {lashes.refill3Week.map((item) => (
                    <div key={item.name} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 border-b border-stone-200 pb-4">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Kids Services</p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-800">For Little Guests (10 & Under)</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {kidsServices.map((item) => (
              <div key={item.name} className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-stone-800">{item.name}</h3>
                {item.detail && <p className="mt-2 text-sm text-stone-500">{item.detail}</p>}
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between">
                    <span>Regular</span>
                    <span>{item.regular}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gel</span>
                    <span>{item.gel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 border-b border-stone-200 pb-4">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Head Spa</p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-800">Relaxation & Scalp Care Rituals</h2>
          </div>

          <div className="grid gap-6">
            {headSpa.map((service) => (
              <div key={service.name} className="rounded-[28px] border border-stone-200 bg-[#f7f1ea] p-8 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-semibold text-stone-800">{service.name}</h3>
                      <span className="rounded-full border border-stone-300 px-3 py-1 text-xs uppercase tracking-[0.18em] text-stone-600">
                        {service.duration}
                      </span>
                    </div>
                    <p className="mt-3 leading-7 text-stone-600">{service.description}</p>
                  </div>
                  <div className="shrink-0 rounded-full bg-white px-4 py-2 text-lg font-medium text-stone-700">
                    {service.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button href={site.bookingLink}>Book Your Appointment</Button>
        </div>
      </section>
    </main>
  );
}

function GalleryPage() {
  return (
    <main className="bg-[#fcfaf7]">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.22em] text-stone-500">Gallery</p>
          <h1 className="mt-4 text-5xl font-semibold text-stone-800">
            A curated look at our signature style.
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Explore elegant neutrals, soft luxury finishes, and timeless beauty
            designed to feel elevated and effortlessly beautiful.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, index) => (
            <Card key={item.title} className="overflow-hidden">
              <div className="relative h-80">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-[24px] bg-white/85 p-5 shadow-sm backdrop-blur-sm">
                    <div className="text-xs uppercase tracking-[0.2em] text-stone-500">
                      Look {index + 1}
                    </div>
                    <h2 className="mt-2 text-2xl font-semibold text-stone-800">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{item.note}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8 lg:py-24">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-stone-500">Contact Us</p>
          <h1 className="mt-4 text-5xl font-semibold text-stone-800">
            Let’s plan your next luxury appointment.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Reach out for appointments, questions, bridal bookings, or custom service
            requests. We would love to welcome you to Adore Nail Spa.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Card>
              <div className="p-6">
                <Icon>☎</Icon>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-stone-500">Phone</p>
                <p className="mt-2 text-lg font-medium text-stone-800">{site.phone}</p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <Icon>✉</Icon>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-stone-500">Email</p>
                <p className="mt-2 break-all text-lg font-medium text-stone-800">{site.email}</p>
              </div>
            </Card>

            <Card className="sm:col-span-2">
              <div className="p-6">
                <Icon>📍</Icon>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-stone-500">Location</p>
                <p className="mt-2 text-lg font-medium text-stone-800">{site.address}</p>
              </div>
            </Card>

            <Card className="sm:col-span-2">
              <div className="p-6">
                <Icon>⏰</Icon>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-stone-500">Hours</p>
                <div className="mt-2 space-y-2 text-stone-700">
                  {site.hours.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-10 lg:mt-0">
          <Card className="shadow-lg">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-stone-800">Send us a message</h2>
              <p className="mt-3 leading-7 text-stone-600">
                Ask about services, pricing, event bookings, or preferred appointment
                times.
              </p>
              <p className="mt-3 text-sm text-stone-500">
                Or email us directly at{' '}
                <span className="font-medium text-stone-700">{site.email}</span>
              </p>

              <form className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.18em] text-stone-500">
                    Name
                  </label>
                  <Input placeholder="Your name" />
                </div>

                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.18em] text-stone-500">
                    Email
                  </label>
                  <Input type="email" placeholder="Your email" />
                </div>

                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.18em] text-stone-500">
                    Phone
                  </label>
                  <Input placeholder="Your phone number" />
                </div>

                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.18em] text-stone-500">
                    Message
                  </label>
                  <Textarea placeholder="Tell us what service you're interested in" />
                </div>

                <Button href={`mailto:${site.email}`} full>
                  Email Us
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#f7f1ea] text-stone-700">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'gallery' && <GalleryPage />}
      {currentPage === 'contact' && <ContactPage />}

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}