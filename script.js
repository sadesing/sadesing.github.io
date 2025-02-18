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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      links.forEach((link) => {
        link.style.color = "#000000"; // Black text on scroll
      });

      mobileLinks.forEach((link) => {
        link.style.color = "#000000"; // Mobile menu links turn black too
      });

      // Change SVG icon colors by setting parent color
      icons.forEach((icon) => {
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
      links.forEach((link) => {
        link.style.color = "#ffffff"; // White text when at the top
      });

      mobileLinks.forEach((link) => {
        link.style.color = "#ffffff"; // Mobile menu links turn white again
      });

      // Revert SVG icon colors by setting parent color
      icons.forEach((icon) => {
        icon.style.color = "#ffffff"; // White icons when at the top
      });
    }
  }

  // Added: Call handleHeaderScroll immediately to set initial state
  handleHeaderScroll();

  // Bind scroll event listener
  window.addEventListener("scroll", handleHeaderScroll);
});

// Get the current page's URL
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("text-underline", "font-bold");
  }
});

// Initialize back-to-top button on all pages
document.addEventListener("DOMContentLoaded", initializeBackToTop);

// Polaroid bulliten board gallery
document.addEventListener('DOMContentLoaded', () => {
  const polaroids = document.querySelectorAll('.drybn-polaroid');
  const container = document.querySelector('.polaroid-group');

  if (window.innerWidth > 768 && container) {
    const containerRect = container.getBoundingClientRect();

    polaroids.forEach(polaroid => {
      let isDragging = false;
      let offsetX = 0, offsetY = 0;

      // Store initial random position
      const randomX = Math.random() * (container.offsetWidth - polaroid.offsetWidth);
      const randomY = Math.random() * (container.offsetHeight - polaroid.offsetHeight);
      polaroid.style.position = 'absolute';
      polaroid.style.left = `${randomX}px`;
      polaroid.style.top = `${randomY}px`;

      polaroid.addEventListener('mousedown', (e) => {
        isDragging = true;

        // Calculate the offset between mouse position and polaroid's top-left corner
        const rect = polaroid.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        // Bring the clicked polaroid to the front (but still below the nav)
        polaroids.forEach(p => p.style.zIndex = '10'); // Reset all polaroids
        polaroid.style.zIndex = '20'; // Bring the dragged polaroid to the front (but below nav)

        polaroid.style.cursor = 'grabbing';
      });

      // Throttle mousemove events for smoother dragging
      let isThrottled = false;
      document.addEventListener('mousemove', (e) => {
        if (!isDragging || isThrottled) return;
        isThrottled = true;

        requestAnimationFrame(() => {
          // Calculate new position relative to the container
          let newX = e.clientX - offsetX - containerRect.left;
          let newY = e.clientY - offsetY - containerRect.top;

          // Apply boundaries
          newX = Math.max(0, Math.min(newX, container.offsetWidth - polaroid.offsetWidth));
          newY = Math.max(0, Math.min(newY, container.offsetHeight - polaroid.offsetHeight));

          // Move the polaroid
          polaroid.style.left = `${newX}px`;
          polaroid.style.top = `${newY}px`;

          isThrottled = false;
        });
      });

      document.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          polaroid.style.cursor = 'grab';
        }
      });
    });
  }
});


// Portfolio filter starts here
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const category = button.dataset.category;

      // Update ARIA attributes for active button
      filterButtons.forEach((btn) => {
        btn.classList.remove("bg-black", "text-white", "border-black");
        btn.classList.add("bg-white", "text-gray-800", "border-black");
        btn.setAttribute("aria-selected", "false");
        btn.setAttribute("tabindex", "-1");
      });

      button.classList.remove("bg-white", "text-gray-800", "border-black");
      button.classList.add("bg-black", "text-white", "border-black");
      button.setAttribute("aria-selected", "true");
      button.setAttribute("tabindex", "0");

      // Filter portfolio items
      portfolioItems.forEach((item) => {
        if (category === "all" || item.dataset.category.includes(category)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });

    // Enable keyboard navigation
    button.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        const next = button.nextElementSibling || filterButtons[0];
        next.focus();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        const prev =
          button.previousElementSibling ||
          filterButtons[filterButtons.length - 1];
        prev.focus();
      }
    });
  });
});