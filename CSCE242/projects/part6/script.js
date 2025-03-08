let slides = document.querySelectorAll("#slideshow .slide, #galleryslideshow .slide");
let current = 0; // Track the current slide

// Auto slideshow
setInterval(nextSlide, 5000);

function nextSlide() {
    slides[current].classList.add("hidden"); // Hide current slide
    current = (current + 1) % slides.length; // Move to next
    slides[current].classList.remove("hidden"); // Show new slide
}

function prevSlide() {
    slides[current].classList.add("hidden"); // Hide current slide
    current = (current - 1 + slides.length) % slides.length; // Move to previous
    slides[current].classList.remove("hidden"); // Show new slide
}


document.querySelectorAll(".gallery section").forEach(()=>{
    tile.onClick = () => {
        const label = tile.querySelector("h4").innerHTML;
        const imgSRC = tile.querySelector("img").src;
        console.log(label);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("searchIcon");
    const searchDropdown = document.getElementById("searchDropdown");
    const signinbtn = document.getElementById("signinbtn");
    const signinDropdown = document.getElementById("signinDropdown");

    // Show/hide search dropdown
    searchIcon.addEventListener("click", function (event) {
        event.preventDefault();
        searchDropdown.style.display = (searchDropdown.style.display === "block") ? "none" : "block";
    });

    // Show/hide sign-in dropdown
    signinbtn.addEventListener("click", function () {
        signinDropdown.style.display = (signinDropdown.style.display === "block") ? "none" : "block";
    });

    // Hide dropdowns when clicking outside
    document.addEventListener("click", function (event) {
        if (!searchIcon.contains(event.target) && !searchDropdown.contains(event.target)) {
            searchDropdown.style.display = "none";
        }
        if (!signinbtn.contains(event.target) && !signinDropdown.contains(event.target)) {
            signinDropdown.style.display = "none";
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    fetch("https://raw.githubusercontent.com/dacrafter1234567/dacrafter1234567.github.io/main/CSCE242/projects/part6/json/deities.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Deities Loaded:", data);
            displayDeities(data); // Call a function to process the data
        })
        .catch(error => {
            console.error("Error loading JSON:", error);
        });
});

function displayDeities(deities) {
    const container = document.getElementById("deity-container");
    if (!container) {
        console.error("Container element not found!");
        return;
    }

    container.innerHTML = ""; // Clear existing content

    deities.forEach(deity => {
        const deityElement = document.createElement("div");
        deityElement.className = "deity";
        deityElement.innerHTML = `<h3>${deity.name}</h3><p>Domain: ${deity.domain}</p>`;
        container.appendChild(deityElement);
    });
}




