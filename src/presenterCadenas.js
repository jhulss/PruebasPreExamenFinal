import CalcuCadenas from "./calcucadenas";

const input = document.querySelector("#cadena");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  const calcuCadenas = new CalcuCadenas();
  event.preventDefault();

  const cadena = input.value;
  const resultado = calcuCadenas.calcularSumaCadenas(cadena);

  div.innerHTML = "<p>El resultado de la suma es: " + resultado + "</p>";
});