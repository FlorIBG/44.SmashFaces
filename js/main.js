var mexico = [{
            src: "image/AleD.jpg",
            name: "Alejandra Duran"
            },
            {
            src: "image/AleE.jpg",
            name: "Alejandra Escobar"
            },
            {
            src: "image/Moni.jpg",
            name: "Monica"
            },
            {
            src: "image/Pao.jpg",
            name: "Ana Paola"
            },
            {
            src: "image/San.jpg",
            name: "San"
            }];
var select = document.getElementById("sedes");
    select.addEventListener("change", sedes); 
var contador = 0;
var intentos = 0;
    function sedes () {
        if (select.value == "mexico") {
            proceso(mexico);
        }
    }
    function proceso (pais) {
        var alumna2 =imagenes(pais);
        var button = document.getElementById("comprobar");
            button.addEventListener("click", nombreComparado);
        function nombreComparado () {
            console.log("sirve")
            var respuesta =document.getElementById("nombre").value;
            if (respuesta == alumna2.name) {
                contador +=5;
                var span = document.getElementById("puntaje");
                    span.innerHTML = "Has obtenido " + contador + " puntos."
                var p = document.getElementById("mensaje");
                    p.innerHTML = "Conoces muy bien a " + alumna2.name; 
                    alumna2 = imagenes(pais);
                              clean();
            }
            else {
                intentos ++;
                var p = document.getElementById("mensaje");
                    p.innerHTML = "Intentalo otra vez";
                if (intentos == 5) {
                    contador = contador - 1;
                    var span = document.getElementById("puntaje");
                        span.innerHTML = "Has obtenido " + contador + " puntos.";
                    var p = document.getElementById("mensaje");
                        p.innerHTML = "Has excedido los intentos";
                        intentos = 0;
                    alumna2 = imagenes(pais);
                    clean();
                }
                clean();
            }
        }
    }
    function imagenes (pais) {
      console.log("esta corriendo")
        var i = mathRamdom(0,5);
        var alumna = pais[i];
        var foto = document.getElementById("foto");
            foto.setAttribute("src", alumna.src);
        console.log(foto);
        var contenedorImagen = document.getElementById("contenedorFoto");
            contenedorImagen.appendChild(foto);
            return alumna;
    }
    function clean(){
      document.getElementById("nombre").reset();
}
    function mathRamdom (low, high) {
        return low + Math.floor(Math.random() * (high - low));
    }
