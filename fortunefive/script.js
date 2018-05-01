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
L.geoJSON(fortunegeo).addTo(bfinal)
L.geoJSON(baseball).addTo(bfinal)
bfinal.on('click', function (event) {
  console.log('click location: ' + event.latlng)
})
