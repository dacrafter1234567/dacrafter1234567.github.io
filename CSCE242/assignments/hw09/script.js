class Character {
    constructor(firstName, lastName, picture, affinity, charClass, age, race, alignment) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.picture = picture;
        this.affinity = affinity;
        this.charClass = charClass;
        this.age = age;
        this.race = race;
        this.alignment = alignment;
    }

    get tableRow() {
        let characterRow = document.createElement("tr");
        characterRow.append(this.tableColumn(this.firstName));
        characterRow.append(this.tableColumn(this.lastName));
        characterRow.append(this.tableColumn(this.affinity));
        characterRow.onclick = () => displayCharacterDetails(this);
        return characterRow;
    }

    tableColumn(data) {
        let td = document.createElement("td");
        td.textContent = data;
        return td;
    }
}

const displayCharacterDetails = (character) => {
    const characterDetails = document.getElementById("character-details");
    characterDetails.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.textContent = character.firstName + " " + character.lastName;
    characterDetails.append(h3);

    const p = document.createElement("p");
    p.textContent = character.affinity;
    characterDetails.append(p);

    const img = document.createElement("img");
    img.src = "images/" + character.picture;
    img.alt = character.firstName + " " + character.lastName;
    img.style.cursor = "pointer"; // Makes image clickable
    img.onclick = () => openModal(character); // Click event to open modal

    characterDetails.append(img);
};

// Function to open modal with character details
const openModal = (character) => {
    document.getElementById("modal-name").textContent = character.firstName + " " + character.lastName;
    document.getElementById("modal-affinity").textContent = "Affinity: " + character.affinity;
    document.getElementById("modal-class").textContent = "Class: " + character.charClass;
    document.getElementById("modal-age").textContent = "Age: " + character.age;
    document.getElementById("modal-race").textContent = "Race: " + character.race;
    document.getElementById("modal-alignment").textContent = "Alignment: " + character.alignment;
    
    document.getElementById("modal-img").src = "images/" + character.picture;
    document.getElementById("modal-img").alt = character.firstName + " " + character.lastName;

    document.getElementById("character-modal").style.display = "flex";
};


// Function to close modal
document.querySelector(".close").onclick = () => {
    document.getElementById("character-modal").style.display = "none";
};

// Close modal when clicking outside the content
window.onclick = (event) => {
    const modal = document.getElementById("character-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};



const createCharactersTable = () => {
    let charactersTable = document.getElementById("characters-table");

    let characters = [];
    characters.push(new Character("Helia", "Mayr", "HeliaMayr.jpg", "Phoenix", "Fighter 11 (Rune Knight), Monk 4 (Four Elements), Paladin 3 (Heroism), Warlock 2 (Hexblade)", 47, "Reborn Fire Genasi", "Chaotic Good"));
    characters.push(new Character("Karavelle", "Devantine", "KaravelleDevantine.jpg", "Destruction", "Rogue 12 (Inquisitive), Barbarian 5 (Zealot), Fighter 3 (Champion)", 358, "Reborn Avariel Elf", "Chaotic Neutral"));
    characters.push(new Character("Adonis", "Destrey", "AdonisDestrey.jpg", "Blood", "Paladin 20 (Redemption), Cleric 10 (Blood-Reborn)", 1064, "Kalashtar", "Lawful Neutral"));
    characters.push(new Character("Orion", "Steele", "OrionSteele.png", "Earth", "Fighter 20 (Battle Master)", 35, "Human", "True Neutral"));
    characters.push(new Character("Eisel", "Voross", "EiselVoross.jpg", "Ice", "Fighter 20 (Rune Knight)", 36, "Ice Genasi", "Lawful Neutral"));

    for (let character of characters) {
        charactersTable.append(character.tableRow);
    }
};

window.onload = () => createCharactersTable();