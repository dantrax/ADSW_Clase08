function calcular() {
  var operando1 = Number(document.getElementById("operando1").value);
  var operando2 = Number(document.getElementById("operando2").value);
  var resultado = 0;
  var select = document.getElementById("opcion");
  var opcion = select.options[select.selectedIndex];

  switch (opcion.value) {
    case "1":
      resultado = operando1 + operando2;
      break;
    case "2":
      resultado = operando1 - operando2;
      break;
    case "3":
      resultado = operando1 * operando2;
      break;
    case "4":
      resultado = operando1 / operando2;
      break;
    default:
      resultado = "OPCION NO VALIDA";
      break;
  }
  document.getElementById("resultado").value = resultado;
}

function calcularTotal(){
var cantidad = document.getElementById("cantidad").value;
var pv = document.getElementById("pv").value;
var total = cantidad*pv;
var iva = total * 0.13;
document.getElementById("total").value=total;
document.getElementById("iva").value=iva;
}

function establecerPrecio(){
  var select = document.getElementById("producto");
  var opcion = select.options[select.selectedIndex];
  var precioventa=0;
  switch (opcion.value) {
    case "1":
      precioventa=15.5;
      break;
    case "2":
      precioventa=13.25;
      break;
    case "3":
      precioventa=1.25;
      break;
    case "4":
      precioventa=10.5;
      break;
      case "5":
      precioventa=7.55;
      break;
    default:
      resultado = "OPCION NO VALIDA";
      break;
  }
  document.getElementById("pv").value = precioventa;
  calcularTotal();
}