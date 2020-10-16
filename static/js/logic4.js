// Creating map object
var myMap = L.map("map", {
    center: [39.8687, -86.1341],
    zoom: 12
});
// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);
// Use this link to get the geojson data.
var link = "https://xmaps.indy.gov/arcgis/rest/services/OpenData/OpenData_Boundaries/MapServer/10/query?outFields=*&where=1%3D1&f=geojson";
// Function that will determine the color of a neighborhood based on the borough it belongs to
function chooseColor(neighborhood) {
    switch (neighborhood) {
        case "Broad Ripple":
            return "yellow";
        case "Butler-Tarkington/Rocky Ripple":
            return "red";
        case "Glendale":
            return "orange";
        case "Meridian Kessler":
            return "green";
        case "Canterbury-Chatard":
            return "purple";
        case "Allisonville":
            return "blue";
        case "Devonshire":
            return "pink";
        case "Millersville":
            return "cyan";
        default:
            return "black";
    }
}
// Grabbing our GeoJSON data..
d3.json(link, function (data) {
    // Creating a geoJSON layer with the retrieved data
    L.geoJson(data, {
        // Style each feature (in this case a neighborhood)
        style: function (features) {
            return {
                color: "white",
                // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
                fillColor: chooseColor(features.properties.NAME),
                fillOpacity: 0.5,
                weight: 1.5
            };
        },
        // Called on each feature
        onEachFeature: function (feature, layer) {
            // Set mouse events to change map styling
            layer.on({
                // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
                mouseover: function (event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.9
                    });
                },
                // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
                mouseout: function (event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.5
                    });
                },
                // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
                click: function (event) {
                    myMap.fitBounds(event.target.getBounds());
                }
            });
            // Giving each feature a pop-up with information pertinent to it
            layer.bindPopup("<h1>" + feature.properties.neighborhood + "</h1> <hr> <h2>" + feature.properties.borough + "</h2>");
        }
    }).addTo(myMap);
});