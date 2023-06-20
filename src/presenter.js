import Frases from "./sumador";

const first = document.querySelector("#frase");
const form = document.querySelector("#contar-form");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  const contar = new Frases();
  event.preventDefault();

  const frase = first.value;
  const resultado = contar.contarPalabras(frase);

  // Convertir el objeto de resultado a una cadena legible
  let resultadoString = "";
  for (const palabra in resultado) {
    resultadoString += `${palabra}: ${resultado[palabra]}\n`;
  }

  div.innerHTML = "<p>" + resultadoString + "</p>";
});
