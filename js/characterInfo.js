function renderCharacterInfo(characterName, originView) {

    window.scrollTo(0, 0);

    document.querySelector("body").style.overflow = `hidden`;

    let questObject = {};

    if (characterName == "Nalle Puh") {
        questObject = {
            character: {
                name: "Nalle Puh",
                description: "Nalle Puh är huvudpersonen i Nalle Puhs berättelsevärld. Han är snäll, men något glömsk och tänker mycket och gör lite. Nalle Puh är också förälskad i honung."
            }
        }
    } else {
        questObject = data.find(element => element.character.name === characterName);
    }

    body.innerHTML = `
        <div id="characterInfoContainer">
            <div id="closeCrossBtn"></div>
            <div id="characterTextContainer">
                <div id="characterText">
                    <p id="characterName">${questObject.character.name}</p>
                    <p id="characterDescription">${questObject.character.description}</p>
                </div>
                <div id="characterImage"></div>
            </div>
        </div>
    `;

    const characterImg = document.createElement("img");

    characterImg.src = `../NallePuh/media/character-${questObject.character.name.toLowerCase()}.png`;
    characterImg.alt = `${questObject.character.name}`;
    characterImg.id = "character-image";
    document.querySelector("#characterImage").appendChild(characterImg);

    if (questObject.character.name == "Nalle Puh") {
        characterImg.src = `../NallePuh/media/character-nalle-puh.png`;
    }

    document.querySelector("#closeCrossBtn").addEventListener("click", () => {
        body.innerHTML = ``;
        document.querySelector("body").style.overflow = `auto`;

        if (originView == "homepage") {
            renderHomePage();
        }
        else {
            handleToStationClick();
        }
    });
}
