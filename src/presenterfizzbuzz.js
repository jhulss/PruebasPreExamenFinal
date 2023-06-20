import FizzBuzz from "./sumador";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#fizForm");
const div = document.querySelector("#resultado-div");

const fizz = new FizzBuzz();
form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + fizz.verificar(first.value) + "</p>";
});
