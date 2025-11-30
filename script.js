// ------------------------------------------
// REMOVE LOADING SCREEN
// ------------------------------------------
window.onload = () => {
  const loader = document.getElementById("loading-screen");
  loader.style.opacity = "0";

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
};// -------------------------------
// YEAR AUTO UPDATE
// -------------------------------
document.getElementById("year").textContent = new Date().getFullYear();


// -------------------------------
// LAZY LOAD IMAGES
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[data-src]");

  lazyImages.forEach(img => {
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
  });
});


// -------------------------------
// LIGHTBOX SETUP
// -------------------------------
const lightbox = document.getElementById("lightbox");
const lbImage = document.querySelector(".lb-image");
const lbCaption = document.querySelector(".lb-caption");
const btnClose = document.querySelector(".lb-close");
const btnPrev = document.querySelector(".lb-prev");
const btnNext = document.querySelector(".lb-next");

let currentIndex = 0;
let images = [];

// Collect all gallery images
images = Array.from(document.querySelectorAll(".photo img"));


// -------------------------------
// OPEN LIGHTBOX
// -------------------------------
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.classList.add("active");
  });
});


// -------------------------------
// UPDATE LIGHTBOX IMAGE
// -------------------------------
function showImage() {
  const selected = images[currentIndex];
  lbImage.src = selected.src;
  lbCaption.textContent = selected.alt;
}


// -------------------------------
// NEXT & PREVIOUS IMAGE
// -------------------------------
btnNext.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

btnPrev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});


// -------------------------------
// CLOSE LIGHTBOX
// -------------------------------
btnClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// Click outside image closes
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});


// -------------------------------
// KEYBOARD CONTROLS (optional)
// -------------------------------
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;

  if (e.key === "ArrowRight") btnNext.click();
  if (e.key === "ArrowLeft") btnPrev.click();
  if (e.key === "Escape") btnClose.click();
  // ------------------------------------------
// FLOATING HEART EFFECT
// ------------------------------------------
function createHeart() {
  const container = document.querySelector(".hearts-container");
  const heart = document.createElement("div");

  heart.classList.add("heart");
  heart.textContent = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 800); // hearts every 0.8 seconds
});
