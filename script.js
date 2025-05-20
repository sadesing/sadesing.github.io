// === Back to Top Button Functionality ===
function initializeBackToTop() {
  const backToTopButton = document.getElementById("back-to-top");

  if (!backToTopButton) {
    console.warn("Back-to-top button not found on this page.");
    return;
  }

  function handleScroll() {
    const scrollY = window.scrollY;

    if (window.innerWidth >= 1024) {
      backToTopButton.style.display = scrollY > 700 ? "block" : "none";
    } else {
      backToTopButton.style.display = "none";
    }
  }

  handleScroll();
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// === Header Scroll Effect ===
function initializeHeaderScrollEffect() {
  const header = document.getElementById("main-header");
  const logo = document.getElementById("header-logo");
  const links = document.querySelectorAll(".nav-link--header");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  const icons = document.querySelectorAll(".header-icon");

  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      header.classList.add("bg-white", "shadow-md");
      header.classList.remove("bg-black");
      logo.classList.add("text-black");
      logo.classList.remove("text-white");

      links.forEach((link) => (link.style.color = "#000000"));
      mobileLinks.forEach((link) => (link.style.color = "#000000"));
      icons.forEach((icon) => (icon.style.color = "#000000"));
    } else {
      header.classList.add("bg-black");
      header.classList.remove("bg-white", "shadow-md");
      logo.classList.add("text-white");
      logo.classList.remove("text-black");

      links.forEach((link) => (link.style.color = "#ffffff"));
      mobileLinks.forEach((link) => (link.style.color = "#ffffff"));
      icons.forEach((icon) => (icon.style.color = "#ffffff"));
    }
  }

  handleHeaderScroll();
  window.addEventListener("scroll", handleHeaderScroll);
}

// === Active Nav Link ===
function updateActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href").split("/").pop();
    if (href === currentPage) {
      link.classList.add("text-underline", "font-bold");
    } else {
      link.classList.remove("text-underline", "font-bold");
    }
  });
}

// === Polaroid Gallery ===
function initializePolaroidGallery() {
  const polaroids = document.querySelectorAll('.drybn-polaroid');
  const container = document.querySelector('.polaroid-group');

  if (window.innerWidth > 768 && container) {
    const containerRect = container.getBoundingClientRect();

    polaroids.forEach(polaroid => {
      let isDragging = false;
      let offsetX = 0, offsetY = 0;

      const randomX = Math.random() * (container.offsetWidth - polaroid.offsetWidth);
      const randomY = Math.random() * (container.offsetHeight - polaroid.offsetHeight);
      polaroid.style.position = 'absolute';
      polaroid.style.left = `${randomX}px`;
      polaroid.style.top = `${randomY}px`;

      polaroid.addEventListener('mousedown', (e) => {
        isDragging = true;
        const rect = polaroid.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        polaroids.forEach(p => p.style.zIndex = '10');
        polaroid.style.zIndex = '20';
        polaroid.style.cursor = 'grabbing';
      });

      let isThrottled = false;
      document.addEventListener('mousemove', (e) => {
        if (!isDragging || isThrottled) return;
        isThrottled = true;

        requestAnimationFrame(() => {
          let newX = e.clientX - offsetX - containerRect.left;
          let newY = e.clientY - offsetY - containerRect.top;

          newX = Math.max(0, Math.min(newX, container.offsetWidth - polaroid.offsetWidth));
          newY = Math.max(0, Math.min(newY, container.offsetHeight - polaroid.offsetHeight));

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
}

// === Initialize everything ===
document.addEventListener("DOMContentLoaded", () => {
  initializeHeaderScrollEffect();
  initializeBackToTop();
  updateActiveNavLink();
  initializePolaroidGallery();
});
