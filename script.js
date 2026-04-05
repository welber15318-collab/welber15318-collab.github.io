const yearEl = document.getElementById('year');
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = 'Thanks! Your message has been captured locally for demo purposes.';
    form.reset();
  });
}
