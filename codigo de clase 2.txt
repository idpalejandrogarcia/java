var numero = prompt('Dame un numero');
var signo = prompt('Dame un signo');
var numero2 = prompt('Dame un numero');
function operacion (numero, numero2) {
  var valor1 = parseInt(numero);
  var valor2 = parseInt(numero2);
  var valor1isNaN= isNaN(valor1);
  var valor2isNaN= isNaN(valor2);
  if (valor1isNaN==true || valor2isNaN==true) /**
   * Recordar que se comprueba si es verdadero a que no hay un numero
   */ {
    resultado = "que me tienes que dar un numero"
    return resultado;
  } else{
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
    } else {
      resultado = "que me tienes que dar un operador"
      return resultado;
    }
  }
}
var resultado=operacion;
alert ('El resulado es ' + operacion(numero, numero2));
