let btwo = L.map('mtwo').setView([31, -92], 7);
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(btwo);
let markertwo = L.marker([32, -92.5]).addTo(btwo);
markertwo.bindPopup('louisiana proud');
btwo.on('click', function (event) {
  console.log('Your click location: ' + event.latlng)
})
let itwo = L.icon({
  iconUrl: 'img/pointer.png',
  iconSize: [30, 30],
  iconAnchor: [1, 10],
  popupAnchor: [-3, -76]
});
L.marker([30.47, -91.17], {icon: itwo}).addTo(btwo);
let stwo = {
  color: 'red',
  fillOpacity: 0.5,
  lineJoin: 'bevel',
  weight: 2,
}
let ctwo = [
  [33, -91],
  [33, -94],
  [30, -94],
  [30, -91]
];
let polytwo = L.polygon(ctwo, stwo).addTo(btwo)
