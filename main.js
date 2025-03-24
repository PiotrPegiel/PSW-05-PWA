if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(() => console.log('Service Worker zarejestrowany!'));
}

  function showHome() {
    document.getElementById('content').innerHTML = `
        <p class="text-center">Witamy w naszej aplikacji! Skorzystaj z menu, aby przejść do innych funkcjonalności.</p>
        <h2 class="text-center">Autorzy:</h2>
        <p class="text-center">Piotr Pęgiel 227601</p>
        <p class="text-center">Mateusz Kubaty 227552</p>
        <p class="text-center">Jan Paluch 226092</p>
    `;
}

function showMap() {
    document.getElementById('content').innerHTML = `
        <div id="map" style="height: 400px;"></div>
    `;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            const map = L.map('map').setView([latitude, longitude], 17);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
            L.marker([latitude, longitude]).addTo(map).bindPopup("Jesteś tutaj!").openPopup();
        });
    } else {
        alert("Twoje urządzenie nie obsługuje geolokalizacji.");
    }
}

function showSOS() {
    document.getElementById('content').innerHTML = `
    <div class="col text-center">
        <button id="sos-btn" class="btn btn-danger btn-lg">Wyślij SOS</button>
    </div>
    `;
    document.getElementById('sos-btn').addEventListener('click', () => {
        navigator.vibrate([300, 300, 300, 600, 600, 600, 300, 300, 300]);
        alert("Wibracje SOS zostały wysłane!");
    });
}

// Initialize with Home Page
showHome();