function renderDownloadDiplomaPage() {
    body.innerHTML = `
    <container id="diplomaPage">
    <div id="diploma">
        <!-- Your diploma template with the user's name -->
        <h1>Congratulations!</h1>
        <p>This diploma is awarded to <span id="username">[Name]</span> for their outstanding achievements.</p>
    </div>
    <button onclick="generateImage()">Download Diploma</button>
    </container>
    `;
}

