function renderTipPopUp(questId, tips) {
    const questObject = data.find(element => element.id === questId);

    let titleContent = questObject.character.name;
    let tipsText = questObject.tipsFromCurrentCharacter;
    let buttonText = "Fortsätt";

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
        button.addEventListener("click", function () {
            if (buttonClass === "closeBtn") {
                currentIndex = questId;
            } else {
                currentIndex++;
                if (currentIndex === 6) {
                    renderLastStation();
                    return;
                }
            }
            handleToStationClick();
        });
    });
}
