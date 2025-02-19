//review java start
let currentPosition = 0;
const visibleCards = 3;

function moveCards(direction) {
    const container = document.querySelector('.review-container');
    const cards = document.querySelectorAll('.review-card');
    const totalCards = cards.length;
    
    // Calculate card width including gap
    const cardWidth = cards[0].offsetWidth + 20;
    
    currentPosition += direction;
    currentPosition = Math.max(0, Math.min(currentPosition, totalCards - visibleCards));
    
    // Apply translation
    container.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
    
    // Update active classes
    cards.forEach((card, index) => {
        const isActive = index >= currentPosition && index < currentPosition + visibleCards;
        card.classList.toggle('active', isActive);
    });
}

// Initialize first 3 cards
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.review-card').forEach((card, index) => {
        card.classList.toggle('active', index < visibleCards);
    });
});


//review java end





//paralex scrolling
let isScrolling = false;

function updateParallax() {
    const section = document.querySelector('.portfolio-section-2');
    if (!section) return;

    // Viewport-relative calculations
    const windowHeight = window.innerHeight;
    const viewportRatio = windowHeight / 1080;
    const scrollTop = window.scrollY;

    // Section dimensions
    const sectionStart = section.offsetTop - windowHeight;
    const sectionEnd = section.offsetTop + section.offsetHeight;
    const progress = Math.min(1, Math.max(0, (scrollTop - sectionStart) / (sectionEnd - sectionStart)));

    // Apply to images
    document.querySelectorAll('.paralex-image2').forEach(img => {
        const speed = parseFloat(img.dataset.scrollSpeed) || 0.2;
        const baseMovement = 300 * viewportRatio; // Core movement scaled to viewport
        const translateY = (parseFloat(img.dataset.initialY) || 0) * viewportRatio + (progress * speed * baseMovement);
        
        img.style.transform = `translate3d(0, ${translateY}px, 0)`;
        img.style.touchAction = 'pan-y'; // Prevent touch conflicts on mobile
    });
}

// Optimized scroll/resize handlers
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
            updateParallax();
            isScrolling = false;
        });
    }
});

window.addEventListener('resize', () => requestAnimationFrame(updateParallax));






document.addEventListener("DOMContentLoaded", function() {
    let previousHeight = window.innerHeight;

    function setFullHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // Set height on initial load
    setFullHeight();

    // Only recalculate height if a true resize happens (e.g., turning the screen, or resizing the browser window)
    window.addEventListener('resize', function() {
        const currentHeight = window.innerHeight;

        // Recalculate height only if the window height changes significantly
        // Prevent recalculating during scroll-induced changes (e.g., address bar hiding in mobile browsers)
        if (Math.abs(currentHeight - previousHeight) > 100) {
            setFullHeight();
            previousHeight = currentHeight; // Update the stored height
        }
    });
});



// Get all images within the .image-slider container
const imageSlider = document.querySelector('.image-slider');
const images = imageSlider.querySelectorAll('img'); // Select only images inside .image-slider
let currentIndex = 0;

// Ensure the first image is active on page load
images[currentIndex].classList.add('active');

function changeImage() {
    images[currentIndex].classList.remove('active'); // Remove 'active' from the current image
    currentIndex = (currentIndex + 1) % images.length; // Increment the index (cyclically)
    images[currentIndex].classList.add('active'); // Add 'active' to the next image
}

// Set an interval to change images every 1.5 seconds
setInterval(changeImage, 1500);



//language line thing
document.addEventListener('DOMContentLoaded', function() {
  const langSelector = document.querySelector('.language-selector');
  const flags = langSelector.querySelectorAll('.flag');

  function updateUnderline(element) {
    const flagRect = element.getBoundingClientRect();
    const containerRect = langSelector.getBoundingClientRect();
    const left = flagRect.left - containerRect.left;
    const width = flagRect.width;
    langSelector.style.setProperty('--underline-left', left + 'px');
    langSelector.style.setProperty('--underline-width', width + 'px');
  }

  // Set initial underline to the active flag (or first flag if none active)
  let activeFlag = langSelector.querySelector('.flag.active') || flags[0];
  updateUnderline(activeFlag);

  flags.forEach(flag => {
    flag.addEventListener('mouseenter', function() {
      updateUnderline(this);
    });

    flag.addEventListener('click', function(e) {
      e.preventDefault();
      flags.forEach(f => f.classList.remove('active'));
      this.classList.add('active');
      updateUnderline(this);
    });
  });

  // When mouse leaves the container, return the underline to the active flag
  langSelector.addEventListener('mouseleave', function() {
    activeFlag = langSelector.querySelector('.flag.active') || flags[0];
    updateUnderline(activeFlag);
  });
});

