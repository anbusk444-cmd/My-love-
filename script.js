// ------------------------------------------
// REMOVE LOADING SCREEN
// ------------------------------------------
// ------------------------------------------------------
// FULLSCREEN FLOATING HEARTS
// ------------------------------------------------------
// ------------------------------------------------------
// BACKGROUND MUSIC
// ------------------------------------------------------
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let playing = false;

musicBtn.onclick = () => {
  if (!playing) {
    bgMusic.play();
    playing = true;
    musicBtn.textContent = "⏸️";
  } else {
    bgMusic.pause();
    playing = false;
    musicBtn.textContent = "🎵";
  }
};

// ------------------------------------------------------
// FULLSCREEN FLOATING HEARTS
// ------------------------------------------------------


// ------------------------------------------------------
// HEART EXPLOSION ON TAP
// ------------------------------------------------------
document.addEventListener("click", (e) => {
  const heart = document.createElement("div");
  heart.classList.add("tap-heart");
  heart.textContent = "💖";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 800);
});

// ------------------------------------------------------
// SPARKLES
// ------------------------------------------------------
function createSparkle() {
  const sp = document.createElement("div");
  sp.classList.add("sparkle");
  sp.style.left = Math.random() * 100 + "vw";
  sp.style.top = Math.random() * 100 + "vh";
  document.querySelector(".sparkles").appendChild(sp);
  setTimeout(() => sp.remove(), 2000);
}
setInterval(createSparkle, 200);

// ------------------------------------------------------
// NIGHT SKY STARS
// ------------------------------------------------------
function createStar() {
  const s = document.createElement("div");
  s.classList.add("star");
  s.style.left = Math.random() * 100 + "vw";
  s.style.top = "100vh";
  s.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.querySelector(".stars").appendChild(s);
  setTimeout(() => s.remove(), 6000);
}
setInterval(createStar, 300);

// ------------------------------------------------------
// ROSE PETALS FALLING
// ------------------------------------------------------
function createPetal() {
  const p = document.createElement("div");
  p.classList.add("petal");
  p.textContent = "🌹";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = Math.random() * 4 + 4 + "s";
  document.querySelector(".rose-petals").appendChild(p);
  setTimeout(() => p.remove(), 6000);
}
setInterval(createPetal, 800);

// ------------------------------------------------------
// FIREFLIES
// ------------------------------------------------------
function createFirefly() {
  const f = document.createElement("div");
  f.classList.add("firefly");
  f.style.left = Math.random() * 100 + "vw";
  f.style.top = Math.random() * 100 + "vh";
  f.style.animationDuration = Math.random() * 4 + 3 + "s";
  document.querySelector(".fireflies").appendChild(f);
  setTimeout(() => f.remove(), 4000);
}
setInterval(createFirefly, 700);
function createFloatingHeart() {
  const container = document.querySelector(".hearts-fullscreen");
  const heart = document.createElement("div");

  heart.classList.add("floating-heart");
  heart.textContent = "❤️";

  // Random horizontal position
  heart.style.left = Math.random() * 100 + "vw";

  // Random animation duration
  heart.style.animationDuration = Math.random() * 4 + 4 + "s";

  // Random size
  heart.style.fontSize = Math.random() * 25 + 20 + "px";

  // Random side drift (left/right float)
  heart.style.setProperty("--drift", (Math.random() * 60 - 30) + "px");

  container.appendChild(heart);

  // Remove after animation
  setTimeout(() => heart.remove(), 8000);
}

// Create hearts repeatedly
setInterval(createFloatingHeart, 500);  // every 0.5s
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
