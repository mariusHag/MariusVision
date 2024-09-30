// track.js

// Define the track parameters
const originalWidth = 782; // Original width of the track image
const originalHeight = 981; // Original height of the track image
const trackCount = 6; // Total number of tracks to create
const trackSpeed = 3; // Speed of the tracks
const tracks = [];

// Set the desired size for the track images
const desiredTrackWidth = 300; // Desired width of the track images
const desiredTrackHeight = (desiredTrackWidth / originalWidth) * originalHeight; // Maintain aspect ratio

// Calculate spacing based on the size
const trackSpacingX = (desiredTrackWidth * 3); // Horizontal spacing based on the 3x factor
const trackSpacingY = (desiredTrackHeight * -2); // Vertical spacing based on the 2x factor

// Create the track elements
function createTracks() {
    const trackContainer = document.getElementById('track-container');
    for (let i = 0; i < trackCount; i++) {
        const track = document.createElement('img');
        track.src = 'images/track1.png'; // Path to your track image
        track.className = 'track';
        track.style.left = `${i * trackSpacingX}px`; // Initial left position based on spacing
        track.style.top = `${i * trackSpacingY}px`; // Initial top position based on spacing
        trackContainer.appendChild(track);
        tracks.push(track);
    }
}

// Update the positions of the tracks
function updateTracks() {
    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];
        // Move track based on speed
        track.style.left = `${parseFloat(track.style.left) + (trackSpeed * 3)}px`;
        track.style.top = `${parseFloat(track.style.top) - (trackSpeed * 2)}px`;

        // Check if the track has gone out of the view to reposition it
        if (parseFloat(track.style.left) > window.innerWidth || parseFloat(track.style.top) < -desiredTrackHeight) {
            // Reposition the track to the left side
            track.style.left = `-${trackSpacingX}px`; // Start from the left side
            track.style.top = `${(Math.floor(Math.random() * (window.innerHeight / 2))) + 50}px`; // Randomize the y position within a reasonable range
        }
    }
}

// Animation loop
function animate() {
    updateTracks();
    requestAnimationFrame(animate);
}

// Initialize tracks and start animation
createTracks();
animate();
