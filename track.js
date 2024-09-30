// Parameters for track size and spacing with 3:2 ratio
const trackWidth = 300;  // Fixed width, can be adjusted but respects 3:2 ratio
const trackHeight = trackWidth * (2 / 3);  // Height based on 3:2 ratio
const horizontalSpacing = trackWidth; // Space between tracks horizontally
const verticalSpacing = trackHeight;  // Space between tracks vertically
const speed = 1; // Adjust speed as needed

// Array to hold track elements
const tracks = [];
const trackContainer = document.getElementById('track-container');

// Set the number of tracks to display (you can adjust this number)
const trackCount = 6;

// Create and position the initial tracks
for (let i = 0; i < trackCount; i++) {
    const track = document.createElement('div');
    track.classList.add('track');
    track.style.backgroundImage = 'url(images/track1.png)'; // Set the track image
    track.style.width = `${trackWidth}px`;  // Set width and height based on fixed ratio
    track.style.height = `${trackHeight}px`;
    trackContainer.appendChild(track);
    tracks.push(track);
}

// Function to calculate track positions and move them
function calculateAndMoveTracks() {
    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];
        let currentX = parseFloat(track.style.left) || 0;
        let currentY = parseFloat(track.style.top) || 0;

        // Move tracks along the 3:2 isometric path
        currentX += speed * 3;  // Move right (positive X)
        currentY -= speed * 2;  // Move up (negative Y)
        track.style.left = `${currentX}px`;
        track.style.top = `${currentY}px`;

        // Check if the track has moved out of view, and reposition if necessary
        if (currentX > window.innerWidth || currentY < -trackHeight) {
            const lastTrack = tracks.reduce((farthest, t) => {
                const farthestX = parseFloat(farthest.style.left) || 0;
                const farthestY = parseFloat(farthest.style.top) || 0;
                const trackX = parseFloat(t.style.left) || 0;
                const trackY = parseFloat(t.style.top) || 0;
                return (trackX < farthestX || trackY > farthestY) ? t : farthest;
            }, tracks[0]);

            const lastX = parseFloat(lastTrack.style.left) || 0;
            const lastY = parseFloat(lastTrack.style.top) || 0;

            // Reposition the current track relative to the farthest one
            track.style.left = `${lastX - horizontalSpacing}px`;
            track.style.top = `${lastY - verticalSpacing}px`;
        }
    }

    // Request the next frame for the animation
    requestAnimationFrame(calculateAndMoveTracks);
}

// Start the animation loop
window.addEventListener('load', () => {
    for (let i = 0; i < tracks.length; i++) {
        // Set initial positions for the tracks (evenly spaced)
        const track = tracks[i];
        track.style.left = `${i * horizontalSpacing}px`;
        track.style.top = `${i * verticalSpacing}px`;
    }

    calculateAndMoveTracks();
});
