const track = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".certificate-slide");

// Duplicate slides for infinite scroll effect
slides.forEach((slide) => {
  const clone = slide.cloneNode(true);
  track.appendChild(clone);
});

let position = 0;
let slideSpeed = 1.2; // adjust this value for faster/slower scroll

function autoScroll() {
  position -= slideSpeed;
  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }
  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(autoScroll);
}

autoScroll();
