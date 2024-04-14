// renderTipPopUp(1)

function renderTipPopUp(questId, tips) {
    const questObject = data.find(element => element.id === questId);

    // här måste vi fixa så att den läggs som en overlay och inte rensar html

    let titleContent = questObject.character.name;
    let tipsText = questObject.tipsFromCurrentCharacter;
    let buttonText = "Fortsätta";

    if (tips === "tipsFromPreviousCharacter") {
        titleContent = questObject.nameOfPreviousCharacter;
        tipsText = questObject.tipsFromPreviousCharacter;
        buttonText = "Stäng";
    }

    body.innerHTML = `
        <div id="overlay">
            <div id="popUp">
                <p id="tipTitle">Tips från ${titleContent}</p>
                <p id="tipTextContent">${tipsText}</p>
                <button id="closeBtn">${buttonText}</button>
            </div>
        </div>
    `;

    document.querySelector("#closeBtn").addEventListener("click", function test() {
        body.innerHTML = ``;
        console.log("här ska vi ladda uppdraget");
    });
}
