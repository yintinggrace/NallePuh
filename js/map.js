// AIzaSyBntwZlNVDr7QfNDzFNemomWdWJi2g0liY

body.innerHTML = `
        <div id="map"></div>
    `;


function initMap() {
    renderMap(55.59312057495117, 13.013703346252441, false)

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    renderMap(latitude, longitude, true)
}

function showError(error) {
    console.error("Error getting location:", error.message);

    renderMap(55.59312057495117, 13.013703346252441, false)
    alert("Var vänlig godkänn åtkomst till din plats");
}

function renderMap(lat, lng, marker) {
    const mapOptions = {
        zoom: 17,
        center: { lat: lat, lng: lng },
    };

    const mapElement = document.getElementById("map");

    const map = new google.maps.Map(mapElement, mapOptions);


    // det kommer upp ett error här emn det gör inget
    if (marker) {
        new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
            title: "Din aktuella position"
        })
    }

}