document.addEventListener('DOMContentLoaded', () => {
    // Read the hidden fields
    const lat = document.querySelector('#lat').value,
        lng = document.querySelector('#lng').value,
        address = document.querySelector('#address').value;
    
    if ( lat && lng ) {
        // Add them into the map
        var map = L.map('map').setView([lat, lng], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([lat, lng]).addTo(map)
            .bindPopup(address)
            .openPopup();
    }
});