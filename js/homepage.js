function renderHomePage() {
    body.innerHTML = `
        <container id="homepage">
            <div id="home1">
                <h1>Hej!</h1>
                <p>Nalle Puh har tappat bort <br> sin favorithonung! Vad <br> ska han göra nu? Kan du <br> hjälpa honom?</p>
                <button id="downloadMapBtn" href="../NallePuh/media/nalle-puh-1.png" >Hämta karta</a></button>
                <img id="homeImg1" src="../NallePuh/media/nalle-puh-1.png" alt="Nalle Puh"></img>
            </div>
            <div class="deskop-header hidden">
                <div class="deskop-header-left">
                    <div class="deskop-header-text">
                        <h1>Hej!</h1>
                        <p>Nalle Puh har tappat bort sin favorithonung! Vad ska han göra nu? Kan du hjälpa honom?</p>
                    </div>
                        <button id="downloadMapBtn" href="../NallePuh/media/nalle-puh-1.png">Hämta karta</a></button>
                </div>
                <img class="deskop-header-right" src="../NallePuh/media/nalle-puh-1.png" alt="Nalle Puh"></img>
            </div>
            <div id="home2">
                <div id="home2Box">
                    <h2>Om Nalle Puh och hans vänner</h2>
                    <div id="scrollContainer">
                        <div class="scrollImg">
                            <img class="character-nalle-puh" src="../NallePuh/media/character-Nalle-Puh.png" alt="Nalle Puh">
                            <p>Nalle Puh</p>
                        </div>
                        <div class="scrollImg">
                            <img class="character-I-or" src="../NallePuh/media/character-I-or.png" alt="I-or">
                            <p>I-or</p>
                        </div>
                        <div class="scrollImg">
                            <img class="character-Tiger" src="../NallePuh/media/character-Tiger.png" alt="Tiger">
                            <p>Tiger</p>
                        </div>
                        <div class="scrollImg">
                            <img class="character-Nasse" src="../NallePuh/media/character-Nasse.png" alt="Nasse">
                            <p>Nasse</p>
                        </div>
                        <div class="scrollImg">
                            <img class="character-Kanin" src="../NallePuh/media/character-Kanin.png" alt="Kanin">
                            <p>Kanin</p>
                        </div>
                        <div class="scrollImg">
                            <img class="character-Ru" src="../NallePuh/media/character-Ru.png" alt="Ru">
                            <p>Ru</p>
                        </div>
                        <div class="scrollImg">
                            <img class="character-Christoffer-Robin" src="../NallePuh/media/character-Christoffer-Robin.png" alt="Christoffer Robin">
                            <p>Christoffer-Robin</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="home3">
                <p>Hjälp Nalle Puh och hans vänner genom att genomföra skattjakten</p>
                <button id="to-start">Starta</button>
            </div>
        </container>
`;

    document.querySelectorAll(".scrollImg").forEach(element => {
        element.addEventListener("click", (e) => {
            let targetName = e.target.parentNode.querySelector("p").textContent;

            renderCharacterInfo(targetName, "homepage");
        });
    });

    const toStart = document.getElementById("to-start");
    toStart.addEventListener("click", renderStartPage1);

    const downloadMapBtn = document.getElementById("downloadMapBtn");
    downloadMapBtn.addEventListener("click", () => {
        const mapPath = "../NallePuh/media/map.png";
        const anchorElement = document.createElement("a");
        anchorElement.href = mapPath;
        anchorElement.target = '_blank';
        anchorElement.download = 'map.png';
        anchorElement.click();
    });
}


