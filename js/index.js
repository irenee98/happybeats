function cargar() {
    const feedUrl = "https://noticias-music0.webnode.es/rss/all.xml";
    const proxys = [
        "https://api.allorigins.win/raw?url=",
        "https://api.codetabs.com/v1/proxy?quest=",
        "https://corsproxy.io/?"
    ];

    // probamos cada proxy hasta que funcione uno
    function intentarProxy(i) {
        if (i >= proxys.length) {
            document.getElementById("caja").innerHTML = "No se pudo cargar el feed (todos los proxys fallaron)";
            return;
        }

        fetch(proxys[i] + encodeURIComponent(feedUrl))
            .then(res => {
                if (!res.ok) throw new Error("Fallo en el proxy");
                return res.text();
            })
            .then(str => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(str, "text/xml");
                const items = doc.getElementsByTagName("item");

                let cadena = "";
                for (let j = 0; j < 3 && j < items.length; j++) {
                    const titulo = items[j].getElementsByTagName("title")[0].textContent;
                    const descripcion = items[j].getElementsByTagName("description")[0].textContent;
                    const enlace = items[j].getElementsByTagName("link")[0].textContent;

                    cadena += `Titular: <b>${titulo}</b><br>`;
                    cadena += `Descripción: ${descripcion}<br>`;
                    cadena += `Enlace: <a href="${enlace}" target="_blank">${enlace}</a><br><br>`;
                }
                document.getElementById("caja").innerHTML = cadena;
            })
            .catch(() => intentarProxy(i + 1));
    }

    intentarProxy(0);
}
