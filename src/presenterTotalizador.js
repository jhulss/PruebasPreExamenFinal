import Totalizador from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const tird = document.querySelector("#codigo")
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");


const total = new Totalizador();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + "Precio neto: " + total.calcularTotal(firstNumber, secondNumber) + "<br>"
                   + "impuesto: " +  total.verificarCodigo(tird.value) + "<br>" + "Descuento: " + total.calcularDescuento() + "<br>" + "Total Final: " + total.totalizador() +"</p>" ;

});

