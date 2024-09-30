// Speed variable to control the movement speed
let speed = 1; // You can adjust this value to change the speed

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
function calculateTrackSpacing(track) {
    const trackWidth = 300;  // Fixed width as set in CSS (300px)
    const trackHeight = 200; // Fixed height as set in CSS (200px)

    const trackSpacingX = trackWidth + 20; // Horizontal spacing
    const trackSpacingY = -(trackHeight + 20); // Vertical spacing (negative for upward movement)

    return { trackSpacingX, trackSpacingY };
}

// Wait for the tracks to render, then calculate spacing and position them
window.addEventListener('load', () => {
    const { trackSpacingX, trackSpacingY } = calculateTrackSpacing(tracks[0]);

    // Set initial positions for the tracks
    for (let i = 0; i < trackCount; i++) {
        const track = tracks[i];
        track.style.left = `${i * trackSpacingX}px`;
        track.style.top = `${i * trackSpacingY}px`;
    }

    // Animation loop to move and reposition tracks
    function animate() {
        for (let i = 0; i < tracks.length; i++) {
            const track = tracks[i];
            let currentX = parseFloat(track.style.left);
            let currentY = parseFloat(track.style.top);

            // Move tracks along the isometric path
            currentX += speed * 3; // Move right (positive X)
            currentY -= speed * 2; // Move up (negative Y)
            track.style.left = `${currentX}px`;
            track.style.top = `${currentY}px`;

            // Check if the track has moved out of view, and reposition it if needed
            if (currentX > window.innerWidth || currentY < -track.clientHeight) {
                // Find the farthest track (the one on the bottom-left) and reposition relative to it
                const lastTrack = tracks.reduce((farthest, t) => {
                    const farthestX = parseFloat(farthest.style.left);
                    const farthestY = parseFloat(farthest.style.top);
                    const trackX = parseFloat(t.style.left);
                    const trackY = parseFloat(t.style.top);
                    return (trackX < farthestX || trackY > farthestY) ? t : farthest;
                }, tracks[0]);

                const lastX = parseFloat(lastTrack.style.left);
                const lastY = parseFloat(lastTrack.style.top);

                // Reposition the current track behind the farthest one
                track.style.left = `${lastX - trackSpacingX}px`;
                track.style.top = `${lastY - trackSpacingY}px`;
            }
        }

        // Request the next animation frame
        requestAnimationFrame(animate);
    }

    // Start the animation loop
    animate();
});
