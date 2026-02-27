
lucide.createIcons();


const header = document.getElementById('main-header');
const headerBg = document.getElementById('header-bg');
const logoText = header.querySelector('a span:last-child'); // The "CONSTRUCTION BOIS" part

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('py-4');
        header.classList.remove('py-6');
        headerBg.classList.remove('opacity-0');
        headerBg.classList.add('opacity-100');
    } else {
        header.classList.add('py-6');
        header.classList.remove('py-4');
        headerBg.classList.add('opacity-0');
        headerBg.classList.remove('opacity-100');
    }
});


const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

const scrollElements = document.querySelectorAll('.scroll-trigger, .fade-up, .fade-left, .fade-right');
scrollElements.forEach(el => observer.observe(el));


const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
let isMenuOpen = false;

mobileBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        document.body.classList.add('mobile-menu-open');

        mobileBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>';
    } else {
        mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        document.body.classList.remove('mobile-menu-open');

        mobileBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
    }
});


mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        document.body.classList.remove('mobile-menu-open');
        mobileBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
    });
});
