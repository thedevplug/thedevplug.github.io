let bthree = L.map('mthree').setView([29.96, -89.95], 10);
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(bthree);
bthree.on('click', function (event) {
  console.log('click location: ' + event.latlng)
})
L.geoJSON(geojsonone).addTo(bthree)
let sthree = {
  color: 'red',
  weight: 1,
  fillOpacity: 0.5
}
let othree = {
  style: sthree,
  onEachFeature: geopopup
}
L.geoJSON(geojsonone, othree).addTo(bthree)
function geopopup (feature, layer) {
  let name = feature.properties.Name
  layer.bindPopup('District: ' + name)
}
