// CLASSES & VARIABLES
const overlay = document.getElementById("bookingOverlay");
const buttons = [
    document.getElementById("lerretsmalingButton"),
    document.getElementById("akvarellmalingButton"),
    document.getElementById("mosaikkkunstButton"),
    document.getElementById("bookingOverlayCloseButton"),
];

// MAIN
console.debug("HELLO WORLD! - main.js");

toggleBookingOverlay();

buttons.forEach((b) => {
    // todo: auto fill in some content in the overlay based on which button is pressed
    b.onclick = toggleBookingOverlay;
});

// FUNCTIONS
function toggleBookingOverlay() {
    if (getOverlayDisplay() === "none") {
        setOverlayDisplay("flex");
        document.body.classList.add("scrollingDisabled");
        console.debug("opened booking overlay");
    }
    else {
        setOverlayDisplay("none");
        document.body.classList.remove("scrollingDisabled");
        console.debug("closed booking overlay");
    } 
}

function getOverlayDisplay() {
    return overlay.style.display;
}

function setOverlayDisplay(input) {
    overlay.style.display = input;
}
