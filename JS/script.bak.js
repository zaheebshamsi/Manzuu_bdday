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
        }, 100000); // 8000 milliseconds = 8 seconds
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


