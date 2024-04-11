// renderTipPopUp(1)

function renderTipPopUp(questId) {

    const questObject = data.find(element => element.id === questId);

    body.innerHTML = `
        <div id="overlay">
        <div id="popUp">
            <p id="tipTitle">Tips från ${questObject.nameOfPreviousCharacter}</p>
            <p id="tipTextContent">${questObject.tip}</p>
            <button id="closeBtn">Stäng</button>
        </div>
    </div>
    `;

    document.querySelector("#closeBtn").addEventListener("click", function test() {
        body.innerHTML = ``;
        console.log("här ska vi ladda uppdraget");
    });
}