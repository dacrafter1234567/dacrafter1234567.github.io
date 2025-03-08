document.addEventListener("DOMContentLoaded", function () {
    fetch("deities.json") // Adjust the path based on your project structure
        .then(response => response.json())
        .then(data => {
            console.log("Deities Loaded:", data);
            displayDeity(data.deities[0]); // Loads the first deity for now
        })
        .catch(error => console.error("Error loading JSON:", error));
});

function displayDeity(deity) {
    const container = document.querySelector(".deitydesc");

    if (!container) {
        console.error("Container element not found!");
        return;
    }

    container.innerHTML = `
        <h2>${deity.name}</h2>
        <h3>Elemental Affinity: ${deity.elementalAffinity}</h3>
        <p>${deity.description}</p>
        <p>Presenting Gender: ${deity.presentingGender}</p>
        <p>Side of Archon War: ${deity.sideOfArchonWar}</p>
        <p>Alignment: ${deity.alignment}</p>
        <p>Personality: ${deity.personality.join(", ")}</p>
        <p>Devoted Guilds: ${deity.devotedGuilds}</p>
    `;
}


// Slideshow Functionality
function setupSlideshow() {
    let slides = document.querySelectorAll("#slideshow .slide, #galleryslideshow .slide");
    let current = 0;

    if (slides.length === 0) return; // Ensure slides exist before running

    setInterval(() => nextSlide(slides, current), 5000);

    function nextSlide(slides, currentIndex) {
        slides[currentIndex].classList.add("hidden");
        current = (currentIndex + 1) % slides.length;
        slides[current].classList.remove("hidden");
    }

    function prevSlide() {
        slides[current].classList.add("hidden");
        current = (current - 1 + slides.length) % slides.length;
        slides[current].classList.remove("hidden");
    }
}

// Gallery Interaction
function setupGallery() {
    document.querySelectorAll(".gallery section").forEach(tile => {
        tile.addEventListener("click", () => {
            const label = tile.querySelector("h4")?.innerHTML || "Unknown";
            const imgSRC = tile.querySelector("img")?.src || "";
            console.log(`Selected: ${label} - ${imgSRC}`);
        });
    });
}

// Dropdown Menu Handling
function setupDropdowns() {
    const searchIcon = document.getElementById("searchIcon");
    const searchDropdown = document.getElementById("searchDropdown");
    const signinbtn = document.getElementById("signinbtn");
    const signinDropdown = document.getElementById("signinDropdown");

    if (searchIcon && searchDropdown) {
        searchIcon.addEventListener("click", (event) => {
            event.preventDefault();
            toggleDropdown(searchDropdown);
        });
    }

    if (signinbtn && signinDropdown) {
        signinbtn.addEventListener("click", () => toggleDropdown(signinDropdown));
    }

    // Hide dropdowns when clicking outside
    document.addEventListener("click", function (event) {
        if (searchIcon && searchDropdown && !searchIcon.contains(event.target) && !searchDropdown.contains(event.target)) {
            searchDropdown.style.display = "none";
        }
        if (signinbtn && signinDropdown && !signinbtn.contains(event.target) && !signinDropdown.contains(event.target)) {
            signinDropdown.style.display = "none";
        }
    });
}

// Toggle Dropdown Visibility
function toggleDropdown(element) {
    if (element) {
        element.style.display = element.style.display === "block" ? "none" : "block";
    }
}
