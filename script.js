document.getElementById("year").textContent = new Date().getFullYear();

const images = document.querySelectorAll('.photo img');
const lightbox = document.getElementById('lightbox');
const lbImg = document.querySelector('.lb-image');
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    lbImg.src = img.getAttribute('data-src');
    lightbox.style.display = 'flex';
  });
});

document.querySelector('.lb-close').onclick = () => {
  lightbox.style.display = 'none';
};

document.querySelector('.lb-prev').onclick = () => {
  changeImage(-1);
};

document.querySelector('.lb-next').onclick = () => {
  changeImage(1);
};

function changeImage(dir) {
  currentIndex = (currentIndex + dir + images.length) % images.length;
  lbImg.src = images[currentIndex].getAttribute('data-src');
}
