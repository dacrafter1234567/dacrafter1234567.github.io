document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");
    const examples = document.querySelector(".examples");
    const examplesContent = document.querySelector(".examples-content");

    // Toggle dropdown visibility when dropdown is clicked
    dropdown.addEventListener("click", function () {
        dropdown.classList.toggle("active");
    });

    // Toggle visibility of example links when examples are clicked
    examples.addEventListener("click", function () {
        examples.classList.toggle("active");
    });

    function showExample1() {
        // Hide Example 2 when Example 1 is clicked
        document.getElementById("example2Content").classList.add("hidden");
        
        // Show Example 1
        document.getElementById("example1Content").classList.remove("hidden");
    }
    
    document.getElementById("example1Link").addEventListener("click", function(event) {
        event.preventDefault();
        showExample1();
    });
    
    document.getElementById("example1Link2").addEventListener("click", function(event) {
        event.preventDefault();
        showExample1();
    });
    
    function showExample2() {
        // Hide Example 1 when Example 2 is clicked
        document.getElementById("example1Content").classList.add("hidden");
        
        // Show Example 2
        document.getElementById("example2Content").classList.remove("hidden");
    }
    
    document.getElementById("example2Link").addEventListener("click", function(event) {
        event.preventDefault();
        showExample2();
    });
    
    document.getElementById("example2Link2").addEventListener("click", function(event) {
        event.preventDefault();
        showExample2();
    });
    
    // Toggle heart color for Example 2
    document.querySelectorAll(".colorButton").forEach(button => {
        button.addEventListener("click", function() {
            const heart = document.getElementById("heart");
            heart.className = this.getAttribute("data-color");
        });
    });
    
    // Handle transportation input in Example 1
    const transportInput = document.getElementById("transportInput");
    const transportImage = document.getElementById("transportImage");
    
    transportInput.addEventListener("blur", function () {
        console.log("Input field lost focus!");
        const userInput = transportInput.value.toLowerCase().trim();
        console.log("User Input:", userInput);
    
        if (["bike", "scooter", "car", "skateboard"].includes(userInput)) {
            console.log("Valid input detected. Setting image source...");
            transportImage.src = `images/${userInput}.png`;
            transportImage.classList.remove("hidden");
        } else {
            console.log("Invalid input. Hiding image...");
            transportImage.classList.add("hidden");
        }
    });
    
    
    
});
