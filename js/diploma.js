function renderDownloadDiplomaPage() {
    let childrenNames = localStorage.getItem("childrenNames");

    let namesArray = JSON.parse(childrenNames);

    let formattedNames = '';
    if (namesArray.length === 1) {
        formattedNames = capitalizeFirstLetter(namesArray[0].trim());
    } else {
        formattedNames = namesArray.map(name => capitalizeFirstLetter(name.trim())).join(', ');
        let lastIndex = formattedNames.lastIndexOf(',');
        formattedNames = formattedNames.substring(0, lastIndex) + ' och' + formattedNames.substring(lastIndex + 1);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    body.innerHTML = `
    <container id="diplomaPage">
    <div id="coverUp">
        <button onclick="generateImage()">Download Diploma</button>
    </div>
    <div id="diploma" class="hidden">
        <!-- Your diploma template with the user's name -->
        <h1>Congratulations!</h1>
        <p>This diploma is awarded to <span id="username">${formattedNames}</span> for their outstanding achievements.</p>
    </div>
    </container>
    `;
}
