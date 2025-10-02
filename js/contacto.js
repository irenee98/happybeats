var mapa = L.map('mapa').setView([36.7217318,-4.4288972], 13);


        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(mapa);

        
        function getLocation() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
          } else {
              alert("La geolocalización no es soportada por este navegador.");
          }
      }

      
      function showPosition(position) {
          var Lat = position.coords.latitude;
          var Lng = position.coords.longitude;

          

          
          L.marker([Lat, Lng]).addTo(mapa)
              .bindPopup("¡Usted está aquí!").openPopup();

          
          var empresa = L.latLng(36.7117318,-4.4288972); 

          
          L.Routing.control({
              waypoints: [
                  L.latLng(Lat, Lng), 
                  empresa 
              ],
              language: 'es',
              routeWhileDragging: true
          }).addTo(mapa);
      }

      
      getLocation();












/*
var Icon = L.icon({
  iconUrl: './../assets/leaflet/images/marker-icon.png',
  shadowUrl: './../assets/leaflet/images/marker-shadow.png',
  iconSize:[38,95],
  shadowSize:[50,64],
  iconAnchor:[22,94],
  shadowAnchor: [4,62],
  popupAnchor: [-3,-76]
})

var popup = L.popup().setLatLng([36.7117318,-4.4288972]).setContent('HappyBeats');

var marker = L.marker([36.7117318,-4.4288972], {icon:Icon}).binPopup(popup).open().addTo(mapa);
*/







/*
navigator.geolocation.getCurrentPosition(function (position) {
    var lat= position.coords.latitude;
    var lon = position.coords.longitude;
    L.marker([lat,lon]).addTo(mapa).binPopup('Estás aquí');
});


    var empresaLocation = L.latLng(36.7117318,-4.4288972);



    L.marker(empresaLocation).addTo(mapa).binPopup('Tu destino');

    L.Routing.control({
        waypoints: [
            L.latLng(lat,lon), empresaLocation],
        routewhileDragging: true
    }).addTo(mapa);


    mapa.fitBounds([L.latLng(lat, lon), empresaLocation]);*/





    














 