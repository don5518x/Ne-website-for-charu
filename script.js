const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

const secretButton = document.getElementById('secretButton');
const secretMessage = document.getElementById('secretMessage');
secretButton.addEventListener('click', () => {
  const opening = secretMessage.hidden;
  secretMessage.hidden = !opening;
  secretButton.textContent = opening ? 'Hide secret message ♡' : 'Reveal my secret 💖';
  if (opening) secretMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

const wishButton = document.getElementById('wishButton');
const wishResult = document.getElementById('wishResult');
wishButton.addEventListener('click', () => {
  wishResult.textContent = '✨ Your wish has been sent to the universe. May it come true, Charu! 💗';
  for (let i = 0; i < 24; i++) setTimeout(() => makeHeart(true), i * 75);
});

function makeHeart(fromWish = false) {
  const heart = document.createElement('span');
  heart.className = 'float-heart';
  heart.textContent = ['♡', '💗', '✧', '💕', '🌸'][Math.floor(Math.random() * 5)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (fromWish ? 16 + Math.random() * 24 : 14 + Math.random() * 18) + 'px';
  heart.style.setProperty('--duration', (4 + Math.random() * 4) + 's');
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8500);
}
setInterval(() => { if (Math.random() > 0.3) makeHeart(); }, 850);

const audio = document.getElementById('birthdayAudio');
const musicToggle = document.getElementById('musicToggle');
musicToggle.addEventListener('click', async () => {
  if (audio.paused) {
    try {
      await audio.play();
      musicToggle.textContent = '♫ Music on';
    } catch (e) {
      musicToggle.textContent = 'Add music.mp3';
    }
  } else {
    audio.pause();
    musicToggle.textContent = '♫ Music';
  }
});
