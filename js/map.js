function renderCurrentLocationView(currentContent) {

    // body.style.overflow = `hidden`;


    body.innerHTML = `
        <div id="closeBtn"></div>
        <p class="currentLocationName-desktop"></p>
        <div id="mapAndCurrentLocation">
            <div id="smallMap" class="map"></div>
            <div id="currentLocation">
                <div id="currentLocationImg"></div>
                <p class="currentLocationName-mobile"></p>
            </div>
        </div>
    `;

    body.style.height = `75vh`;


    document.querySelector("#closeBtn").addEventListener("click", () => {
        body.style.height = `100vh`;
        body.style.overflow = `auto`;

        handleToStationClick();
    });

    document.querySelector("#currentLocationImg").style.backgroundImage = `url(../NallePuh/media/${currentContent.locationImg})`;

    document.querySelector(".currentLocationName-mobile").textContent = "Gå till: " + currentContent.locationName;
    document.querySelector(".currentLocationName-desktop").textContent = "Gå till: " + currentContent.locationName;

    document.querySelector("#smallMap").addEventListener("click", () => {
        renderFullscreenMap(currentContent);
    });

    renderMap(55.59312057495117, 13.013703346252441, false)

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation stöttas inte av den här webbläsaren.");
    }
}

function renderFullscreenMap(currentContent) {


    body.innerHTML = `
        <div id="closeBtn"></div>
        <div id="fullscreenMap" class="map"></div>
    `;

    document.querySelector("#closeBtn").addEventListener("click", () => {
        renderCurrentLocationView(currentContent);
    });

    renderMap(55.59312057495117, 13.013703346252441, false)

    if (navigator.geolocation) {
        /*
                if (localStorage.getItem("lat")) {
                    showPosition({
                        coords:
                        {
                            latitude: localStorage.getItem("lat"),
                            longitude: localStorage.getItem("lng")
                        }
                    })
                } */

        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    localStorage.setItem('lat', latitude);
    localStorage.setItem('lng', longitude);

    renderMap(latitude, longitude, true)
}

function renderMap(lat, lng, marker) {
    const mapOptions = {
        zoom: 17,
        center: { lat: lat, lng: lng },
    };

    const mapElement = document.querySelector(".map");
    const map = new google.maps.Map(mapElement, mapOptions);

    // det kommer upp en varning här men det gör inget
    if (marker) {
        new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
        })
    }
}

function showError(error) {
    console.error("Error getting location:", error.message);

    renderMap(55.59312057495117, 13.013703346252441, false)
    //  alert("Var vänlig ge åtkomst till din plats om du vill att denna ska visas på kartan");
}
