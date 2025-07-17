// ==== CAROUSEL SLIDER ====
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');
let index = 0;

setInterval(() => {
  index = (index + 1) % slides.length;
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${slideWidth * index}px)`;
}, 3000);

// ==== COUNTDOWN TIMER ====
const eventDate = new Date("2025-09-20T10:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown-timer").innerHTML = "<p>🎉 Event Started!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
