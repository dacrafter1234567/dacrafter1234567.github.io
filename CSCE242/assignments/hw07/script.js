document.getElementById("draw-ladder").addEventListener("click", function() {
    const container = document.getElementById("ladder-container");

    // Remove existing rungs if any
    document.querySelectorAll(".rung").forEach(rung => rung.remove());

    // Draw 10 rungs
    for (let i = 0; i < 10; i++) {
        let rung = document.createElement("div");
        rung.classList.add("rung");
        rung.style.bottom = `${i * 30 + 30}px`;  // Position rungs with equal spacing
        container.appendChild(rung);
    }

    // Show the ladder sides
    document.getElementById("left-side").style.display = "block";
    document.getElementById("right-side").style.display = "block";

    // Show the climb button and stick person
    document.getElementById("climb-ladder").style.display = "block";
    let stickPerson = document.getElementById("stick-person");
    stickPerson.style.display = "block";  // Show stick figure
    stickPerson.style.bottom = "0px";  // Start at the bottom
    stickPerson.src = "images/left.png";  // Default image facing left
});

document.getElementById("climb-ladder").addEventListener("click", function() {
    let stickPerson = document.getElementById("stick-person");
    let position = 0;
    let step = 30;  // Distance the stick person moves per step
    let imageToggle = true;

    let climbInterval = setInterval(function() {
        if (position >= 270) { // Stop when the stick person reaches the top (just below the top rung)
            position = 0;  // Reset to the bottom
            stickPerson.style.bottom = position + "px";  // Reset stick person to bottom

            // Optional: Switch image direction when resetting to bottom
            stickPerson.src = imageToggle ? "images/right.png" : "images/left.png"; 
            
            // Continue the climb after resetting to bottom
        } else {
            position += step;
            stickPerson.style.bottom = position + "px";  // Move the stick person up
            stickPerson.src = imageToggle ? "images/right.png" : "images/left.png";  // Alternate between left and right images
            imageToggle = !imageToggle;
        }
    }, 500);  // Interval for climbing effect
});

document.getElementById("draw-ladder-2").addEventListener("click", function() {
    const container = document.getElementById("ladder-container");

    // Remove existing rungs if any
    document.querySelectorAll(".rung").forEach(rung => rung.remove());

    // Draw 10 rungs
    for (let i = 0; i < 10; i++) {
        let rung = document.createElement("div");
        rung.classList.add("rung");
        rung.style.bottom = `${i * 30 + 30}px`;  
        container.appendChild(rung);
    }

    // Show the ladder sides
    document.getElementById("left-side").style.display = "block";
    document.getElementById("right-side").style.display = "block";

    // Show the climb button and stick person
    document.getElementById("climb-ladder").style.display = "block";
    let stickPerson = document.getElementById("stick-person");
    stickPerson.style.display = "block";  
    stickPerson.style.bottom = "0px";  
    stickPerson.src = "images/left.png";  

    // Remove existing top and bottom images if any
    document.querySelectorAll(".ladder-image").forEach(img => img.remove());

    // Add an image above the ladder
    let topImage = document.createElement("img");
topImage.src = "images/BluePortal.png";
topImage.classList.add("ladder-image", "top");
topImage.style.position = "absolute";
topImage.style.height = "100px";  // Set the height
topImage.style.width = "300px";  // Keep the aspect ratio
topImage.style.left = "50%";
topImage.style.transform = "translateX(-49%)";
topImage.style.zIndex = "-2";  // Ensure it's behind other content
topImage.style.top = "-40px";  // Use `top` instead of `bottom`
container.appendChild(topImage);


    // Add an image below the ladder
    let bottomImage = document.createElement("img");
    bottomImage.src = "images/OrangePortal.png";  
    bottomImage.classList.add("ladder-image");
    bottomImage.style.position = "absolute";
    bottomImage.style.bottom = "-50px";  
    bottomImage.style.left = "50%";
    bottomImage.style.transform = "translateX(-50%)";
    bottomImage.style.height = "100px";  // Set the height to 100px
    container.appendChild(bottomImage);
});

