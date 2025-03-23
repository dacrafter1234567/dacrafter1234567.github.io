document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON from GitHub raw URL
    fetch("https://raw.githubusercontent.com/dacrafter1234567/dacrafter1234567.github.io/main/CSCE242/projects/part7/json/deities.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Deities Loaded:", data);
            displayDeities(data.deities); // ✅ Ensure data is structured correctly
        })
        .catch(error => {
            console.error("Error loading JSON:", error);
        });

    // Form submission handling
    const form = document.getElementById('form');
    const result = document.getElementById('result');

    if (form && result) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
            result.innerHTML = "Please wait...";

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status === 200) {
                    result.innerHTML = "Form submitted successfully";
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .finally(() => {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000);
            });
        });
    }

    // 📌 Dropdown Menu Logic
    const contactBtn = document.getElementById("contactbtn");
    const contactDropdown = document.getElementById("contactDropdown");

    if (contactBtn && contactDropdown) {
        function positionDropdown() {
            // Fix the dropdown position 320px above the bottom and 1000px from the left side
            contactDropdown.style.position = "fixed"; // Ensure fixed positioning
            contactDropdown.style.bottom = "63px"; // 320px above the bottom
            contactDropdown.style.left = "235px"; // 1000px from the left edge
        }

        // Show dropdown on button click
        contactBtn.addEventListener("click", function () {
            positionDropdown(); // Reposition dropdown on click
            // Toggle visibility
            contactDropdown.style.display = contactDropdown.style.display === "block" ? "none" : "block";
        });

        // Hide dropdown when clicking outside
        document.addEventListener("click", function (event) {
            if (!contactBtn.contains(event.target) && !contactDropdown.contains(event.target)) {
                contactDropdown.style.display = "none";
            }
        });
    }
});
