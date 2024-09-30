// Speed variable to control the movement speed
let speed = 1; // Adjust this value to change the speed

// Array to hold track elements
const tracks = [];
const trackContainer = document.getElementById('track-container');

// Set the number of tracks to display
const trackCount = 6;

// Create and position initial tracks
for (let i = 0; i < trackCount; i++) {
    const track = document.createElement('div');
    track.classList.add('track'); // Add .track class to div
    track.style.backgroundImage = 'url(images/track1.png)'; // Ensure correct image path
    trackContainer.appendChild(track);
    tracks.push(track);
}

// Function to calculate the track spacing based on the CSS sizes
function calculateTrackSpacing() {
    const trackWidth = 300;  // Fixed width as set in CSS (300px)
    const trackHeight = 200; // Fixed height as set in CSS (200px)

    const trackSpacingX = trackWidth + 100; // Horizontal spacing
    const trackSpacingY = -(trackHeight + 50); // Vertical spacing (negative for upward movement)

    return { trackSpacingX, trackSpacingY };
}

// Wait for the tracks to render, then calculate spacing and position them
window.addEventListener('load', () => {
    const { trackSpacingX, trackSpacingY } = calculateTrackSpacing();

    // Set initial positions for the tracks in a straight line
    for (let i = 0; i < trackCount; i++) {
        const track = tracks[i];
        track.style.left = `${i * trackSpacingX}px`; // Initial horizontal positioning
        track.style.top = `${i * trackSpacingY}px`;  // Initial vertical positioning
    }

    // Animation loop to move and reposition tracks
    function animate() {
        for (let i = 0; i < tracks.length; i++) {
            const track = tracks[i];
            let currentX = parseFloat(track.style.left);
            let currentY = parseFloat(track.style.top);

            // Move tracks along the isometric path (3x2 movement)
            currentX += speed * 3
