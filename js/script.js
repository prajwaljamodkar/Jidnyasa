function hideLoader() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('site-container');
    if (!loader || !mainContent) return;

    loader.classList.add('fade-out');

    setTimeout(function() {
        loader.style.display = 'none';
        mainContent.classList.add('show');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }, 500);
}

function showLoader() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('site-container');
    if (!loader || !mainContent) return;

    mainContent.classList.remove('show');
    mainContent.style.display = 'none';
    loader.style.display = 'flex';
    loader.classList.remove('fade-out');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    setTimeout(function() {
        hideLoader();
    }, 3000);
}

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cache DOM queries used in the scroll handler
const sections = Array.from(document.querySelectorAll('section[id]'));
const navLinks = Array.from(document.querySelectorAll('.nav-link'));

// Update active nav link on scroll – throttled with requestAnimationFrame
let scrollScheduled = false;
window.addEventListener('scroll', () => {
    if (scrollScheduled) return;
    scrollScheduled = true;
    requestAnimationFrame(() => {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        scrollScheduled = false;
    });
});

        