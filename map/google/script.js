function initMap() {
  var home = {lat: 34.806760, lng: -92.482454};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: home,
    mapTypeId: 'satellite'
  });
  var marker = new google.maps.Marker({
    position: home,
    map: map
  });
}
