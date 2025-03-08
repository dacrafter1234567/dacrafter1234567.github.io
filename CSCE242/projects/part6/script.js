document.addEventListener("DOMContentLoaded", function () {
    loadDeities();
    setupSlideshow();
    setupDropdowns();
    setupGallery();
});

// Fetch and Display Deities from JSON
function loadDeities() {
    fetch("https://raw.githubusercontent.com/dacrafter1234567/dacrafter1234567.github.io/main/CSCE242/projects/part6/json/deities.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Deities Loaded:", data);
            displayDeities(data.deities); // Ensure correct property access
        })
        .catch(error => console.error("Error loading JSON:", error));
}

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
        deityElement.innerHTML = `
            <h3>${deity.name}</h3>
            <p><strong>Domain:</strong> ${deity.domains.join(", ")}</p>
            <p><strong>Affinity:</strong> ${deity.elemental_affinity}</p>
            <img src="${deity.image}" alt="${deity.name}" onerror="this.src='images/placeholder.jpg';">
        `;
        container.appendChild(deityElement);
    });
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
