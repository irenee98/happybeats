var mapa = L.map('mapa').setView([36.7217318, -4.4288972], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    var empresa = L.latLng(36.7117318, -4.4288972);

    L.marker(empresa)
      .addTo(mapa)
      .bindPopup("Calle Salitre, 49, Distrito Centro, 29002 Málaga")
      .openPopup();

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        alert("La geolocalización no es soportada por este navegador.");
      }
    }

    function showPosition(position) {
      var Lat = position.coords.latitude;
      var Lng = position.coords.longitude;
      var cliente = L.latLng(Lat, Lng);

      L.marker(cliente)
        .addTo(mapa)
        .bindPopup("Tu ubicación")
        .openPopup();

      L.Routing.control({
        waypoints: [
          cliente,
          empresa
        ],
        language: 'es',
        routeWhileDragging: false,
        showAlternatives: false,
        createMarker: function() { return null; } // Evita marcadores duplicados
      }).addTo(mapa);
    }

    function showError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          alert("El usuario negó la solicitud de geolocalización.");
          break;
        case error.POSITION_UNAVAILABLE:
          alert("La información de ubicación no está disponible.");
          break;
        case error.TIMEOUT:
          alert("La solicitud para obtener la ubicación ha caducado.");
          break;
        default:
          alert("Ocurrió un error desconocido.");
      }
    }

    getLocation();
