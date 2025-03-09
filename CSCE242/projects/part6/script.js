document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON from GitHub raw URL
    fetch("https://raw.githubusercontent.com/dacrafter1234567/dacrafter1234567.github.io/main/CSCE242/projects/part6/json/deities.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Deities Loaded:", data);
            displayDeities(data.deities); // ✅ Fix: Access the array inside the object
        })
        .catch(error => {
            console.error("Error loading JSON:", error);
        });
});

function displayDeities(deities) {
    console.log("Processing Deities:", deities);

    if (!Array.isArray(deities)) {
        console.error("Error: deities is not an array!", deities);
        return;
    }

    deities.forEach((deity, index) => {
        let container = document.getElementById(`deity-container-${index + 1}`);
        console.log(`Looking for: deity-container-${index + 1}`, container);

        if (!container) {
            console.error(`Container deity-container-${index + 1} not found!`);
            return;
        }

        const deityElement = document.createElement("div");
        deityElement.className = "deity-info";

        deityElement.innerHTML = `
            <h2>${deity.name}</h2>
            <h3>Elemental Affinity: ${deity.elemental_affinity}</h3>
            <p>${deity.description}</p>
            <p><strong>Domains:</strong> ${Array.isArray(deity.domains) ? deity.domains.join(", ") : "Unknown"}</p>
            <p><strong>Gender:</strong> ${deity.gender}</p>
            <p><strong>Side:</strong> ${deity.side}</p>
            <p><strong>Alignment:</strong> ${deity.alignment}</p>
            <p><strong>Personality:</strong> ${Array.isArray(deity.personality) ? deity.personality.join(", ") : "Unknown"}</p>
            <p><strong>Devoted Guilds:</strong> ${Array.isArray(deity.devoted_guilds) ? deity.devoted_guilds.join(", ") : "None"}</p>
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
