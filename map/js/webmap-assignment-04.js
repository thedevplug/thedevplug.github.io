let bthree = L.map('mthree').setView([29.96, -89.95], 10);
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(bthree);
bthree.on('click', function (event) {
  console.log('click location: ' + event.latlng)
})
L.geoJSON(geojsonone).addTo(bthree)
function getColor(d) {
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
let othree = {
  style: style,
  onEachFeature: geopopup
}
L.geoJson(geojsonone, othree).addTo(bthree);
function geopopup (feature, layer) {
  let name = feature.properties.Name
  layer.bindPopup(name)
}
