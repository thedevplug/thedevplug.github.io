function initMap() {
  var uluru = {lat: 34.806760, lng: -92.482454};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru,
    mapTypeId: 'satellite'
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
