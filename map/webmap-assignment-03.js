let twobase = L.map('two').setView([31, -92], 7);
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(twobase);
let twomarker = L.marker([32, -92.5]).addTo(twobase);
twomarker.bindPopup('louisiana proud');
twobase.on('click', function (event) {
  console.log('here is where u clicked: ' + event.latlng)
})
var iconone = L.icon({
  iconUrl: 'pointer.png',
  iconSize: [30, 30],
  iconAnchor: [1, 10],
  popupAnchor: [-3, -76]
});
L.marker([30.47, -91.17], {icon: iconone}).addTo(twobase);
let style = {
  color: 'orange',
  fillOpacity: 0.7,
  lineJoin: 'bevel',
}
let polycord = [
  [33, -94],
  [33, -91],
  [30, -94],
  [30, -91]
];
let twopolygon = L.polygon(polycord, style).addTo(twobase)
