mapboxgl.accessToken = 'pk.eyJ1Ijoia2picm9ib2NhdDgiLCJhIjoiY2tpMXgzMHlpMGs2eDJ3cW5oem11czhtMyJ9._MmkcPr7yXJ3D2IhLNMlAA';
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })


function successLocation(position) {
center = position
setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation() {
setupMap([-2.24, 53.48])
}
function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 14,
        center: center
      });
      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav);
      var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1Ijoia2picm9ib2NhdDgiLCJhIjoiY2tpMXgzMHlpMGs2eDJ3cW5oem11czhtMyJ9._MmkcPr7yXJ3D2IhLNMlAA'
      });
      map.addControl(directions, 'top-left');
    }