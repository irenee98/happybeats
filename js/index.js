function cargar() {
    var objHttp = new XMLHttpRequest();
    objHttp.open("GET", "https://noticias-music0.webnode.es/rss/all.xml", true);

    objHttp.onreadystatechange = function () {
        if (objHttp.readyState === 4 && objHttp.status === 200) {
            var documento = objHttp.responseXML;
            var items = documento.getElementsByTagName("item");
            var cadena = "";

            for (var i = 0; i < 3 && i < items.length; i++) {
                var titulo = items[i].getElementsByTagName("title")[0].textContent;
                var descripcion = items[i].getElementsByTagName("description")[0].textContent;
                var enlace = items[i].getElementsByTagName("link")[0].textContent;

                cadena += "Titular: <b>" + titulo + "</b><br>";
                cadena += "Descripción: " + descripcion + "<br>";
                cadena += "Enlace: <a href='" + enlace + "' target='_blank'>" + enlace + "</a><br><br>";
            }

            document.getElementById("caja").innerHTML = cadena;
        }
    };

    objHttp.send();
}


