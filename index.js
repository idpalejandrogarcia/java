var numero = prompt('Dame un numero');
var signo = prompt('Dame un signo');
var numero2 = prompt('Dame un numero');
function operacion (numero, numero2) {
  var valor1 = parseInt(numero);
  var valor2 = parseInt(numero2);
  if (signo==="+") {
    resultado = valor1 + valor2;
    return resultado;
  } else if (signo==="-") {
    resultado = valor1 - valor2;
    return resultado;
  } else if (signo==="*") {
    resultado = valor1 * valor2;
    return resultado;
  } else if (signo==="/") {
    resultado = valor1 / valor2;
    return resultado;
  }
}
var resultado=operacion;
alert ('El resulado es ' + operacion(numero, numero2));
