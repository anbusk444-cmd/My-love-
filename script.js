// Music 
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

// Sparkles
function createSparkle() {
  const sp = document.createElement("div");
  sp.classList.add("sparkle");
  sp.style.left = Math.random() * 100 + "vw";
  sp.style.top = Math.random() * 100 + "vh";
  document.querySelector(".sparkles").appendChild(sp);
  setTimeout(() => sp.remove(), 2000);
}
setInterval(createSparkle, 200);

// Stars
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

// Petals
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

// Fireflies
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
