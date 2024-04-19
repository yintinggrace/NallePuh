function renderHomePage() {
    body.innerHTML = `
    <container id="homepage">
        <div id="home1">
            <h1>Hej!</h1>
            <p>Nalle Puh har tappat bort <br> sin favorithonung! Vad <br> ska han göra nu? Kan du <br> hjälpa honom?</p>
            <img id="homeImg1" src="../NallePuh/media/nalle-puh-1.png" alt="Nalle Puh"></img>
        </div>
        <div id="home2">
            <div id="home2Box">
                <h2>Om Nalle Puh och hans vänner</h2>
                <div id="scrollContainer">
                    <div class="scrollImg">
                        <div id="nallePuhHomeImg"></div>
                        <p>Nalle Puh</p>
                    </div>
                    <div class="scrollImg">
                        <div id="iorHomeImg"></div>
                        <p>I-or</p>
                    </div>
                    <div class="scrollImg">
                        <div id="tigerHomeImg"></div>
                        <p>Tiger</p>
                    </div>
                    <div class="scrollImg">
                        <div id="nasseHomeImg"></div>
                        <p>Nasse</p>
                    </div>
                    <div class="scrollImg">
                        <div id="kaninHomeImg"></div>
                        <p>Kanin</p>
                    </div>
                    <div class="scrollImg">
                        <div id="ruHomeImg"></div>
                        <p>Ru</p>
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
}
