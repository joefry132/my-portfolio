document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight Active Navigation Link (Your existing logic)
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.background = '#fff';
            link.style.color = '#000';
        }
    });

    // 2. Scroll Reveal Animation Logic
    const revealElements = () => {
        const reveals = document.querySelectorAll('section, .card, .social-icons');
        
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150; // Triggers when element is 150px into view

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    };

    // Add the CSS class "reveal" to sections and cards automatically
    const itemsToAnimate = document.querySelectorAll('section, .card, .social-icons');
    itemsToAnimate.forEach(item => item.classList.add('reveal'));

    // Listen for scroll events
    window.addEventListener('scroll', revealElements);
    
    // Run once on load to show elements already in view
    revealElements();
});