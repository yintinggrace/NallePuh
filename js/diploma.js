function renderDownloadDiplomaPage() {
    body.innerHTML = `
        <div class="diploma-container">
            <div class="diploma-nonprint">
                <div class="diploma-content">
                    <p class="appreciation">Tack för att ni har hjälpt till<span class="username"></span>! Vilka honungssparare! Nalle Puh vill visa sin
                    uppskattning genom att ge er ett diplom. Skriv ert namn på diplomet efter att ni har skrivit ut det.</p>

                    <button class="download-button">Ladda ned/Skriva ut</button>
                </div>

                <img class="diploma-nalle-puh" src="../NallePuh/media/diploma-nalle-puh.png" alt="Nalle Puh">
            </div>
        </div>
    `;

    const downloadButton = document.querySelector('.download-button');
    downloadButton.addEventListener('click', handleDownloadButtonClick);
}

function handleDownloadButtonClick() {
    event.preventDefault();
    const diplomaFilePath = "../NallePuh/media/diploma.pdf";
    const anchorElement = document.createElement('a');
    anchorElement.href = diplomaFilePath;
    anchorElement.target = '_blank';
    anchorElement.download = 'diploma.pdf';
    anchorElement.click();
}
