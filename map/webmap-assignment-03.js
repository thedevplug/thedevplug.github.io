let twobase = L.map('two').setView([31, -92], 10);
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(twobase);
let twomarker = L.marker([32, -92.5]).addTo(twobase);
twomarker.bindPopup('louisiana proud');
let twopolygon = L.polygon([
  [33, -94],
  [33, -91],
  [30, -94],
  [30, -91]
]).addTo(twobase);
twopolygon.bindPopup('the double poly');
var twopolyline = [
  [35, -97],
  [28, -84]
];
var twoline = L.polyline(twopolyline, {color: 'red'}).addTo(twobase);
twobase.fitBounds(twoline.getBounds());
twobase.on('click', function (event) {
  console.log('here is where u clicked: ' + event.latlng)
})
let pinkicon = L.icon({
  iconUrl: 'pinkicon.png',
  iconSize: [38, 95], // size of the icon
  iconAnchor: [31, -91], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})
let iconmarker = L.marker([51.5, -0.09], {icon: pinkicon}).addTo(twobase);
let basestyle = {
  color: 'yellow',
  fillColor: 'red'
}
let iconcord = [
  [34, -91],
  [31, -91],
  [30, -92]
]
let iconpolygon = L.polygon(iconcord, basestyle).addTo(twobase)
