// --- Mobile Menu Toggle ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Hamburger animation
        const bars = document.querySelectorAll('.bar');
        if (navLinks.classList.contains('active')) {
            bars[0].style.transform = "rotate(-45deg) translate(-6px, 7px)";
            bars[1].style.opacity = "0";
            bars[2].style.transform = "rotate(45deg) translate(-6px, -7px)";
        } else {
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        });
    });
}

// --- Animations on Scroll ---
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Initial run
revealOnScroll();
