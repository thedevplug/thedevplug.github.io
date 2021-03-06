let bfinal = L.map('finalm').setView([39.330049, -96.629018], 4);
let fl1 = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png');
let fl2 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(bfinal);
let fl3 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
let finallayer = {
  'Black & White': fl2,
  'German': fl1,
  'Pink': fl3
}
L.control.layers(finallayer).addTo(bfinal)
bfinal.on('click', function (event) {
  console.log('click location: ' + event.latlng)
})
function getColor(d) {
    return d === "Male" ? 'Blue' :
           d === "Female"  ? 'Pink' :
           '#FFEDA0';
}
function getRadius(e) {
    return e === "Male" ? 4 :
           e === "Female" ? 6 :
           5;
}
function style (feature) {
    return {
        fillColor: getColor(feature.properties.CEO),
        weight: 1,
        opacity: 0.5,
        radius: getRadius(feature.properties.CEO),
        fillOpacity: 0.8
    };
}
function createCircles (feature, latlng) {
  return L.circleMarker(latlng, style)
}
let foptions = {
  style: style,
  pointToLayer: createCircles,
  onEachFeature: geopopup
}
L.geoJSON(fortunegeo, foptions).addTo(bfinal)
function geopopup (feature, layer) {
  let company = feature.properties.COMPANY
  let gender = feature.properties.CEO
  layer.bindPopup("Company Name: " + company + "</br>" + "CEO Gender: " + gender)
}
