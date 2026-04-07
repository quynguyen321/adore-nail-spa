import React, { useEffect, useState } from 'react';

const site = {
  name: 'Adore Nail Spa',
  phone: '(214) 555-0188',
  email: 'hello@adorenailspa.com',
  bookingLink: 'mailto:hello@adorenailspa.com?subject=Book%20an%20Appointment',
  address: '177 W Farm to Market Rd 550, Suite 104, McLendon-Chisholm, TX 75032',
  hours: [
    'Mon - Fri: 10:00 AM - 7:00 PM',
    'Sat: 9:00 AM - 7:00 PM',
    'Sun: 11:00 AM - 5:00 PM',
  ],
};

const gallery = [
  {
    title: 'Golden Star Detail',
    note: 'Soft nude almond nails finished with sculpted gold tips and delicate star accents.',
    image: '/gallery-1.jpg',
  },
  {
    title: 'Milky Nude Glow',
    note: 'A smooth blush-toned ombre set with a glossy finish for an effortlessly clean look.',
    image: '/gallery-2.jpg',
  },
  {
    title: 'Velvet Taupe',
    note: 'Matte mauve-taupe almond nails that feel cozy, modern, and softly elevated.',
    image: '/gallery-3.jpg',
  },
  {
    title: 'Minimal Gold Lines',
    note: 'A matte nude set with fine white curves and gold detailing for a sleek editorial finish.',
    image: '/gallery-4.jpg',
  },
  {
    title: 'Ombre Chrome Almond',
    note: 'A soft ombre base finished with a glossy chrome sheen for a sleek, luminous look.',
    image: '/gallery-5.jpg',
  },
  {
    title: 'Champagne Nude',
    note: 'Glossy beige almond nails with tiny gold foil accents for understated luxury.',
    image: '/gallery-6.png',
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
    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/75 text-stone-700 shadow-sm backdrop-blur">
      {children}
    </div>
  );
}

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-[28px] border border-stone-200/90 bg-white/92 shadow-[0_18px_45px_rgba(120,96,74,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(120,96,74,0.14)] ${className}`}>
      {children}
    </div>
  );
}

function Button({ children, onClick, full = false, outline = false, href }) {
  const className = [
    'rounded-full px-6 py-3 text-sm uppercase tracking-[0.18em] transition duration-300 inline-flex items-center justify-center shadow-sm',
    full ? 'w-full sm:w-auto' : '',
    outline
      ? 'border border-stone-300 bg-white/50 text-stone-700 hover:-translate-y-0.5 hover:bg-white'
      : 'bg-stone-700 text-white hover:-translate-y-0.5 hover:bg-stone-800',
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
      className="h-12 w-full rounded-2xl border border-stone-300 bg-white/90 px-4 text-stone-700 outline-none transition focus:border-stone-500 focus:shadow-[0_0_0_4px_rgba(214,199,185,0.3)]"
    />
  );
}

function Textarea({ placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      className="min-h-[140px] w-full rounded-2xl border border-stone-300 bg-white/90 px-4 py-3 text-stone-700 outline-none transition focus:border-stone-500 focus:shadow-[0_0_0_4px_rgba(214,199,185,0.3)]"
    />
  );
}

function Logo() {
  return (
    <img
      src="/adore-logo.png"
      alt="Adore Nail Spa logo"
      className="brand-logo h-14 w-auto object-contain sm:h-16"
    />
  );
}

function NavBar({ currentPage, setCurrentPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f7f1ea]/75 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/80 bg-white/75 px-4 py-3 shadow-[0_12px_35px_rgba(120,96,74,0.08)] backdrop-blur sm:px-6">
          <button type="button" onClick={() => handleNavClick('home')}>
            <Logo />
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <button
                key={item.page}
                type="button"
                onClick={() => handleNavClick(item.page)}
                className={`text-sm uppercase tracking-[0.18em] transition ${
                  currentPage === item.page
                    ? 'text-stone-900'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href={site.bookingLink}>Book Now</Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-700 transition hover:bg-stone-100 md:hidden"
          >
            ☰
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-4 rounded-[24px] border border-stone-200 bg-white/90 p-4 shadow-lg backdrop-blur md:hidden">
            <div className="flex flex-col gap-2">
              {nav.map((item) => (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => handleNavClick(item.page)}
                  className={`rounded-2xl px-4 py-3 text-left text-sm uppercase tracking-[0.18em] transition ${
                    currentPage === item.page
                      ? 'bg-stone-100 text-stone-900'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-stone-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button href={site.bookingLink} full>
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-[#efe6dc] pt-8">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-stone-200/80 bg-[#f6efe7] p-8 shadow-[0_22px_55px_rgba(120,96,74,0.08)] sm:p-10">
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
                    className="block text-sm text-stone-700 transition hover:translate-x-1 hover:text-stone-900"
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
      </div>
    </footer>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <main className="bg-[linear-gradient(180deg,#f7f1ea_0%,#fcfaf7_45%,#f5eee6_100%)]">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,199,185,0.35),transparent_32%)]" />
        <div className="pointer-events-none absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-[#eadccf]/60 blur-3xl" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-stone-500 shadow-sm backdrop-blur sm:text-xs">
              Luxury Nail Experience
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-stone-800 sm:text-5xl lg:text-7xl">
              Beauty that feels polished, effortless, and refined.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              Welcome to Adore Nail Spa, a luxury beauty destination where thoughtful care,
              elevated technique, and a calming atmosphere come together to create an experience
              that feels as beautiful as the final result.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button onClick={() => setCurrentPage('services')} full>
                Explore Services
              </Button>
              <Button onClick={() => setCurrentPage('gallery')} outline full>
                View Gallery
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Luxury Care', value: '5-Star' },
                { label: 'Atmosphere', value: 'Calm & Neutral' },
                { label: 'Design', value: 'Elegant' },
              ].map((item) => (
                <Card key={item.label} className="bg-white/70">
                  <div className="p-5">
                    <div className="text-xl font-semibold text-stone-800 sm:text-2xl">
                      {item.value}
                    </div>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-stone-500 sm:text-xs">
                      {item.label}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
              <Card className="overflow-hidden bg-gradient-to-br from-[#efe4d8] via-[#faf7f2] to-[#dfd0c3]">
                <div className="relative h-full min-h-[420px] p-5 sm:p-6">
                  <img
                    src="/images/nail1.jpg"
                    alt="Elegant neutral nail design"
                    className="h-full w-full rounded-[24px] object-cover"
                  />
                  <div className="absolute inset-5 rounded-[24px] bg-[linear-gradient(180deg,rgba(28,22,18,0.18),rgba(28,22,18,0.58))] sm:inset-6" />
                  <div className="absolute inset-x-8 bottom-8 rounded-[24px] border border-white/70 bg-[rgba(255,250,245,0.96)] p-6 shadow-[0_20px_45px_rgba(28,22,18,0.22)] backdrop-blur sm:inset-x-10 sm:bottom-10">
                    <div className="text-sm font-medium uppercase tracking-[0.22em] text-stone-600">
                      Signature Beauty Ritual
                    </div>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight text-stone-900 sm:text-3xl">
                      Designed to leave you feeling confident and completely cared for
                    </h2>
                    <p className="mt-3 text-base leading-7 text-stone-700">
                      From elegant nails to restorative self-care treatments, every appointment is crafted
                      to feel personal, relaxing, and beautifully finished.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4">
                <Card className="overflow-hidden bg-[#f7f1ea]">
                  <div className="p-5">
                    <img
                      src="/images/nail2.jpg"
                      alt="French tip manicure"
                      className="h-44 w-full rounded-[22px] object-cover"
                    />
                    <div className="mt-5 flex items-start gap-4">
                      <Icon>⏰</Icon>
                      <div>
                        <p className="text-lg font-medium text-stone-800">Flexible Hours</p>
                        <p className="mt-2 text-sm leading-6 text-stone-600">
                          Visit us for weekday appointments, weekend refreshes, and moments of well-deserved self-care.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-[#fbf8f4]">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon>📍</Icon>
                      <div>
                        <p className="text-lg font-medium text-stone-800">Easy to Visit</p>
                        <p className="mt-2 text-sm leading-6 text-stone-600">
                          A welcoming salon space created to feel calm, comfortable, and effortlessly luxurious.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 rounded-[22px] bg-white/80 p-4 text-sm leading-6 text-stone-600">
                      {site.address}
                    </div>
                  </div>
                </Card>
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
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-stone-500">About Us</p>
            <h1 className="mt-4 text-4xl font-semibold text-stone-800 sm:text-5xl">
              A refined beauty space designed for comfort, care, and confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              Adore Nail Spa was created to offer more than a beauty appointment. Our space is warm,
              elegant, and restorative, giving every guest a chance to slow down, feel cared for,
              and enjoy a polished experience from beginning to end.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                'Refined service',
                'Comfort-first care',
                'Elegant finishes',
              ].map((value) => (
                <div key={value} className="rounded-[22px] border border-stone-200 bg-white/80 px-4 py-4 text-sm uppercase tracking-[0.16em] text-stone-600 shadow-sm">
                  {value}
                </div>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden bg-gradient-to-br from-[#f2e7dc] to-[#f9f6f1]">
            <div className="grid gap-6 p-6 sm:p-8">
              <img
                src="/images/nail3.jpg"
                alt="Soft bridal nail style"
                className="h-72 w-full rounded-[24px] object-cover"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] bg-white/80 p-5">
                  <h2 className="text-xl font-semibold text-stone-800">Our Philosophy</h2>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    We believe true luxury is found in thoughtful service, clean technique, beautiful details,
                    and an experience that feels calm, personal, and effortlessly elevated.
                  </p>
                </div>
                <div className="rounded-[22px] bg-white/80 p-5">
                  <h2 className="text-xl font-semibold text-stone-800">Why Clients Love Us</h2>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-stone-600">
                    <li>A soft, sophisticated atmosphere that feels welcoming and relaxing</li>
                    <li>Personalized services tailored for everyday beauty and special moments</li>
                    <li>Careful attention to detail, cleanliness, comfort, and lasting results</li>
                  </ul>
                </div>
              </div>
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
        <div className="relative overflow-hidden rounded-[36px] border border-stone-200 bg-gradient-to-br from-[#f7f1ea] via-white to-[#efe2d4] p-8 shadow-sm sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,rgba(214,199,185,0.34),transparent_62%)] lg:block" />
          <p className="text-sm uppercase tracking-[0.22em] text-stone-500">Services</p>
          <h1 className="mt-4 text-4xl font-semibold text-stone-800 sm:text-5xl">
            Signature Treatments
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Discover elevated self-care with manicure, pedicure, nail enhancement,
            waxing, lash, kids, and head spa experiences designed to help you relax,
            restore, and feel beautifully renewed.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-white/70 bg-white/70 p-5 backdrop-blur">
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Atmosphere</div>
              <div className="mt-2 text-xl font-semibold text-stone-800">Soft luxury</div>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                A warm, polished setting tailored for calm beauty rituals.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/70 bg-white/70 p-5 backdrop-blur">
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Experience</div>
              <div className="mt-2 text-xl font-semibold text-stone-800">Thoughtful care</div>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Every treatment is presented as a restorative service, not just a menu item.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/70 bg-white/70 p-5 backdrop-blur">
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Booking</div>
              <div className="mt-2 text-xl font-semibold text-stone-800">Custom consultation</div>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Reach out to choose the service that best fits your appointment goals.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-8 border-b border-stone-200 pb-4">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Manicure</p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-800">Elegant Hand Care</h2>
          </div>

          <div className="grid gap-6">
            {manicures.map((service) => (
              <div key={service.name} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-semibold text-stone-800">{service.name}</h3>
                  <p className="mt-3 leading-7 text-stone-600">{service.description}</p>
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
              <div key={service.name} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-semibold text-stone-800">{service.name}</h3>
                  <p className="mt-3 leading-7 text-stone-600">{service.description}</p>
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
            <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <h3 className="text-2xl font-semibold text-stone-800">Full Set</h3>
              <div className="mt-6 space-y-3">
                {fullSet.map((item) => (
                  <div key={item.name} className="rounded-2xl bg-stone-50 px-4 py-3 text-stone-700">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <h3 className="text-2xl font-semibold text-stone-800">Fill-In</h3>
              <div className="mt-6 space-y-3">
                {fillIn.map((item) => (
                  <div key={item.name} className="rounded-2xl bg-stone-50 px-4 py-3 text-stone-700">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-[#f7f1ea] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <h3 className="text-2xl font-semibold text-stone-800">Add-Ons</h3>
              <div className="mt-6 space-y-3">
                {addOns.map((item) => (
                  <div key={item.name} className="rounded-2xl bg-white/70 px-4 py-3 text-stone-700">
                    {item.name}
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
            <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <h3 className="text-xl font-semibold text-stone-800">Polish Services</h3>
              <div className="mt-6 space-y-3">
                {additionalServices.polish.map((item) => (
                  <div key={item.name} className="rounded-2xl bg-stone-50 px-4 py-3 text-stone-700">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <h3 className="text-xl font-semibold text-stone-800">Nail Care</h3>
              <div className="mt-6 space-y-3">
                {additionalServices.nailCare.map((item) => (
                  <div key={item.name} className="rounded-2xl bg-stone-50 px-4 py-3 text-stone-700">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-[#f7f1ea] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <h3 className="text-xl font-semibold text-stone-800">Enhancements</h3>
              <div className="mt-6 space-y-3">
                {additionalServices.extras.map((item) => (
                  <div key={item.name} className="rounded-2xl bg-white/70 px-4 py-3 text-stone-700">
                    {item.name}
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
            <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <h3 className="text-xl font-semibold text-stone-800">Face</h3>
              <div className="mt-6 space-y-3">
                {waxing.face.map((item) => (
                  <div key={item.name} className="rounded-2xl bg-stone-50 px-4 py-3 text-stone-700">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <h3 className="text-xl font-semibold text-stone-800">Arms & Underarms</h3>
              <div className="mt-6 space-y-3">
                {waxing.arms.map((item) => (
                  <div key={item.name} className="rounded-2xl bg-stone-50 px-4 py-3 text-stone-700">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-[#f7f1ea] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <h3 className="text-xl font-semibold text-stone-800">Legs & Body</h3>
              <div className="mt-6 space-y-3">
                {waxing.body.map((item) => (
                  <div key={item.name} className="rounded-2xl bg-white/70 px-4 py-3 text-stone-700">
                    {item.name}
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
            <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <h3 className="text-2xl font-semibold text-stone-800">Full Set</h3>
              <div className="mt-6 space-y-6">
                {lashes.fullSet.map((item) => (
                  <div key={item.name} className="rounded-[22px] bg-stone-50 p-4">
                    <div className="font-medium text-stone-800">{item.name}</div>
                    <p className="mt-2 text-sm text-stone-600">{item.styles}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-[#f7f1ea] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <h3 className="text-2xl font-semibold text-stone-800">Refill</h3>

              <div className="mt-6">
                <p className="text-sm uppercase tracking-[0.18em] text-stone-500">2 Week Refill</p>
                <div className="mt-3 space-y-3">
                  {lashes.refill2Week.map((item) => (
                    <div key={item.name} className="rounded-2xl bg-white/70 px-4 py-3 text-stone-700">
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm uppercase tracking-[0.18em] text-stone-500">3 Week Refill</p>
                <div className="mt-3 space-y-3">
                  {lashes.refill3Week.map((item) => (
                    <div key={item.name} className="rounded-2xl bg-white/70 px-4 py-3 text-stone-700">
                      {item.name}
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
              <div key={item.name} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
                <h3 className="text-xl font-semibold text-stone-800">{item.name}</h3>
                {item.detail && <p className="mt-2 text-sm text-stone-500">{item.detail}</p>}
                <div className="mt-6 rounded-2xl bg-stone-50 px-4 py-4 text-sm leading-6 text-stone-600">
                  Gentle, age-appropriate pampering for little guests in a calm and welcoming setting.
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
              <div key={service.name} className="rounded-[28px] border border-stone-200 bg-[#f7f1ea] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
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
        <div className="rounded-[36px] border border-stone-200 bg-gradient-to-br from-[#f8f3ed] via-white to-[#efe4d8] p-8 shadow-[0_20px_55px_rgba(120,96,74,0.08)] sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.22em] text-stone-500">Gallery</p>
            <h1 className="mt-4 text-4xl font-semibold text-stone-800 sm:text-5xl">
              A curated look at our signature style.
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Explore elegant neutrals, soft luxury finishes, and timeless beauty designed to feel elevated and effortlessly beautiful.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {['Soft neutrals', 'Editorial finish', 'Bridal-ready detail'].map((item) => (
              <div key={item} className="rounded-[22px] border border-white/80 bg-white/75 px-5 py-4 text-sm uppercase tracking-[0.18em] text-stone-600 shadow-sm backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item) => (
            <Card key={item.title} className="group overflow-hidden">
              <div className="relative h-72 sm:h-80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,18,14,0.12),rgba(22,18,14,0.62))]" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-[24px] border border-white/70 bg-[rgba(255,250,245,0.96)] p-5 shadow-[0_16px_35px_rgba(22,18,14,0.22)] backdrop-blur-sm">
                    <h2 className="text-2xl font-semibold leading-tight text-stone-900">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-stone-700">{item.note}</p>
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
    <main className="bg-[linear-gradient(180deg,#fcfaf7_0%,#f5eee6_100%)]">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-24">
        <div>
          <div className="rounded-[34px] border border-stone-200 bg-white/75 p-8 shadow-[0_20px_55px_rgba(120,96,74,0.08)] backdrop-blur sm:p-10">
            <p className="text-sm uppercase tracking-[0.22em] text-stone-500">Contact Us</p>
            <h1 className="mt-4 text-4xl font-semibold text-stone-800 sm:text-5xl">
              Let’s plan your next luxury appointment.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              Reach out for appointments, questions, bridal bookings, or custom service requests. We would love to welcome you to Adore Nail Spa.
            </p>

            <div className="mt-8 rounded-[24px] bg-[#f7f1ea] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Best For</p>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                Appointment inquiries, service questions, bridal bookings, and personalized recommendations.
              </p>
            </div>
          </div>

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
          <Card className="overflow-hidden border-none bg-gradient-to-br from-[#efe4d8] via-[#f9f6f1] to-[#ddd0c3] shadow-[0_24px_60px_rgba(120,96,74,0.12)]">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-stone-800">Send us a message</h2>
              <p className="mt-3 leading-7 text-stone-600">
                Ask about services, event bookings, or preferred appointment times.
              </p>
              <p className="mt-3 text-sm text-stone-500">
                Or email us directly at{' '}
                <span className="font-medium text-stone-700">{site.email}</span>
              </p>

              <form className="mt-8 space-y-5 rounded-[26px] bg-white/75 p-6 shadow-sm backdrop-blur">
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
  const [displayPage, setDisplayPage] = useState('home');
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    if (currentPage === displayPage) {
      setIsPageVisible(true);
      return undefined;
    }

    setIsPageVisible(false);

    const pageTimer = window.setTimeout(() => {
      setDisplayPage(currentPage);
      setIsPageVisible(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 220);

    return () => window.clearTimeout(pageTimer);
  }, [currentPage, displayPage]);

  let pageContent = null;

  if (displayPage === 'home') {
    pageContent = <HomePage setCurrentPage={setCurrentPage} />;
  } else if (displayPage === 'about') {
    pageContent = <AboutPage />;
  } else if (displayPage === 'services') {
    pageContent = <ServicesPage />;
  } else if (displayPage === 'gallery') {
    pageContent = <GalleryPage />;
  } else if (displayPage === 'contact') {
    pageContent = <ContactPage />;
  }

  return (
    <div className="min-h-screen bg-[#f7f1ea] text-stone-700 selection:bg-[#d9c8b7] selection:text-stone-900">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <div className={isPageVisible ? 'page-shell page-enter' : 'page-shell page-exit'}>
        {pageContent}
      </div>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
