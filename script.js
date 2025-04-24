// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Enhanced Navbar scroll effect with glass morphism
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// DOM content loaded event
document.addEventListener("DOMContentLoaded", function() {
  // Mobile menu toggle functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.querySelector('.menu-icon');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('mobile-menu-open');
      
      // Toggle hamburger icon animation
      if (hamburgerIcon) {
        hamburgerIcon.classList.toggle('active');
      }
    });
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('mobile-menu-open');
        
        // Reset hamburger icon
        if (hamburgerIcon) {
          hamburgerIcon.classList.remove('active');
        }
      });
    });
  }

  // Initialize Typed.js
  const typed = new Typed("#type-animation", {
    strings: [
      "Machine Learning Enthusiast",
      "Python Developer",
      "Backend Developer",
      "Problem Solver",
      "Engineering Student"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 500,
    loop: true
  });

  // Initialize Leaflet map for Barasat, Kolkata, India
  if (document.getElementById('map')) {
    // Create map with Barasat, Kolkata coordinates (88.4811, 22.7226)
    const map = L.map('map').setView([22.7226, 88.4811], 13);
    
    // Add OpenStreetMap tiles (completely free, no API key needed)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add marker for the location
    const marker = L.marker([22.7226, 88.4811])
      .addTo(map)
      .bindPopup('Barasat, Kolkata')
      .openPopup();
    
    // Add animation effect when map loads
    setTimeout(() => {
      document.getElementById('map').classList.add('animate-in');
    }, 300);
  }
  
  // Navbar background change on scroll
  const navbarScroll = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbarScroll.classList.add('bg-white', 'shadow-md');
    } else {
      navbarScroll.classList.remove('bg-white', 'shadow-md');
    }
  });
});

// Add animation classes to elements when they enter the viewport
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements that should animate on scroll
document.addEventListener("DOMContentLoaded", () => {
  // Add a base class for pre-animation state
  document
    .querySelectorAll(".tech-item, #about p, section h2, .bg-white.rounded-xl")
    .forEach((el) => {
      el.classList.add(
        "opacity-0",
        "translate-y-4",
        "transition-all",
        "duration-700"
      );
      // Start observing the element
      observer.observe(el);
    });

  // Add a custom class for animation
  document.head.insertAdjacentHTML(
    "beforeend",
    `
    <style>
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        .navbar.scrolled {
            backdrop-filter: blur(10px);
            background-color: rgba(255, 255, 255, 0.9);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
    </style>
    `
  );
});
