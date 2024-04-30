function renderDownloadDiplomaPage() {
    let childrenNames = localStorage.getItem("childrenNames");
    let namesArray = JSON.parse(childrenNames);
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);

    namesArray = namesArray.map(name =>
        name.replace(/\b\w/g, char => char.toUpperCase())
    );

    body.innerHTML = `
        <div class="diploma-container">
            <div class="diploma-nonprint">
                <div class="diploma-content">
                    <p class="appreciation">Tack för att du har hjälpt till<span class="username"></span>! Du är en honungssparare! Nalle Puh vill visa sin
                    uppskattning genom att ge dig ett diplom.</p>

                    <div class="download-diploma">
                        <div class="download-diploma-text">
                            <p>Ladda ner/Skriva ut diplom för</p>
                            <select class="download-select">
                                <option value="">Välj namn</option>
                                ${namesArray.map(name => (`
                                    <option value="${name}">${name}</option>
                                `))}
                            </select>
                            </div>
                        <button class="download-button">Ladda ned/Skriva ut</button>
                    </div>
                </div>

                <img class="diploma-nalle-puh" src="../NallePuh/media/diploma-nalle-puh.png" alt="Nalle Puh">
            </div>

            <div class="diploma-print hidden">
                <div class="print-text">
                    <h1 class="print-username"><span class="username"></span></h1>
                    <p class="print-statement">har framgångsrikt hjälpt Nalle Puh och hans vänner att lösa alla problem och rädda honungsburken i Folkets Park.</p>
                    <p class="print-good-job">Bra jobbat,<span class="username"></span>!</p>
                    <p class="print-date">${formattedDate}</p>
                </div>
                <img class="print-image-all-characters" src="../NallePuh/media/diploma-all-characters.png" alt="all characters">
                </div>
            </div>
        </div>
    `;

    const downloadSelect = document.querySelector(".download-select");
    downloadSelect.addEventListener("change", handleChange);
}

function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function handleChange(event) {
    const selectedName = event.target.value;
    const downloadButton = document.querySelector(".download-button");

    if (selectedName !== 0 && selectedName.length > 0) {
        const usernames = document.querySelectorAll(".username");
        usernames.forEach(username => {
            username.textContent = " " + selectedName;
        });
        downloadButton.addEventListener("click", generatePDF);
        downloadButton.classList.add("active");
        downloadButton.classList.remove("disactive");
    } else {
        const usernames = document.querySelectorAll(".username");
        usernames.forEach(username => {
            username.textContent = "";
            downloadButton.classList.remove("active");
            downloadButton.classList.add("disactive");
        });
    }
}

function generatePDF() {
    window.print();
}
