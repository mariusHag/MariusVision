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
        if (tracks[i].x > window.innerWidth || tracks[i].y < -150) {
            // Reposition all tracks
            const lastTrackX = tracks[trackCount - 1].x; // Get the position of the last track

            // Calculate new positions for all tracks based on the last track
            for (let j = 0; j < tracks.length; j++) {
                tracks[j].x = lastTrackX - ((trackCount - j) * trackSpacingX);
                tracks[j].y = tracks[j].y + trackSpacingY; // Maintain vertical spacing

                // Update the position again after repositioning
                tracks[j].element.style.left = `${tracks[j].x}px`;
                tracks[j].element.style.top = `${tracks[j].y}px`;
            }
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
