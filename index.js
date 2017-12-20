var enlaces=document.getElementsByTagName("a");
alert("Numero total de enlaces: "+enlaces.length);
var i;
var cantidadenlacesexternos = 0;
var tipoenlaceexterno = 'http://p';
for (i = 0; i < enlaces.length; i++) {
  var mienlace = enlaces[i].href;
  if (mienlace.startsWith(tipoenlaceexterno)) {
    cantidadenlacesexternos ++;
  }
}
alert("Numero total de etiquetas a que llevan fuera es : " + cantidadenlacesexternos);

var parrafo = document.createElement(’a’);
parrafo.setAttribute('href','enlace');
var contenido = document.createTextNode(’Hola facebook’);
parrafo.appendChild(contenido);
document.body.footer.appendChild(parrafo);
var parrafo = document.createElement(’a’);
var contenido = document.createTextNode(’Hola google);
parrafo.appendChild(contenido);
document.body.footer.appendChild(parrafo);

var enlacex=document.getElementsByTagName("div")[1];
var enlacesp=enlacex.getElementsByTagName("p");
alert("Numero total de etiquetas p en el segundo div es : "+enlacesp.length);
