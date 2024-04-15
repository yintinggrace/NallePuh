
function renderCharacterInfo(characterName, originView) {

    let questObject = {};

    if (characterName == "Nalle Puh") {
        questObject = {
            character: {
                name: "Nalle Puh",
                description: "Nalle Puh utgör huvudpersonen i Nalle Puhs berättelsevärld. Hans personlighet karaktäriseras av att han är snäll, men något ointelligent och glömsk  samt att han lider av diagnosen ADD, vilket speglas av att han tänker mycket men inte får mycket gjort. Vidare är Nalle Puh mycket förälskad i honung och föredrar att ha ett lugnt synsätt på livet."
            }
        }
    } else {
        questObject = data.find(element => element.character.name === characterName);
    }


    body.innerHTML = `
    <div id="characterInfoContainer">

        <div id="closeCrossBtn"></div>
        <div id="characterTextContainer">
            <p id="characterName">${questObject.character.name}</p>
            <p id="characterDescription">${questObject.character.description}</p>
        </div>
        <div id="characterImage"></div>

    </div>
    `;

    document.querySelector("#characterImage").style.backgroundImage = `url(/media/character-${questObject.character.name}.png)`;
    document.querySelector("body").style.overflow = `hidden`;

    if (questObject.character.name == "Nalle Puh") {
        document.querySelector("#characterImage").style.backgroundImage = `url(/media/character-nalle-puh.png)`;
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