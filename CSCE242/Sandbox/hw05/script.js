console.log("Script loaded"); // Check if script is loading

// Function to add "hello" when button is clicked
function addHello() {
    let container = document.getElementById("hello-container");
    let newHello = document.createElement("div");
    newHello.textContent = "hello";
    container.appendChild(newHello);
}

// Attach event listener for button click (in case inline onclick fails)
window.onload = function() {
    document.getElementById("image").onclick = changeImage;
    document.getElementById("color-picker").onchange = changeColor;
};

// Function to change the color of the star
function changeColor() {
    let color = document.getElementById("color-picker").value;
    document.getElementById("star-path").setAttribute("fill", color);
    console.log("Color changed to:", color);
}

// Image change functionality
let images = ["images/image1.png", "images/image2.png"];
let currentImageIndex = 0;

function changeImage() {
    console.log("Changing image..."); // Debugging log
    currentImageIndex = (currentImageIndex + 1) % images.length;
    let img = document.getElementById("image");
    img.src = images[currentImageIndex];

    // Debugging: Confirm image change
    img.onload = () => console.log("Image updated to:", img.src);
}
