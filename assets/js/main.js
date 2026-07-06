const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-nav-links]');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

const quoteForm = document.querySelector('[data-quote-form]');
if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const name = data.get('name') || '';
    const business = data.get('business') || '';
    const email = data.get('email') || '';
    const phone = data.get('phone') || '';
    const service = data.get('service') || '';
    const budget = data.get('budget') || '';
    const timeline = data.get('timeline') || '';
    const message = data.get('message') || '';

    const subject = encodeURIComponent(`New quote request from ${business || name}`);
    const body = encodeURIComponent(
`Name: ${name}\nBusiness: ${business}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nBudget: ${budget}\nTimeline: ${timeline}\n\nProject details:\n${message}`
    );

    window.location.href = `mailto:hello@starwebco.com?subject=${subject}&body=${body}`;
  });
}
