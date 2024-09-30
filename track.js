// Constants for track spacing and movement
const trackSpacingX = 705; // Horizontal spacing between tracks
const trackSpacingY = -470; // Vertical spacing between tracks
let spt = 1; // Speed variable that can be changed dynamically

const trackContainer = document.getElementById('track-container');
const tracks = [];
const numTracks = Math.ceil(window.innerWidth / trackSpacingX) + 1; // Number of tracks based on the window width
const trackWidth = 200; // Width of each track
const trackHeight = 100; // Height of each track

// Create the tracks
for (let i = 0; i < numTracks; i++) {
    const track = document.createElement('div');
    track.classList.add('track'); // Make sure this class has appropriate styles in your CSS

    // Set the size of the track
    track.style.width = `${trackWidth}px`;
    track.style.height = `${trackHeight}px`;

    // Initial position for each track
    track.style.left = `${i * trackSpacingX}px`;
    track.style.top = `${Math.floor(i * trackSpacingY)}px`; // Space them vertically

    // Add track to container and to the tracks array
    trackContainer.appendChild(track);
    tracks.push({
        element: track,
        x: i * trackSpacingX,
        y: Math.floor(i * trackSpacingY)
    });
}

// Function to update the position of tracks
function updateTracks() {
    for (let i = 0; i < tracks.length; i++) {
        // Move the tracks based on the direction (3x-2y) and speed
        tracks[i].x += 3 * spt;  // Horizontal movement
        tracks[i].y -= 2 * spt;  // Vertical movement

        // Update the track's position
        tracks[i].element.style.left = `${tracks[i].x}px`;
        tracks[i].element.style.top = `${tracks[i].y}px`;

        // When the track moves out of the viewport, reposition it
        if (tracks[i].x > window.innerWidth) {
            // Reposition track to the left, allowing for continuous scrolling
            tracks[i].x = -trackWidth; // Move it back to the left
            tracks[i].y = Math.floor((i - 1) * trackSpacingY); // Keep vertical positioning
        }
    }

    // Request the next frame for smooth animation
    requestAnimationFrame(updateTracks);
}

// Start the animation
requestAnimationFrame(updateTracks);

// Example function to change the speed dynamically
function setSpeed(newSpeed) {
    spt = newSpeed;
}
