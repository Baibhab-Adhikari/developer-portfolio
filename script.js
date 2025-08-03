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

// Theme toggle functionality
const htmlElement = document.documentElement;
const themeToggleButtons = document.querySelectorAll(".theme-toggle-btn"); // Use a common class

// Function to update icons on all toggle buttons
function updateThemeIcons(isDarkMode) {
  themeToggleButtons.forEach((button) => {
    const icon = button.querySelector("i");
    if (icon) {
      if (isDarkMode) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }
    }
  });
}

// Function to set the theme
function setTheme(theme) {
  if (theme === "dark") {
    htmlElement.classList.add("dark");
    updateThemeIcons(true);
    localStorage.setItem("theme", "dark");
  } else {
    htmlElement.classList.remove("dark");
    updateThemeIcons(false);
    localStorage.setItem("theme", "light");
  }
}

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem("theme");
const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme) {
  setTheme(savedTheme);
} else if (prefersDark) {
  setTheme("dark");
} else {
  setTheme("light"); // Default to light if no preference
}

// Add event listeners to all theme toggle buttons
themeToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (htmlElement.classList.contains("dark")) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  });
});

// DOM content loaded event
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
  });

  // Mobile menu toggle functionality
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.querySelector(".menu-icon");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("active");
      document.body.classList.toggle("mobile-menu-open");

      // Toggle hamburger icon animation
      if (hamburgerIcon) {
        hamburgerIcon.classList.toggle("active");
      }
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll("a");
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("active");
        document.body.classList.remove("mobile-menu-open");

        // Reset hamburger icon
        if (hamburgerIcon) {
          hamburgerIcon.classList.remove("active");
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
      "Engineering Student",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
  });

  // Initialize Leaflet map for Barasat, Kolkata, India
  if (document.getElementById("map")) {
    // Create map with Barasat, Kolkata coordinates (88.4811, 22.7226)
    const map = L.map("map").setView([22.7226, 88.4811], 13);

    // Add OpenStreetMap tiles (completely free, no API key needed)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add marker for the location
    const marker = L.marker([22.7226, 88.4811])
      .addTo(map)
      .bindPopup("Barasat, Kolkata")
      .openPopup();

    // Add animation effect when map loads
    setTimeout(() => {
      document.getElementById("map").classList.add("animate-in");
    }, 300);
  }
});
