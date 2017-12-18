var numero = prompt('Dame un numero');
var numero2 = prompt('Dame un numero');
function sumarnumero (numero, numero2) {
  var valor1 = parseInt(numero);
  var valor2 = parseInt(numero2);
  resultado = valor1 + valor2;
  return resultado;
}
var resultado=sumarnumero;
alert ('La suma es ' + sumarnumero(numero, numero2));
