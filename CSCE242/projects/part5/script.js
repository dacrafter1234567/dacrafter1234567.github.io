// 1. Every second, say "hi" in console
// 2. Every second create 2 variables
//   - Current Slide: The slide that is not hidden
//   - Next Slide: the next sibling
//   - Display Both: Variables to the console


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


