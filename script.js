// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Nav shadow on scroll
window.addEventListener('scroll', () => {
  document.querySelector('.nav').style.boxShadow =
    window.scrollY > 12 ? '0 2px 20px rgba(0,0,0,0.07)' : 'none';
});

// Mobile menu toggle
const burger = document.querySelector('.nav__burger');
const menu   = document.querySelector('.nav__menu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    menu.style.flexDirection = 'column';
    menu.style.position = 'absolute';
    menu.style.top = '100%';
    menu.style.left = '0';
    menu.style.right = '0';
    menu.style.background = '#FAF7F2';
    menu.style.padding = '16px 28px';
    menu.style.borderBottom = '1px solid #E0D5C5';
    menu.style.zIndex = '200';
    if (open) menu.removeAttribute('style');
  });
}

// Form submit → Telegram
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value || 'вы';
  // TODO: заменить на реальный Telegram username команды
  window.open('https://t.me/nutriteam', '_blank');
});
