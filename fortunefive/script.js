let bfinal = L.map('finalm').setView([39.330049, -96.629018], 4);
let fl1 = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(bfinal);
let fl2 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png');
let fl3 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
let finallayer = {
  'Basic': fl1,
  'Black & White': fl2,
  'Wild West': fl3
}
L.control.layers(finallayer).addTo(bfinal)
bfinal.on('click', function (event) {
  console.log('click location: ' + event.latlng)
})
function getColor(d) {
    return d === "Male" ? 'Blue' :
           d === "Female"  ? 'Red' :
           '#FFEDA0';
}
function style (feature) {
    return {
        fillColor: getColor(feature.properties.CEO),
        weight: 1,
        opacity: 0.5,
        color: 'Orange',
        dashArray: '3',
        radius: 5,
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
  layer.bindPopup(company)
}
