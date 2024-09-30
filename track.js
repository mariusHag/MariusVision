// Set the number of tracks and their spacing
const trackCount = 6; // Number of tracks
const trackSpacingX = 705; // Horizontal spacing between tracks
const trackSpacingY = -470; // Vertical spacing between tracks

// Array to hold track objects
const tracks = [];
const trackContainer = document.getElementById('track-container');

// Create and position initial tracks
for (let i = 0; i < trackCount; i++) {
    const track = document.createElement('div');
    track.classList.add('track'); // Ensure your CSS has .track class defined
    track.style.left = `${i * trackSpacingX}px`; // Position horizontally
    track.style.top = `${i * trackSpacingY}px`; // Position vertically
    trackContainer.appendChild(track);
    tracks.push(track);
}

// Speed variable to control the movement speed
const speed = 3; // You can adjust this value to change the speed

// Animation loop
function animate() {
    // Move each track
    for (let i = 0; i < trackCount; i++) {
        // Calculate new position
        const track = tracks[i];
        let currentX = parseFloat(track.style.left);
        let currentY = parseFloat(track.style.top);

        // Update track position
        currentX += speed * 3; // Move right
        currentY -= speed * 2; // Move up
        track.style.left = `${currentX}px`;
        track.style.top = `${currentY}px`;

        // Check if the track has moved outside the viewport
        // Adjust these values based on your viewport dimensions
        if (currentX > window.innerWidth || currentY < -track.clientHeight) {
            // Find the last track's position to reposition
            const lastTrack = tracks[trackCount - 1];
            const lastX = parseFloat(lastTrack.style.left);
            const lastY = parseFloat(lastTrack.style.top);

            // Reposition this track to the back
            track.style.left = `${lastX - trackSpacingX}px`;
            track.style.top = `${lastY - trackSpacingY}px`;
        }
    }
    requestAnimationFrame(animate); // Call animate again
}

// Start the animation
animate();
