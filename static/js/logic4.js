// Creating map object
var indyMap = L.map("myMap", {
    center: [39.8660, -86.1050],
    zoom: 13
});
// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(indyMap);

// Use these links to get the geojson data.
var link = "https://xmaps.indy.gov/arcgis/rest/services/OpenData/OpenData_Boundaries/MapServer/10/query?outFields=*&where=1%3D1&f=geojson";
var source = "Zip_Code_Boundaries.geojson"

// Function that will color neighborhoods
function chooseColor(neighborhood) {
    switch (neighborhood) {
        case "Broad Ripple":
            return "yellow";
        case "Glendale":
            return "orange";
        case "Meridian Kessler":
            return "green";
        case "Canterbury-Chatard":
            return "red";
        case "Allisonville":
            return "blue";
        case "Devonshire":
            return "pink";
        case "Millersville":
            return "cyan";
        case "North Central":
            return "purple";
        case "Meridian Hills/Williams Creek":
            return "pink";
        case "Ravenswood":
            return "cyan";
        case "Clearwater":
            return "green";
        case "I-69/Fall Creek":
            return "yellow";
        case "Devon":
            return "purple";
        default:
            return "black";
    }
}


// Grabbing our GeoJSON data on neighborhoods.
d3.json(link).then(function (data) {
    // Creating a geoJSON layer with the retrieved data
    console.log(data)
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
    }).addTo(indyMap);
});

// Grabbing our GeoJSON data for the 46220 zip code.
d3.json(source).then(function (data) {
    // Creating a geoJSON layer with the retrieved data
    // console.log(data)
    // if features.properties.ZIPCODE === 46220
    L.geoJson(data, {
        // Style each feature (in this case a neighborhood)
        style: function (features) {
            return {
                color: "red",
                // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
                fillColor: chooseColor(features.properties.ZIPCODE),
                weight: 6
            };
        },
    }).addTo(indyMap);
});