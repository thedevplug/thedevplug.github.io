var usmap = L.map('usmap').setView([0, 0], 10);
let layer1 = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(usmap);
let layer2 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png');
let layer3 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
let layers = {
  'Basic': layer1,
  'Black & White': layer2,
  'Wild West': layer3
}
L.control.layers(layers).addTo(usmap)
