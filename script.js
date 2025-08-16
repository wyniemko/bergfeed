// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked button and corresponding section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
        });
    });

    // Add retro typing effect to logo
    const logo = document.querySelector('.logo');
    if (logo) {
        const originalText = logo.textContent;
        logo.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                logo.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            }
        }
        
        setTimeout(typeWriter, 500);
    }

    // Add glitch effect on hover for article cards
    const cards = document.querySelectorAll('.article-card, .blog-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s ease-in-out';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
});

// Add CSS for glitch animation
const style = document.createElement('style');
style.textContent = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
`;
document.head.appendChild(style);
