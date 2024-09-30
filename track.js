
// Constants for track spacing and movement
const trackSpacingX = 705; // Horizontal spacing between tracks
const trackSpacingY = -470; // Vertical spacing between tracks
let spt = 1; // Speed variable that can be changed dynamically

const trackContainer = document.getElementById('track-container');
const tracks = [];
const numTracks = 5; // Number of tracks you want to display

// Create the tracks
for (let i = 0; i < numTracks; i++) {
    const track = document.createElement('div');
    track.classList.add('track');
    
    // Initial position for each track
    track.style.left = `${i * trackSpacingX}px`;
    track.style.top = `${i * trackSpacingY}px`;
    
    // Add track to container and to the tracks array
    trackContainer.appendChild(track);
    tracks.push({
        element: track,
        x: i * trackSpacingX,
        y: i * trackSpacingY
    });
}

// Function to update the position of tracks
function updateTracks() {
    for (let i = 0; i < tracks.length; i++) {
        // Move the tracks based on the direction (3x-2y) and speed
        tracks[i].x += 3 * spt;
        tracks[i].y -= 2 * spt;

        // Update the track's position
        tracks[i].element.style.left = `${tracks[i].x}px`;
        tracks[i].element.style.top = `${tracks[i].y}px`;

        // When the track moves out of the viewport, reposition it
        if (tracks[i].x > window.innerWidth || tracks[i].y > window.innerHeight || tracks[i].y < -trackSpacingY) {
            // Reposition track to the left and reset its y-coordinate
            tracks[i].x = -trackSpacingX; // Move it back to the left
            tracks[i].y = Math.random() * window.innerHeight; // Randomize Y position for variety
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