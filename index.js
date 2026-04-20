// ── DARK / LIGHT MODE TOGGLE ──
const darkSwitch = document.getElementById('darkSwitch');
const preferLight = localStorage.getItem('theme') === 'light';
if (preferLight) {
  document.body.classList.add('light');
  darkSwitch.checked = false;
}
darkSwitch.addEventListener('change', () => {
  document.body.classList.toggle('light', !darkSwitch.checked);
  localStorage.setItem('theme', darkSwitch.checked ? 'dark' : 'light');
});

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── BACK TO TOP ──
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── CONTACT FORM (EmailJS) ──
const contactForm = document.getElementById('contactForm');
const popup = document.getElementById('popup-message');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  emailjs.sendForm('service_kr86gfq', 'template_onfoelq', this)
    .then(() => {
      popup.style.display = 'block';
      setTimeout(() => { popup.style.display = 'none'; }, 4000);
      contactForm.reset();
    }, err => {
      alert('Failed to send message: ' + JSON.stringify(err));
    });
});

// ── CARD PRESS EFFECT ──
document.querySelectorAll('.card, .pcard, .hero-cta').forEach(el => {
  el.addEventListener('mousedown', () => { el.style.transform = 'scale(0.98)'; });
  el.addEventListener('mouseup',   () => { el.style.transform = ''; });
  el.addEventListener('mouseleave',() => { el.style.transform = ''; });
  el.addEventListener('touchstart',() => { el.style.transform = 'scale(0.98)'; }, { passive: true });
  el.addEventListener('touchend',  () => { el.style.transform = ''; });
});
