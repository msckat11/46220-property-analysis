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



d3.csv("county49Merged.csv").then(function(data) {

  // Print the tvData
  console.log(data);

    for (var i = 0; i < data.length; i++) {

    var buildings = data[i];

    var location = [];

    parseFloat(buildings.Latitude);
    parseFloat(buildings.Longitude);

    location.push(buildings.Latitude);
    location.push(buildings.Longitude);

    console.log(location)

    if (buildings.Total_Adj_Value <= 75000) {
    L.marker(location, {icon: redIcon})
    .bindPopup("<h1>" + "$"+ buildings.Total_Adj_Value + "</h1> <hr> <h3>Address: " + buildings.Address + "</h3>")
    .addTo(myMap);
    }

    if (buildings.Total_Adj_Value > 75000 & buildings.Total_Adj_Value < 200000) {
        L.marker(location, {icon:yellowIcon})
        .bindPopup("<h1>" + "$"+ buildings.Total_Adj_Value + "</h1> <hr> <h3>Address: " + buildings.Address + "</h3>")
        .addTo(myMap);
    }

    if (buildings.Total_Adj_Value > 200000 & buildings.Total_Adj_Value < 750000) {
        L.marker(location, {icon:greenIcon})
        .bindPopup("<h1>" + "$"+ buildings.Total_Adj_Value + "</h1> <hr> <h3>Address: " + buildings.Address + "</h3>")
      .addTo(myMap);
    }

    if (buildings.Total_Adj_Value > 750000) {
      L.marker(location, {icon:goldIcon})
      .bindPopup("<h1>" + "$"+ buildings.Total_Adj_Value + "</h1> <hr> <h3>Address: " + buildings.Address + "</h3>")
    .addTo(myMap);}
  }
        
    

  });


   