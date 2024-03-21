document.addEventListener("DOMContentLoaded", function() {
    const balloonCount = 1000; // Specify the number of balloons to generate

    const balloonsContainer = document.querySelector('.balloons');
    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        const string = document.createElement('div');
        string.classList.add('string');
        balloon.appendChild(string);
        balloonsContainer.appendChild(balloon);

        const balloonWidth = balloon.offsetWidth; // Get the width of the balloon element
        const maxPosition = window.innerWidth - balloonWidth; // Calculate the maximum position within the viewport

        // Randomize horizontal position within the viewport width
        const randomPosition = Math.random() * maxPosition;
        balloon.style.left = randomPosition + 'px';

        balloon.style.animationDuration = Math.random() * 6 + 5 + 's'; // Randomize animation duration

        // Set a timer to gradually fade away the balloon over 5 seconds
        setTimeout(function() {
            let opacity = 1; // Initial opacity
            const fadeOutInterval = setInterval(function() {
                opacity -= 0.01; // Reduce opacity gradually
                balloon.style.opacity = opacity; // Update opacity
                if (opacity <= 0) {
                    clearInterval(fadeOutInterval); // Stop fading when opacity reaches 0
                    balloon.remove(); // Remove the balloon from the DOM
                }
            }, 50); // Adjust the interval for smoother fading
        }, 10000); // 8000 milliseconds = 8 seconds
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#f44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']; // Define colors for confetti

    setInterval(createConfetti, 100); // Create confetti at intervals

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        const size = Math.random() * 10 + 5; // Randomize size of confetti
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;

        const color = colors[Math.floor(Math.random() * colors.length)]; // Randomize color
        confetti.style.backgroundColor = color;

        const x = Math.random() * window.innerWidth; // Randomize horizontal position
        const y = -10; // Start confetti from top of viewport
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;

        confettiContainer.appendChild(confetti);

        // Animation to move confetti downwards
        confetti.animate([
            { transform: `translate(${x}px, ${y}px)` },
            { transform: `translate(${x}px, ${window.innerHeight}px)` }
        ], {
            duration: Math.random() * 3000 + 2000, // Randomize animation duration
            easing: 'ease-out',
            fill: 'forwards'
        });

        // Remove confetti after animation ends
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
});





// Function to append text after 3 seconds
function appendText() {
    // Create a new span element for the appended text
    var appendedText = document.createElement("span");
    appendedText.textContent = " (and life.. Huehuehuehue)"; // Set the text content

    // Apply inline CSS to set the color to red
    appendedText.style.color = "lightgray"; // Change to your desired color

    // Append the new span element to the existing ribbon text
    document.getElementById("ribbon").appendChild(appendedText);
}

// Call the appendText function after 2 seconds
setTimeout(appendText, 2000); // 2000 milliseconds = 2 seconds


