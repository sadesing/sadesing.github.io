// Back to top button functionality
function initializeBackToTop() {
  const backToTopButton = document.getElementById("back-to-top");

  if (!backToTopButton) {
    console.warn("Back-to-top button not found on this page.");
    return; // Exit if the button doesn't exist on the current page
  }

  // Combined Scroll Handler for Header and Back-to-Top Button
  function handleScroll() {
    const scrollY = window.scrollY;

    // Back-to-Top Button Logic
    if (window.innerWidth >= 1024) {
      backToTopButton.style.display = scrollY > 700 ? "block" : "none";
    } else {
      backToTopButton.style.display = "none";
    }
  }

  // Set initial state
  handleScroll();

  // Add event listeners
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);

  // Click handler for back-to-top button
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Header Scroll Effect
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("main-header");
  const logo = document.getElementById("header-logo");
  const links = document.querySelectorAll(".nav-link--header");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link"); // Mobile nav links
  const icons = document.querySelectorAll(".header-icon"); // Changed: Target the anchor elements instead of SVGs directly

  // Added: Function to handle scroll logic
  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      // Change header background
      header.classList.add("bg-white", "shadow-md");
      header.classList.remove("bg-black");

      // Change logo color
      logo.classList.add("text-black");
      logo.classList.remove("text-white");

      // Change navigation links color explicitly
      links.forEach(link => {
        link.style.color = "#000000"; // Black text on scroll
      });

      mobileLinks.forEach(link => {
        link.style.color = "#000000"; // Mobile menu links turn black too
      });

      // Change SVG icon colors by setting parent color
      icons.forEach(icon => {
        icon.style.color = "#000000"; // Black icons on scroll
      });

    } else {
      // Revert header background
      header.classList.add("bg-black");
      header.classList.remove("bg-white", "shadow-md");

      // Revert logo color
      logo.classList.add("text-white");
      logo.classList.remove("text-black");

      // Revert nav links color explicitly
      links.forEach(link => {
        link.style.color = "#ffffff"; // White text when at the top
      });

      mobileLinks.forEach(link => {
        link.style.color = "#ffffff"; // Mobile menu links turn white again
      });

      // Revert SVG icon colors by setting parent color
      icons.forEach(icon => {
        icon.style.color = "#ffffff"; // White icons when at the top
      });
    }
  }

  // Added: Call handleHeaderScroll immediately to set initial state
  handleHeaderScroll();

  // Bind scroll event listener
  window.addEventListener("scroll", handleHeaderScroll);
});

// Home page top navigation starts here
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// Get the current page's URL
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("text-underline", "font-bold");
  }
});

// Photo carousel gallery starts here
document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll("#thumbnail li");
  const sliderImages = document.querySelectorAll("#image-slider ul li");

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));
      sliderImages.forEach((image) => image.classList.remove("active-img"));
      thumbnail.classList.add("active");
      sliderImages[index].classList.add("active-img");
    });
  });
});

// Initialize back-to-top button on all pages
document.addEventListener("DOMContentLoaded", initializeBackToTop);