// Track parameters
const originalWidth = 782; // Original width of the track image
const originalHeight = 981; // Original height of the track image
const trackCount = 90; // Total number of tracks to create
const trackSpeed = 0.5; // Speed of the tracks
const tracks = [];

// Set the desired size for the track images
const desiredTrackWidth = 300; // Desired width of the track images
const desiredTrackHeight = (desiredTrackWidth / originalWidth) * originalHeight; // Maintain aspect ratio

// Original spacing values
const originalTrackSpacingX = 705; // Original horizontal spacing
const originalTrackSpacingY = -470; // Original vertical spacing

// Calculate the new spacing based on the desired width
const trackSpacingX = (desiredTrackWidth / originalWidth) * originalTrackSpacingX; // Adjusted horizontal spacing
const trackSpacingY = (desiredTrackHeight / originalHeight) * originalTrackSpacingY; // Adjusted vertical spacing

// Create the track elements
function createTracks() {
    const trackContainer = document.getElementById('track-container');
    for (let i = 0; i < trackCount; i++) {
        const track = document.createElement('img');
        track.src = 'images/track1.png'; // Path to your track image
        track.className = 'track';
        
        // Set initial positions to be fully visible
        track.style.left = `${i * trackSpacingX}px`;
        track.style.top = `${(desiredTrackHeight / 2) + (i * trackSpacingY)}px`; // Maintain consistent vertical offset
        
        trackContainer.appendChild(track);
        tracks.push(track);
    }
}

// Update the positions of the track

function updateTracks() {
    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];

        // Move track diagonally down and to the left based on speed
        track.style.left = `${parseFloat(track.style.left) - (trackSpeed * 3)}px`; // Move left
        track.style.top = `${parseFloat(track.style.top) + (trackSpeed * 2)}px`; // Move down

        /*Check if the track has gone out of the view to reposition it
        if (parseFloat(track.style.left) < -desiredTrackWidth) {
            // Reposition the track to the right side of the screen
            track.style.left = `${window.innerWidth}px`; // Start from the right side
            
            // Reset the vertical position based on its index without using original positioning
            track.style.top = `${(desiredTrackHeight / 2) + (i * trackSpacingY)}px`; // Maintain the vertical spacing based on index
        }
        */
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
