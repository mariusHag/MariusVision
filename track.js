// Constants for track spacing and movement
const trackSpacingX = 705; // Horizontal spacing between tracks
const trackSpacingY = -470; // Vertical spacing between tracks
let spt = 1; // Speed variable that can be changed dynamically

const trackContainer = document.getElementById('track-container');
const tracks = [];
const trackCount = 6; // Number of tracks

// Create the tracks
for (let i = 0; i < trackCount; i++) {
    const track = document.createElement('div');
    track.classList.add('track');

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

        // Check if the track has moved out of the viewport
        // Define conditions for repositioning
        if (tracks[i].x > window.innerWidth || tracks[i].y < -150) {
            // Calculate new position for the track that moved out
            const newX = (i === 0) 
                ? tracks[trackCount - 1].x - trackSpacingX // Place new track directly to the left of the last track
                : tracks[i - 1].x - trackSpacingX; // Place each track based on the previous one
            
            const newY = tracks[i].y + trackSpacingY; // Maintain vertical spacing

            // Reposition the track without changing the movement of other tracks
            tracks[i].x = newX;
            tracks[i].y = newY;

            // Update the position of the track after repositioning
            tracks[i].element.style.left = `${tracks[i].x}px`;
            tracks[i].element.style.top = `${tracks[i].y}px`;
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
