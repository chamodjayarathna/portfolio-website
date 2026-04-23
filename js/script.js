/* 
   ==========================================================================
  Javascript File for Portfolio
   ========================================================================== 
*/

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded Successfully!");

    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only apply to internal links
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Offset for fixed navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Simple Scroll Reveal Animation ---
    // Makes section fade in as scroll down
    const sections = document.querySelectorAll('section');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('show');
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for reveal animation
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
    });

    // Run once on load and then on scroll
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // --- Hamburger Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // This is a placeholder for mobile menu logic
            console.log("Hamburger menu clicked!");
            // navMenu.classList.toggle('active');
        });
    }
});



    