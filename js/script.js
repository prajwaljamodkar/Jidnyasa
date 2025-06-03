window.addEventListener('load', function() {
    // Show loader for at least 3 seconds (one full pencil animation cycle)
    setTimeout(function() {
        hideLoader();
    }, 1000);
});

function hideLoader() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('site-container'); // Make sure this ID exists in your HTML
    
    // Add fade-out class to loader
    loader.classList.add('fade-out');
    
    // After transition completes, hide loader and show main content 
    setTimeout(function() {
        loader.style.display = 'none';
        mainContent.classList.add('show');
        // Re-enable scrolling - choose ONE method
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }, 500);
}

function showLoader() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('site-container');
    
    
    // Reset and show loader
    mainContent.classList.remove('show');
    mainContent.style.display = 'none';
    loader.style.display = 'flex';
    loader.classList.remove('fade-out');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Hide loader again after 3 seconds
    setTimeout(function() {
        hideLoader();
    }, 3000);
}




        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));

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

        // Update active nav link on scroll
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('section[id]');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });