
var diasdelasemanaes = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var diasdelasemanaen = ["monday", "tuesday", "wensday", "thusday", "friday", "saturday", "sunday"];
var diasdelasemanait = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
for (var i = 0; i < 8; i++) {
  var numero = prompt('Dame un numero para el dia');
  function diasemana (numero) {
    numero = numero - 1;
    var valor = parseInt(numero);
    var numeroisNaN= isNaN(valor);
    if (numeroisNaN==true) {
      resultado = "que no es un numero, por favor intruduce un numero";
      return resultado;
    } else if (numero<0) {
      resultado = "uno que no existe, dame un numero que exista";
      return resultado;
    } else if (numero>6) {
      resultado = "uno que no existe, dame un numero que exista";
      return resultado;
    } else {
      var diaes = diasdelasemanaes[numero];
      var diaen = diasdelasemanaen[numero];
      var diait = diasdelasemanait[numero];
      resultado = diaes + " en ingles " + diaen + " y que en italiano es " + diait;
      return resultado;
    }
  }
  var dia = diasemana (numero);
  alert ('El dia que pides es ' + dia);
}
