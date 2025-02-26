document.addEventListener("DOMContentLoaded", () => {
    const titles = {
        "Happy Birthday": "images/birthday.jpg",
        "Crazy Clown": "images/clown.jpg",
        "It's Raining": "images/rain.jpg",
        "Quiet Time": "images/read.jpg",
        "Working Hard": "images/shovel.jpg",
        "Work from Home": "images/work.jpg"
    };

    const titleList = document.getElementById("titleList");

    for (const title in titles) {
        let li = document.createElement("li");
        li.textContent = title;
        li.addEventListener("click", () => {
            showPopup(title, titles[title]);
        });
        titleList.appendChild(li);
    }

    function showPopup(title, imageSrc) {
        // Create popup container
        let popup = document.createElement("section");
        popup.classList.add("popup");

        // Create close button
        let closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&#10006;";
        closeBtn.classList.add("close");
        closeBtn.addEventListener("click", () => {
            document.body.removeChild(popup);
        });

        // Create title element
        let popupTitle = document.createElement("h3");
        popupTitle.textContent = title;

        // Create image element
        let popupImage = document.createElement("img");
        popupImage.src = imageSrc;
        popupImage.alt = title;

        // Append elements to popup
        popup.appendChild(closeBtn);
        popup.appendChild(popupTitle);
        popup.appendChild(popupImage);

        // Append popup to body
        document.body.appendChild(popup);
    }
});
