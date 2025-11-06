// === Display Current Date in Header ===
const dateElement = document.getElementById("current-date");
if (dateElement) {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = today.toLocaleDateString(undefined, options);
}

// === Auto Year in Footer ===
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// === Responsive Navigation Toggle ===
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
    mainNav.setAttribute("aria-hidden", expanded);
    mainNav.classList.toggle("active");
  });
}

// === Lightbox for Gallery Images ===
const galleryImages = document.querySelectorAll(".gallery-img");

if (galleryImages.length > 0) {
  // Create lightbox elements
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.style.display = "none";
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img src="" alt="Gallery Image" id="lightbox-img" />
      <span id="lightbox-close">&times;</span>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  // Open lightbox when clicking an image
  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  // Close when clicking close button or outside image
  closeBtn.addEventListener("click", () => (lightbox.style.display = "none"));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });
}
