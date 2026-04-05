document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight Active Navigation Link
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.background = '#fff';
            link.style.color = '#000';
        }
    });

    // 2. Smooth Reveal Animation for Cards
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation styles to cards and sections
    const elementsToAnimate = document.querySelectorAll('.card, section h1, .profile-photo');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // 3. Contact Button Feedback
    const emailBtn = document.querySelector('.btn[href^="mailto"]');
    if (emailBtn) {
        emailBtn.addEventListener('click', () => {
            console.log("Email client opening...");
            // Optional: You could add a 'Thank you' message here
        });
    }
});