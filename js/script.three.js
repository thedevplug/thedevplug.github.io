let portfolio0 = {
  id: 0,
  title: 'Gibsons Locations',
  hasThumbnail: true
}
let portfolio1 = {
  id: 1,
  title: 'ArcGis WebMap',
  hasThumbnail: true
}
let portfolio2 = {
  id: 2,
  title: 'LSU Public Incident Report',
  hasThumbnail: true
}
let portfolio3 = {
  id: 3,
  title: 'StreetLights in BR',
  hasThumbnail: true
}
let portfolio4 = {
  id: 4,
  title: 'Map Service',
  hasThumbnail: true
}
let portfolio = [
  portfolio0,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4
]
for (let i = 0; i < portfolio.length; i++) {
  console.log('Portfolio ' + i + ' title: ' + portfolio[i].title)
  if (portfolio[i].hasThumbnail === true) {
    console.log('images/Screenshot' + portfolio[i].id + '.png')
  }
}
