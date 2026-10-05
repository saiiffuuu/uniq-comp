const phone = '9911241718';
const phoneLink = '+919911241718';
const whatsapp = '919911241718';
const email = 'uniqcomputers@gmail.com';
const address = 'E-503, Ground Floor, Jaitpur Extn., Part-2,\nNew Delhi – 110044';
const contactPerson = 'Anwar';

const navItems = [
  ['Home', '/'],
  ['About', '/about/'],
  ['Services', '/services/'],
  ['Products', '/products/'],
  ['Projects', '/projects/'],
  ['Contact', '/contact/']
];

const header = document.createElement('header');
header.className = 'site-header';
header.innerHTML = `
  <div class="container nav-wrap">
    <a class="brand" href="/" aria-label="UniQ Computers home">
      <img src="/assets/uniq-computers-logo.jpg" alt="UniQ Computers complete networking and CCTV solutions logo">
      <span class="brand-copy"><strong>UniQ Computers</strong><span>Networking &amp; CCTV Solutions</span></span>
    </a>
    <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false">☰</button>
    <nav class="main-nav" aria-label="Main navigation">
      ${navItems.map(([label, href]) => `<a href="${href}" ${location.pathname.replace(/\/?$/, '/') === href ? 'aria-current="page"' : ''}>${label}</a>`).join('')}
      <a class="nav-cta" href="/contact/">Get a Quote</a>
    </nav>
  </div>`;
document.body.prepend(header);

const footer = document.createElement('footer');
footer.className = 'site-footer';
footer.innerHTML = `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        <a class="footer-brand" href="/">
          <img src="/assets/uniq-computers-logo.jpg" alt="UniQ Computers logo">
          <span><strong>UniQ Computers</strong><span>Complete Networking &amp; CCTV Solutions</span></span>
        </a>
        <p>Professional security, quality equipment, expert installation and reliable support for homes and businesses.</p>
      </div>
      <div class="footer-col"><h3>Quick links</h3>${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}</div>
      <div class="footer-col"><h3>Our services</h3><a href="/services/">CCTV camera installation</a><a href="/services/">DVR &amp; NVR setup</a><a href="/services/">Maintenance &amp; support</a><a href="/services/">Residential &amp; commercial</a></div>
      <div class="footer-col"><h3>Contact us</h3><p>Contact: ${contactPerson}</p><a href="tel:${phoneLink}">${phone}</a><a href="mailto:${email}">${email}</a><p>${address}</p><a href="https://wa.me/${whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp us ↗</a><a href="/contact/">Business hours &amp; directions</a><p>Social media links to be added</p></div>
    </div>
    <div class="footer-bottom"><span>© <span data-year></span> UniQ Computers. All rights reserved.</span><span>Professional Security. Quality Equipment. Expert Installation. Reliable Support.</span></div>
  </div>`;
document.body.append(footer);

const whatsappLink = `https://wa.me/${whatsapp}`;
const floating = document.createElement('a');
floating.className = 'floating-whatsapp';
floating.href = whatsappLink;
floating.target = '_blank';
floating.rel = 'noopener noreferrer';
floating.setAttribute('aria-label', 'Chat with UniQ Computers on WhatsApp');
floating.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L4 20l1.2-4.1a8.2 8.2 0 1 1 15-4.2Z"/><path d="M9 8.3c.4 2.3 2 4 4.3 4.5l1-1 2 .9c-.2 1.3-1.1 2-2.4 1.8-3.4-.6-5.9-3.1-6.5-6.5-.2-1.3.5-2.2 1.8-2.4l.9 2Z"/></svg>';
document.body.append(floating);

const sticky = document.createElement('div');
sticky.className = 'mobile-sticky-cta';
sticky.innerHTML = `<a class="btn btn-primary" href="tel:${phoneLink}">Call now</a><a class="btn btn-outline" href="/contact/">Get a quote</a>`;
document.body.append(sticky);

document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.href = `tel:${phoneLink}`;
});
document.querySelectorAll('a[href*="wa.me/"]').forEach(link => {
  link.href = `https://wa.me/${whatsapp}`;
});
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.href = `mailto:${email}`;
});
document.querySelectorAll('[data-phone]').forEach(element => { element.textContent = phone; });
document.querySelectorAll('[data-whatsapp]').forEach(element => { element.textContent = phone; });
document.querySelectorAll('[data-email]').forEach(element => { element.textContent = email; });
document.querySelectorAll('[data-address]').forEach(element => { element.textContent = address; });
document.querySelectorAll('[data-contact-person]').forEach(element => { element.textContent = contactPerson; });
document.querySelectorAll('[data-map]').forEach(map => {
  const mapUrl = new URL('https://www.google.com/maps');
  mapUrl.searchParams.set('q', address.replace(',\n', ', '));
  mapUrl.searchParams.set('output', 'embed');
  map.src = mapUrl.toString();
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  menuToggle.textContent = open ? '×' : '☰';
  nav.classList.toggle('is-open', open);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    menuToggle.textContent = '☰';
  }
});

const revealObserver = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  }
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = String(data.get('name') || '').trim();
    const phoneNumber = String(data.get('phone') || '').trim();
    const customerEmail = String(data.get('email') || '').trim();
    const property = String(data.get('property') || '').trim();
    const service = String(data.get('service') || '').trim();
    const message = String(data.get('message') || '').trim();
    const subject = `CCTV enquiry from ${name}`;
    const body = [
      'New CCTV enquiry for UNIQ COMPUTERS',
      `Attention: ${contactPerson}`,
      `Business address: ${address.replace('\n', ', ')}`,
      '',
      `Name: ${name}`,
      `Phone number: ${phoneNumber}`,
      `Email: ${customerEmail || 'Not provided'}`,
      `Property type: ${property || 'Not provided'}`,
      `Service required: ${service || 'Not provided'}`,
      '',
      'Message:',
      message || 'No additional message provided.'
    ].join('\n');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
