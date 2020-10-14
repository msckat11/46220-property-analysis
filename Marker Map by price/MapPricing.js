var myMap = L.map("map", {
    center: [39.871616, -86.130249],
    zoom: 13
  });

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

var data = [{
    location: [39.871616, -86.130249],
    value: 100000,
    address: "My House"
  },
  {
    location: [39.9, -86.2],
    value: 10000000,
    address: "My House"
  }];

for (var i = 0; i < data.length; i++) {

    var buildings = data[i];

    if (buildings.value <= 75000) {
    L.marker(buildings.location, {icon: redIcon})
    .bindPopup("<h1>" + buildings.value + "</h1> <hr> <h3>Address: " + buildings.address + "</h3>")
    .addTo(myMap);
    }

    if (buildings.value > 75000 & buildings.value < 200000) {
        L.marker(buildings.location, {icon:yellowIcon})
        .bindPopup("<h1>" + buildings.value + "</h1> <hr> <h3>Address: " + buildings.address + "</h3>")
        .addTo(myMap);
    }

    if (buildings.value > 200000 & buildings.value < 750000) {
        L.marker(buildings.location, {icon:greenIcon})
        .bindPopup("<h1>" + buildings.value + "</h1> <hr> <h3>Address: " + buildings.address + "</h3>")
      .addTo(myMap);
    }

    if (buildings.value > 750000) {
      L.marker(buildings.location, {icon:goldIcon})
      .bindPopup("<h1>" + buildings.value + "</h1> <hr> <h3>Address: " + buildings.address + "</h3>")
    .addTo(myMap);
  }
        
    };




   