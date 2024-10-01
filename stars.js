const starContainer = document.getElementById('star-container');
const starCount = 100; // Number of stars to generate

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  // Random size between 10px and 30px for the stars
  const starSize = Math.random() * 20 + 10 + 'px';
  star.style.width = starSize;
  star.style.height = starSize;

  // Random position within the container
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';

  // Random animation delay for a natural effect
  star.style.animationDelay = Math.random() * 5 + 's';

  return star;
}

// Generate all stars at once
for (let i = 0; i < starCount; i++) {
  const star = createStar();
  starContainer.appendChild(star);
}
