document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON from the GitHub raw URL
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
    deities.forEach((deity, index) => {
        // Create or select the container dynamically
        let container = document.getElementById(`deity-container-${index + 1}`);

        // If there are more deities than existing containers, create new ones
        if (!container) {
            container = document.createElement("div");
            container.className = "deitybar";
            container.id = `deity-container-${index + 1}`;
            document.body.appendChild(container); // Append to body or a specific section
        }

        const deityElement = document.createElement("div");
        deityElement.className = "deity";

        deityElement.innerHTML = `
            <h2>${deity.name}</h2>
            <h3>Elemental Affinity: ${deity.elemental_affinity}</h3>
            <p>${deity.description}</p>
            <p>Domains: ${deity.domains.join(", ")}</p>
            <p>Gender: ${deity.gender}</p>
            <p>Side: ${deity.side}</p>
            <p>Alignment: ${deity.alignment}</p>
            <p>Personality: ${deity.personality.join(", ")}</p>
            <p>Devoted Guilds: ${deity.devoted_guilds.join(", ")}</p>
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
