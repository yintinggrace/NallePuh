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

    const buttonClass = buttonText === "Stäng" ? "closeBtn" : "continue";

    body.innerHTML = `
        <div id="overlay">
            <div id="popUp">
                <p id="tipTitle">Tips från ${titleContent}</p>
                <p id="tipTextContent">${tipsText}</p>
                <button class="${buttonClass} closeOrContinueBtn">${buttonText}</button>
            </div>
        </div>
    `;

    const closeOrContinueBtns = document.querySelectorAll(`.${buttonClass}`);

    closeOrContinueBtns.forEach(button => {
        button.addEventListener("click", function() {
            if (buttonClass === "closeBtn") {
                currentIndex = questId;
            } else {
                currentIndex++;
                if (currentIndex === 5) {
                renderLastStation();
                return;
                }
            }
            handleToStationClick();
        });
    });
}
