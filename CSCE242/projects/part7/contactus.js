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
            displayDeities(data.deities); // ✅ Fix: Access the array inside the object
        })
        .catch(error => {
            console.error("Error loading JSON:", error);
        });
});

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

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
            if (response.status == 200) {
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
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.getElementById("contactbtn");
    const contactDropdown = document.getElementById("contactDropdown");

    if (contactBtn && contactDropdown) {
        contactBtn.addEventListener("click", function () {
            // Toggle dropdown visibility
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


// Dropdown Menu Handling
function setupDropdowns() {
    const contactbtn = document.getElementById("contactbtn");
    const contactDropdown = document.getElementById("contactDropdown");


    if (contactbtn && contactDropdown) {
        contactbtn.addEventListener("click", () => toggleDropdown(contactDropdown));
    }

    // Hide dropdowns when clicking outside
    document.addEventListener("click", function (event) {
        if (contactbtn && contactDropdown && !contactbtn.contains(event.target) && !contactDropdown.contains(event.target)) {
            contactDropdown.style.display = "none";
        }
    });
}

// Toggle Dropdown Visibility
function toggleDropdown(element) {
    if (element) {
        element.style.display = element.style.display === "block" ? "none" : "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const contactBtn = document.getElementById("contactbtn");
    const contactDropdown = document.getElementById("contactDropdown");

    contactBtn.addEventListener("click", function() {
        // Toggle dropdown visibility
        if (contactDropdown.style.display === "block") {
            contactDropdown.style.display = "none";
        } else {
            contactDropdown.style.display = "block";
        }
    });

    // Optional: Hide dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!contactBtn.contains(event.target) && !contactDropdown.contains(event.target)) {
            contactDropdown.style.display = "none";
        }
    });
});