let base = L.map('base').setView([20, -20], 10);
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(base);
let onemarker = L.marker([40, -40]).addTo(base);
let onepolygon = L.polygon([
  [40, 30],
  [45, 68],
  [19, 74],
  [16, 39]
]).addTo(base);
onepolygon.bindPopup('this is the middle east dont go here plz');
onemarker.bindPopup('water and water and water');
var basePolyline = [
  [36, -14],
  [71, 91],
  [0, 1]
];
var oneline = L.polyline(basePolyline, {color: 'red'}).addTo(base);
base.fitBounds(oneline.getBounds());
base.on('click', function (event) {
  console.log('here is where u clicked: ' + event.latlng)
})
