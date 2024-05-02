function renderHomePage() {
    body.innerHTML = `
        <container id="homepage">
            <div id="home1">
                <h1>Hej!</h1>
                <p>Nalle Puh har tappat bort <br> sin favorithonung! Vad <br> ska han göra nu? Kan du <br> hjälpa honom?</p>
                <button class="downloadMapBtn" data-map-path="../NallePuh/media/map.png">Hämta karta</button>
                <img id="homeImg1" src="../NallePuh/media/nalle-puh-1.png" alt="Nalle Puh"></img>
            </div>
            <div class="deskop-header hidden">
                <div class="deskop-header-left">
                    <div class="deskop-header-text">
                        <h1>Hej!</h1>
                        <p>Nalle Puh har tappat bort sin favorithonung! Vad ska han göra nu? Kan du hjälpa honom?</p>
                    </div>
                    <button class="downloadMapBtn" data-map-path="../NallePuh/media/map.png">Hämta karta</button>
                </div>
                <img class="deskop-header-right" src="../NallePuh/media/nalle-puh-1.png" alt="Nalle Puh"></img>
            </div>
            <div id="home2">
                <div id="home2Box">
                    <h2>Om Nalle Puh och hans vänner</h2>
                    <div id="scrollContainer">
                        <div class="scrollImg">
                            <img class="character-nalle-puh" src="../NallePuh/media/character-nalle-puh.png" alt="Nalle Puh">
                            <p>Nalle Puh</p>
                        </div>
                        <div class="scrollImg">
                            <img class="character-I-or" src="../NallePuh/media/character-i-or.png" alt="I-or">
                            <p>I-or</p>
                        </div>
                        <div class="scrollImg">
                            <img class="character-Tiger" src="../NallePuh/media/character-tiger.png" alt="Tiger">
                            <p>Tiger</p>
                        </div>
                        <div class="scrollImg">
                            <img class="character-Nasse" src="../NallePuh/media/character-nasse.png" alt="Nasse">
                            <p>Nasse</p>
                        </div>
                        <div class="scrollImg">
                            <img class="character-Kanin" src="../NallePuh/media/character-kanin.png" alt="Kanin">
                            <p>Kanin</p>
                        </div>
                        <div class="scrollImg">
                            <img class="character-Ru" src="../NallePuh/media/character-ru.png" alt="Ru">
                            <p>Ru</p>
                        </div>
                        <div class="scrollImg">
                            <img class="character-Christoffer-Robin" src="../NallePuh/media/character-christoffer-robin.png" alt="Christoffer Robin">
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
            let targetName = e.target.querySelector("p").textContent;

            renderCharacterInfo(targetName, "homepage");
        });
    });

    const toStart = document.getElementById("to-start");
    toStart.addEventListener("click", renderStartPage1);

    const downloadMapBtns = document.querySelectorAll(".downloadMapBtn");
    downloadMapBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const mapPath = btn.getAttribute("data-map-path");
            const anchorElement = document.createElement("a");
            anchorElement.href = mapPath;
            anchorElement.target = '_blank';
            anchorElement.download = 'map.png';
            anchorElement.click();
        });
    });
}


