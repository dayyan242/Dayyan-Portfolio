// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const menuOverlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.close-btn');

// Function to open menu
function openMenu() {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
}

// Function to close menu
function closeMenu() {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

// Toggle menu on button click
menuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (menuOverlay.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Close menu when clicking outside
menuOverlay.addEventListener('click', function(e) {
    if (e.target === menuOverlay) {
        closeMenu();
    }
});

// Close menu when clicking close button
closeBtn.addEventListener('click', closeMenu);

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('.menu-overlay a');
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu when pressing Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
        closeMenu();
    }
});

// Remove mouse events for mobile
function checkIfMobile() {
    if (window.innerWidth <= 768) {
        menuBtn.removeEventListener('mouseenter', openMenu);
        menuOverlay.removeEventListener('mouseenter', openMenu);
        menuOverlay.removeEventListener('mouseleave', closeMenu);
    } else {
        menuBtn.addEventListener('mouseenter', openMenu);
        menuOverlay.addEventListener('mouseenter', openMenu);
        menuOverlay.addEventListener('mouseleave', closeMenu);
    }
}

// Check on load and window resize
window.addEventListener('load', checkIfMobile);
window.addEventListener('resize', checkIfMobile);

// project

    // JavaScript Code yahan niche paste karein
        var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
            },
            loop: true,
        });

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Dark/Light Mode Toggle
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const themeIcon = document.getElementById('themeIcon');
    
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const html = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    
    html.setAttribute('data-theme', savedTheme);
    
    if (savedTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
