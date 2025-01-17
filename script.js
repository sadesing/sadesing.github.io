//Back to top button functionality
const backToTopButton = document.getElementById("back-to-top");

//Home page scroll navigation
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

// Function to check screen size and toggle button visibility
function checkScreenSize() {
  if (window.innerWidth >= 1024) {
    // Tailwind's lg breakpoint is 1024px
    window.onscroll = function () {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };
  } else {
    backToTopButton.style.display = "none";
    window.onscroll = null; // Remove the scroll event listener on smaller screens
  }
}
// Initial check
checkScreenSize();

// Check screen size on resize
window.onresize = checkScreenSize;

// When the user clicks on the button, scroll to the top of the document
backToTopButton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Get the current page's URL
const currentPage = window.location.pathname.split("/").pop();

// Get all the nav links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through the nav links and add 'active' class to the current page's link
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('text-underline', 'font-bold');
  }
});

// Photo carousel gallery
document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll("#thumbnail li");
  const sliderImages = document.querySelectorAll("#image-slider ul li");

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      // Remove active class from all thumbnails and slider images
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));
      sliderImages.forEach((image) => image.classList.remove("active-img"));

      // Add active class to the clicked thumbnail and corresponding slider image
      thumbnail.classList.add("active");
      sliderImages[index].classList.add("active-img");
    });
  });
});

