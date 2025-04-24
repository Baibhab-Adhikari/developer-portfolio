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

// Initialize Typed.js
document.addEventListener("DOMContentLoaded", function () {
  const options = {
    strings: [
      "I am a Problem Solver",
      "I am a  Python Developer",
      "I enjoy Backend Development",
      "I love making RESTful APIs",
      "I am interested in ML/MLOPS",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  };

  const typed = new Typed("#type-animation", options);
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
                background: rgba(255, 255, 255, 0.7);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
            }
        </style>
    `
  );

  // Start observing elements
  setTimeout(() => {
    document
      .querySelectorAll(
        ".tech-item, #about p, section h2, .bg-white.rounded-xl"
      )
      .forEach((el) => {
        observer.observe(el);
      });

    // Animate hero elements immediately
    document
      .querySelectorAll("#hero h1, #hero p, #hero .image-placeholder, #hero a")
      .forEach((el) => {
        el.classList.add("animate-in");
      });
  }, 100);

  // Handle form submission
  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameField = this.querySelector('input[name="name"]');
      const emailField = this.querySelector('input[name="email"]');
      const messageField = this.querySelector('textarea[name="message"]');

      // Simple validation
      if (nameField.value && emailField.value && messageField.value) {
        // Normally, you would send this data to a server
        alert("Thank you for your message! I will get back to you soon.");
        this.reset();
      } else {
        alert("Please fill in all fields.");
      }
    });
  }
});
