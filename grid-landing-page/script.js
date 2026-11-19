const menuBtn = document.querySelector('.menu-btn');
const menuIcon = menuBtn.querySelector('img');
const nav = document.querySelector('nav');
const overlay = document.querySelector('.overlay'); // 1. Ye add karein

menuBtn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  overlay.classList.toggle('is-open', isOpen); // 2. Ye add karein
  menuBtn.setAttribute('aria-expanded', isOpen);
  menuIcon.src = isOpen
    ? './assets/images/icon-close.svg'
    : './assets/images/icon-menu.svg';
});

// Optional: Agar user dark area par click kare toh menu band ho jaye
overlay.addEventListener('click', () => {
  nav.classList.remove('is-open');
  overlay.classList.remove('is-open');
  menuBtn.setAttribute('aria-expanded', false);
  menuIcon.src = './assets/images/icon-menu.svg';
});