// =======================
// Shaftech UI Interactions
// =======================

document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      const visible = mobileMenu.style.display === 'flex';
      mobileMenu.style.display = visible ? 'none' : 'flex';
    });
  }

  // Carousel
  const carousel = document.getElementById('carousel');
  if (carousel) {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(carousel.querySelectorAll('.slide'));
    const navBtns = Array.from(carousel.querySelectorAll('.carousel-btn'));
    let current = 0;
    const goTo = (i) => {
      current = i;
      track.style.transform = `translateX(-${100 * i}%)`;
      navBtns.forEach((b, idx) => {
        b.style.background = idx === i ? 'linear-gradient(180deg, #7fd0ff, #3f85e0)' : 'rgba(122,173,255,0.18)';
        b.style.border = '1px solid rgba(122,173,255,0.35)';
        b.style.width = idx === i ? '14px' : '10px';
        b.style.height = idx === i ? '14px' : '10px';
        b.style.borderRadius = '10px';
      });
    };
    navBtns.forEach((btn) => {
      btn.addEventListener('click', () => goTo(parseInt(btn.dataset.i, 10)));
    });
    // Auto play
    setInterval(() => goTo((current + 1) % slides.length), 5000);
    goTo(0);
  }

  // Search demo
  const searchInput = document.getElementById('site-search');
  const searchBtn = document.getElementById('search-btn');
  if (searchInput && searchBtn) {
    searchBtn.addEventListener('click', () => {
      const q = searchInput.value.trim();
      if (!q) {
        alert('Type to search products, services, Dakia…');
        return;
      }
      // Simple client-side redirect demo
      const map = {
        dakia: 'products.html',
        product: 'products.html',
        products: 'products.html',
        service: 'services.html',
        services: 'services.html',
        contact: 'contact.html',
        about: 'about.html'
      };
      const key = Object.keys(map).find(k => q.toLowerCase().includes(k));
      window.location.href = key ? map[key] : 'products.html';
    });
  }

  // Contact form
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('form-msg');
  if (form && msg) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim()
      };
      if (!data.name || !data.email || !data.message) {
        msg.textContent = 'Please fill out all fields.';
        msg.style.color = '#ffb3b3';
        return;
      }
      // Simulate sending
      msg.textContent = 'Sending…';
      msg.style.color = '#b8c7d9';
      await new Promise(r => setTimeout(r, 1000));
      msg.textContent = 'Thanks! We’ll get back to you soon.';
      msg.style.color = '#79c7ff';
      form.reset();
    });
  }
});
