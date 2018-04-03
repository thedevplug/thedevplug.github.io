let base = L.map('base').setView([20, -20], 10);
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(base);
let onemarker = L.marker([40, -40]).addTo(base);
let onepolygon = L.polygon([
  [15, 20],
  [35, 45],
  [55, 70]
]).addTo(base);
onepolygon.bindPopup('McDonald\'s Farm');
onemarker.bindPopup('Farm HQ');
function logPointer (event) {
  console.log('Point of interest: ' + event.latlng)
};
base.on('Click.', logPointer);
var basePolyline = [
    [36, -14],
    [71, 91],
    [0, 1]
];
var oneline = L.polyline(basePolyline, {color: 'red'}).addTo(base);
base.fitBounds(oneline.getBounds());
