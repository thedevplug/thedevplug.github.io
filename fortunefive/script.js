let bfinal = L.map('finalm').setView([29.96, -89.95], 5);
let fl1 = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(bfinal);
let fl2 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png');
let fl3 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
let finallayer = {
  'Basic': fl1,
  'Black & White': fl2,
  'Wild West': fl3
}
L.control.layers(finallayer).addTo(bfinal)
/*bfinal.on('click', function (event) {
  console.log('click location: ' + event.latlng)
})*/
L.geoJSON(fortunegeo).addTo(bfinal)
/*function getColor(d) {
  return d > 472568 ? '#fbb4ae' :
         d > 164992 ? '#b3cde3' :
         d > 143439 ? '#ccebc5' :
         d > 118532 ? '#decbe4' :
         d > 112688 ? '#fed9a6' :
         d > 94395 ? '#ffffcc' :
         d > 78496 ? '#e5d8bd' :
                     '#FFEDA0';
}
function style (feature) {
    return {
        fillColor: getColor(feature.properties.Shape_Length),
        weight: 1,
        opacity: 0.5,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.8
    };
}
let finaloption = {
  style: style,
  onEachFeature: geopopup
}
function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.Name) {
        layer.bindPopup(feature.properties.Name);
    }
}
L.geoJSON(fortunegeo, {
    onEachFeature: onEachFeature
}).addTo(bfinal);
function geopopup (feature, layer) {
  let name = feature.properties.Name
  layer.bindPopup(name)
}*/
