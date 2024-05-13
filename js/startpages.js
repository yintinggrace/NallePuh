let numberOfChildren = 0;

function renderStartPage1() {
    const body = document.querySelector("body");

    body.innerHTML = `
        <container class="startpages">
            <div id="page1Section1">
                <div class="groupPicture"></div>
            </div>
            <div id="page1Section2">
                <p>Hur många barn deltar i denna skattjakt?</p>
                <p id="maxChildrenMessage">Endast nummer är tillåtna</p>
                <input type="number" id="numberOfChildrenInput" placeholder="max: 10">
                <p id="tipMessage">Är det många barn som spelar kan man välja att skriva in "1" och skapa ett gruppnamn i nästa steg.</p>
            </div>
            <div id="page1Section3">
                <button class="back1">Tillbaka</button>
                <button class="continue1">Fortsätt</button>
            </div>
        </container>
    `;

    document.querySelector(".back1").addEventListener("click", function () {
        renderHomePage();
    });


    document.querySelector(".continue1").addEventListener("click", function () {
        const inputElement = document.getElementById("numberOfChildrenInput");
        const numberOfChildren = parseInt(inputElement.value);

        if (!isNaN(numberOfChildren) && numberOfChildren > 0 && numberOfChildren <= 10) {
            const maxChildrenMessage = document.getElementById("maxChildrenMessage");
            maxChildrenMessage.style.display = "none";
            renderStartPage2(numberOfChildren);
        } else {
            const maxChildrenMessage = document.getElementById("maxChildrenMessage");
            maxChildrenMessage.textContent = "Skriv in antal barn, max 10";
            maxChildrenMessage.style.display = "block";
        }
    })
}

function generateInputFields(numberOfChildren) {
    let inputFieldsHTML = '';
    const maxChildren = Math.min(numberOfChildren, 10);
    for (let i = 0; i < maxChildren; i++) {
        inputFieldsHTML += `<input type="text">`;
    }
    return inputFieldsHTML;
}

function renderStartPage2(numberOfChildren) {
    const body = document.querySelector("body");

    body.innerHTML = `
        <container class="startpages">
            <div id="page2Section1">
                <div class="groupPicture"></div>
            </div>
            <div id="page2Section2">
                <p>Vad heter barnet/barnen?</p>
                <p id="errorMessage">OBS: ange ett namn i varje ruta</p>
                <form id="childrenForm">
                    ${generateInputFields(numberOfChildren)}
                </form>
            </div>
            <div id="page2Section3">
                <button class="back2">Tillbaka</button>
                <button class="continue2">Fortsätt</button>
            </div>
        </container>
    `;

    document.querySelector(".back2").addEventListener("click", function () {
        renderStartPage1();
    });

    document.querySelector(".continue2").addEventListener("click", function () {
        const inputElements = document.querySelectorAll("#childrenForm input");
        const childrenNames = [];
        let allInputsFilled = true;

        inputElements.forEach(function (input) {
            if (input.value.trim() === "") {
                allInputsFilled = false;
            }
            childrenNames.push(input.value);
        });

        const errorMessage = document.getElementById("errorMessage");
        if (!allInputsFilled) {
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";

            localStorage.setItem("childrenNames", JSON.stringify(childrenNames));

            renderStartPage3();
        }
    })
}

function renderStartPage3() {
    body.innerHTML = `
        <container class="startpages">
            <div id="page3Section1">
                <p>Nalle Puh, björnen med stort hjärta och ännu större aptit för honung, har tappat bort sin älskade honungsburk.
                <br></br>
                Hans vänner blev snabbt oroliga när de insåg att deras kära vän var i nöd. De befinner sig utspridda i Folkets Park och letar efter honungen. Hjälp Nalle Puh och hans vänner att hitta honungen genom att prata med dem. Nalle Puh tar emot all hjälp han kan få och följer gärna med dig eftersom han tror att du kan hjälpa honom extra mycket!</p>
                <br></br>
                <p>Börja resan hos I:or, han finns vid Kastanjekiosken.</p>
            </div>
            <div id="page3Section2">
                <div id="honeyImg"></div>
            </div>
            <div id="page3Section3">
                <button id="to-station">Börja</button>
            </div>
        </container>
    `;

    const toStation = document.getElementById("to-station");
    toStation.addEventListener("click", handleToStationClick);
}

