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
        contactBtn.addEventListener("click", function () {
            const rect = contactBtn.getBoundingClientRect();
            
            // Set dropdown position dynamically and ensure it stays on screen
            contactDropdown.style.position = "absolute"; // Ensures absolute positioning
            contactDropdown.style.top = `${rect.top - contactDropdown.offsetHeight}px`;  // Move it above the button
            contactDropdown.style.left = `${rect.left}px`;

            // Check if the dropdown is out of view at the top of the page
            if (parseInt(contactDropdown.style.top) < 0) {
                contactDropdown.style.top = `${rect.bottom}px`;  // If too high, position it below the button
            }

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
