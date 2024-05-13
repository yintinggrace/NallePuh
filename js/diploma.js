function renderDownloadDiplomaPage() {
    body.innerHTML = `
        <div class="diploma-container">
            <div class="diploma-nonprint">
                <div class="diploma-content">
                    <p class="appreciation">Tack för att ni har hjälpt till! Vilka hjältar! Nalle Puh vill visa sin uppskattning genom att ge er ett diplom. Skriv ert namn på diplomet efter att ni har skrivit ut det. Om du är en kurskamrat, var vänlig svara på enkäten.</p>

                    <button class="download-button">Hämta diplom</button>
                    <button target="_blank" onclick="window.open('https://forms.gle/So5uZyAh29ToTnJF7', '_blank');" class="go-to-form">Enkät</button>
                    <button class="go-home">Tillbaka till startsidan</button>
                </div>

                <img class="diploma-nalle-puh" src="../NallePuh/media/diploma-nalle-puh.png" alt="Nalle Puh">
            </div>
        </div>
    `;

    const downloadButton = document.querySelector('.download-button');
    downloadButton.addEventListener("click", handleDownloadButtonClick);

    const goHome = document.querySelector('.go-home');
    goHome.addEventListener("click", function () {
        renderHomePage();
        currentIndex = 0;
    });
}

function handleDownloadButtonClick() {
    event.preventDefault();
    const diplomaFilePath = "../NallePuh/media/diploma.pdf";
    const anchorElement = document.createElement("a");
    anchorElement.href = diplomaFilePath;
    anchorElement.target = '_blank';
    anchorElement.download = 'diplom.pdf';
    anchorElement.click();
}
