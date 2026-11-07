/* Simple AI Portfolio - main.js */

// 1. Light / Dark theme button (remembers your choice)
const html = document.documentElement;
const themeBtn = document.getElementById('themeBtn');

function setTheme(theme) {
  html.setAttribute('data-bs-theme', theme);
  themeBtn.innerHTML = theme === 'dark' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
  try { localStorage.setItem('theme', theme); } catch (e) {}
}

let saved = 'dark';
try { saved = localStorage.getItem('theme') || 'dark'; } catch (e) {}
setTheme(saved);

themeBtn.addEventListener('click', () => {
  setTheme(html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark');
});

// 2. Navbar background when you scroll
const nav = document.querySelector('.site-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

// 3. Close mobile menu after clicking a link
document.querySelectorAll('#menu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});

// 4. Contact form check
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    form.classList.add('was-validated');
    return;
  }
  // Plain HTML version (no Django): just show a message
  if (!form.hasAttribute('action')) {
    e.preventDefault();
    document.getElementById('formMsg').innerHTML =
      '<span class="text-success"><i class="bi bi-check-circle"></i> Thanks! Your message is ready.</span>';
    form.reset();
    form.classList.remove('was-validated');
  }
});

// 5. Footer year
document.getElementById('year').textContent = new Date().getFullYear();
