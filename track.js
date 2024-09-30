// Speed variable to control the movement speed
let speed = 1; // You can adjust this value to change the speed

// Create a function to calculate spacing based on the track size
function calculateTrackSpacing(track) {
    // Get the actual width and height of the track
    const trackWidth = track.clientWidth;
    const trackHeight = track.clientHeight;

    // Set dynamic spacing based on track size
    const trackSpacingX = trackWidth; // Horizontal spacing should match track width
    const trackSpacingY = -trackHeight; // Vertical spacing should match track height (negative for upward movement)

    return { trackSpacingX, trackSpacingY };
}

// Array to hold track elements
const tracks = [];
const trackContainer = document.getElementById('track-container');

// Set the number of tracks to display
const trackCount = 6;

// Create and position initial tracks
for (let i = 0; i < trackCount; i++) {
    const track = document.createElement('div');
    track.classList.add('track'); // Add .track class to div
    track.style.backgroundImage = 'url(images/track1.png)'; // Ensure the image path is correct
    track.style.backgroundSize = 'cover'; // Make sure the image covers the div
    track.style.position = 'absolute'; // Position tracks absolutely

    // Append each track to the container
    trackContainer.appendChild(track);
    tracks.push(track);
}

// Wait for the tracks to render, then calculate the spacing
window.addEventListener('load', () => {
    const { trackSpacingX, trackSpacingY } = calculateTrackSpacing(tracks[0]);

    // Set initial position of tracks based on dynamic spacing
    for (let i = 0; i < trackCount; i++) {
        const track = tracks[i];
        track.style.left = `${i * trackSpacingX}px`;
        track.style.top = `${i * trackSpacingY}px`;
    }

    // Animation loop to move and reposition the tracks
    function animate() {
        for (let i = 0; i < tracks.length; i++) {
            const track = tracks[i];
            let currentX = parseFloat(track.style.left);
            let currentY = parseFloat(track.style.top);

            // Move the tracks along the isometric path
            currentX += speed * 3; // Move right
            currentY -= speed * 2; // Move up
            track.style.left = `${currentX}px`;
            track.style.top = `${currentY}px`;

            // Reposition tracks once they move out of the screen
            if (currentX > window.innerWidth || currentY < -track.clientHeight) {
                // Find the last track's position
                const lastTrack = tracks[trackCount - 1];
                const lastX = parseFloat(lastTrack.style.left);
                const lastY = parseFloat(lastTrack.style.top);

                // Reposition the current track to follow the last one
                track.style.left = `${lastX - trackSpacingX}px`;
                track.style.top = `${lastY - trackSpacingY}px`;
            }
        }

        // Call animate function again to keep the loop going
        requestAnimationFrame(animate);
    }

    // Start the animation
    animate();
});
